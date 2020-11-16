import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, take, tap} from "rxjs/operators";
import {DayWeather} from "../../common/models/day-weather";
import {ExternalUrls} from "../../common/constants/ExternalUrls.enum";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-weather-widget',
    templateUrl: './weather-widget.component.html',
    styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnChanges {
    @Input() region;

    fiveDaysWeather: DayWeather[] = [];
    isWeatherDataLoaded = false;

    constructor(private httpClient: HttpClient) {
    }

    ngOnChanges(changes:SimpleChanges) {
        if(changes.region.previousValue !== changes.region.currentValue) {
            this.getWeatherForFiveDays();
        }
    }

    getWeatherForFiveDays() {
        const headers = {
            "x-rapidapi-key": environment.xRapidapiKey,
            "x-rapidapi-host": ExternalUrls.xRapidapiHost
        };
        const params = {
            "q": `${this.region},Poland`,
            "cnt": "5",
            "units": "metric",
        };

        this.httpClient.get(`${ExternalUrls.openWeatherApi}/forecast/daily`, {
            headers,
            params
        }).pipe(
            take(1),
            map(weather => weather['list']),
            tap(days => {
                this.fiveDaysWeather = [];
                days.map(day => {
                    console.log(day);
                    this.fiveDaysWeather.push({
                        date: new Date(day['dt'] * 1000).toLocaleDateString('en-EN', { weekday: 'short' }),
                        temp: day['temp'],
                        rain: day['rain'] ? day['rain'] : 0,
                        icon: day['weather'][0]['icon']
                    });
                });
            }),
            tap(
                _ => {
                    console.log(this.fiveDaysWeather);
                    this.isWeatherDataLoaded = true;
            })
        ).subscribe();
    }
}
