import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {DayWeather} from "../../common/models/day-weather";

@Component({
    selector: 'app-weather-widget',
    templateUrl: './weather-widget.component.html',
    styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit {
    fiveDaysWeather: DayWeather[] = [];

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit() {
        const headers = {
            "x-rapidapi-key": "492f94eddfmsh6955462488b3de2p184695jsn958a672c4d5f",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        };
        const params = {
            "q": "warsaw,Poland",
            "cnt": "5",
            "units": "metric",
            "lang": "pl"
        };

        // this.httpClient.get('https://community-open-weather-map.p.rapidapi.com/forecast/daily', {
        //     headers,
        //     params
        // }).pipe(tap(weather => {
        //     weather['list'].forEach(day => {
        //         this.fiveDaysWeather.push({
        //             date: new Date(day['dt'] * 1000).getDay(),
        //             temp: day['temp'],
        //             rain: day['rain'],
        //             sunrise: day['sunrise'],
        //             sunset: day['sunset']
        //         });
        //     });
        // })).subscribe();
        this.httpClient.get('https://community-open-weather-map.p.rapidapi.com/forecast/daily', {
            headers,
            params
        }).pipe(
            map(weather => weather['list']),
            tap(days => {
                days.map(day => {
                    console.log(day);
                    this.fiveDaysWeather.push({
                        date: new Date(day['dt'] * 1000).toLocaleDateString('en-EN', { weekday: 'short' }),
                        temp: day['temp'],
                        rain: day['rain'] ? day['rain'] : 0,
                        icon: day['weather'][0]['icon']
                    })


                })

            }),
            tap( _ => console.log(this.fiveDaysWeather))
        ).subscribe();
    }

}
