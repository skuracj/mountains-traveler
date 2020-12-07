import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, take, tap} from 'rxjs/operators';
import {DayWeather} from '../../common/models/day-weather';
import {ExternalUrls} from '../../common/constants/ExternalUrls.enum';
import {environment} from '../../../environments/environment';
import {UserLocation} from '../../common/models/user-location';
import {citiesAndCountries} from '../../common/constants/CitiesAndCountries.enum';

@Component({
    selector: 'app-weather-widget',
    templateUrl: './weather-widget.component.html',
    styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnChanges {
    @Input() city: string;

    fiveDaysWeather: DayWeather[] = [];
    isWeatherDataLoaded = false;
    locale = 'en-EN';
    timeFormatOptions: object = {hour: '2-digit', minute: '2-digit', hour12: false};
    numberOfDays = '10';
    units = 'metric';

    constructor(private httpClient: HttpClient) {
    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.city.previousValue !== changes.city.currentValue) {

            this.getWeatherForFiveDays();
        }
    }

    getWeatherForFiveDays() {
        const headers = {
            'x-rapidapi-key': environment.xRapidapiKey,
            'x-rapidapi-host': ExternalUrls.xRapidapiHost
        };
        const params = {
            q: `${this.city},${citiesAndCountries[this.city]}`,
            cnt: this.numberOfDays,
            units: this.units,
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

                    this.fiveDaysWeather.push({
                        date: new Date(day.dt * 1000).toLocaleDateString(this.locale, {weekday: 'short'}),
                        temp: day.temp,
                        rain: day.rain ? day.rain : 0,
                        icon: day.weather[0].icon,
                        sunrise: new Date(day.sunrise * 1000).toLocaleTimeString(this.locale, this.timeFormatOptions),
                        sunset: new Date(day.sunset * 1000).toLocaleTimeString(this.locale, this.timeFormatOptions),

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
