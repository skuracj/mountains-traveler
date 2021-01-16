import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, take, tap} from 'rxjs/operators';
import {DayWeather} from '../../common/models/day-weather';
import {ExternalUrls} from '../../common/constants/ExternalUrls.enum';
import {environment} from '../../../environments/environment';
import {CitiesMappedToCountry} from '../../common/constants/Cities.enum';

@Component({
    selector: 'app-weather-widget',
    templateUrl: './weather-widget.component.html',
    styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnChanges {
    @Input() city: string;

    weatherForNDays: DayWeather[] = [];
    isWeatherDataLoaded = false;

    weatherParams = {
        locale: 'en-EN',
        timeFormatOptions: {hour: '2-digit', minute: '2-digit', hour12: false},
        numberOfDays: '10',
        units: 'metric',
    };

    constructor(private httpClient: HttpClient) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.city.previousValue !== changes.city.currentValue) {
            this.getWeatherForNDays();
        }
    }

    getWeatherForNDays() {
        const headers = {
            'x-rapidapi-key': environment.xRapidapiKey,
            'x-rapidapi-host': ExternalUrls.xRapidapiHost
        };
        const params = {
            q: `${this.city},${CitiesMappedToCountry[this.city].country}`,
            cnt: this.weatherParams.numberOfDays,
            units: this.weatherParams.units,
        };
        this.httpClient.get(`${ExternalUrls.openWeatherApi}/forecast/daily`, {
            headers,
            params
        }).pipe(
            take(1),
            map(weather => weather['list']),
            tap(days => {
                this.weatherForNDays = [];
                days.map(day => {

                    this.weatherForNDays.push({
                        date: new Date(day.dt * 1000).toLocaleDateString(this.weatherParams.locale, {weekday: 'short'}),
                        temp: day.temp,
                        rain: day.rain ? day.rain : 0,
                        icon: day.weather[0].icon,
                        sunrise: new Date(day.sunrise * 1000)
                            .toLocaleTimeString(this.weatherParams.locale, this.weatherParams.timeFormatOptions),
                        sunset: new Date(day.sunset * 1000)
                            .toLocaleTimeString(this.weatherParams.locale, this.weatherParams.timeFormatOptions),

                    });
                });
            }),
            tap(
                _ => {
                    console.log(this.weatherForNDays);
                    this.isWeatherDataLoaded = true;
                })
        ).subscribe();
    }
}
