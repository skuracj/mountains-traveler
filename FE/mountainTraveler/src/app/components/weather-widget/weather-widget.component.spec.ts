import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {WeatherWidgetComponent} from './weather-widget.component';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {SimpleChange} from '@angular/core';
import {ExternalUrls} from '../../common/constants/ExternalUrls.enum';
import {environment} from '../../../environments/environment';
import {weatherApiResponseMock} from '../../common/testing/mocks/weather-api-response.mock';
import {By} from '@angular/platform-browser';
import {CitiesMappedToCountry} from '../../common/constants/Cities.enum';

describe('WeatherWidgetComponent', () => {
    let component: WeatherWidgetComponent;
    let fixture: ComponentFixture<WeatherWidgetComponent>;
    let httpClientSpy;


    beforeEach(async(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        TestBed.configureTestingModule({
            declarations: [WeatherWidgetComponent],
            imports: [IonicModule.forRoot()],
            providers: [
                {provide: HttpClient, useValue: httpClientSpy}
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(WeatherWidgetComponent);
        component = fixture.componentInstance;
        httpClientSpy.get.and.returnValue(of(weatherApiResponseMock));

        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should call getWeatherForNDays when "region" input value changed', () => {
        component.city = 'Zurich';
        spyOn(component, 'getWeatherForNDays');

        component.ngOnChanges({
            city: new SimpleChange(null, component.city, true)
        });

        expect(component.getWeatherForNDays).toHaveBeenCalled();
    });

    it('Should NOT call getWeatherForNDays when "region" input value was NOT changed', () => {
        component.city = 'Zurich';
        spyOn(component, 'getWeatherForNDays');

        component.ngOnChanges({
            city: new SimpleChange(component.city, component.city, true)
        });

        expect(component.getWeatherForNDays).not.toHaveBeenCalled();
    });

    it(`Should call ${ExternalUrls.openWeatherApi} when "region" input value changed`, () => {
        component.city = CitiesMappedToCountry.zurich.city;
        const expectedUrl = `${ExternalUrls.openWeatherApi}/forecast/daily`;
        const requestOptions = {
            headers: {
                'x-rapidapi-key': environment.xRapidapiKey,
                'x-rapidapi-host': ExternalUrls.xRapidapiHost
            },
            params: {
                'q': `${component.city},${CitiesMappedToCountry[component.city].country}`,
                'cnt': '10',
                'units': 'metric',
            }
        };

        component.ngOnChanges({
            city: new SimpleChange(null, component.city, true)
        });

        expect(httpClientSpy.get).toHaveBeenCalledWith(expectedUrl, requestOptions);
    });

    it(`Should call ${ExternalUrls.openWeatherApi} when "city" input value changed and save data`, () => {
        component.city = 'zurich';
        const firstDayMock = weatherApiResponseMock.list[0];

        component.ngOnChanges({
            city: new SimpleChange(null, component.city, true)
        });

        expect(component.weatherForNDays).toEqual([{
            date: new Date(firstDayMock.dt * 1000).toLocaleDateString('en-EN', {weekday: 'short'}),
            temp: firstDayMock.temp,
            rain: firstDayMock.rain,
            icon: firstDayMock.weather[0].icon,
            sunrise: new Date(firstDayMock.sunrise * 1000)
                .toLocaleTimeString(component.weatherParams.locale, component.weatherParams.timeFormatOptions),
            sunset: new Date(firstDayMock.sunset * 1000)
                .toLocaleTimeString(component.weatherParams.locale, component.weatherParams.timeFormatOptions),
        }]);
    });

    it('Should NOT render weather days list when data is NOT loaded', () => {
        const weatherDayList = fixture.debugElement.query(By.css('.weather-widget__list'));

        component.isWeatherDataLoaded = false;

        expect(weatherDayList).toBeFalsy();
    });

    it('Should render weather days list when data loaded', () => {
        const weatherDayList = fixture.debugElement.query(By.css('.weather-widget__list'));

        component.isWeatherDataLoaded = true;

        expect(weatherDayList).toBeFalsy();
    });

});
