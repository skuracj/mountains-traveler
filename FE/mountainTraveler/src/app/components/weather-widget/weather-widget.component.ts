import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Component({
    selector: 'app-weather-widget',
    templateUrl: './weather-widget.component.html',
    styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit {
    fiveDaysWeather = [];

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit() {
        this.httpClient.get('https://community-open-weather-map.p.rapidapi.com/forecast/daily', {
            headers: {
                "x-rapidapi-key": "492f94eddfmsh6955462488b3de2p184695jsn958a672c4d5f",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            },
            params: {
                "q": "warsaw,Poland",
                "cnt": "5",
                "units": "metric",
                "lang": "pl"
            }
        }).pipe(tap(weather => {
            weather['list'].forEach(day => {
                this.fiveDaysWeather.push({
                    date: new Date(day['dt'] * 1000).getDay(),
                    temp: day['temp'],
                    rain: day['rain'],
                    sunrise: day['sunrise'],
                    sunset: day['sunset']
                });
            });
        })).subscribe();
    }

}
