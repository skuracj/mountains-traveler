import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {IonicModule, Platform} from '@ionic/angular';

import {HomePage} from './home.page';
import {RouterTestingModule} from '@angular/router/testing';
import {Storage} from '@ionic/storage';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {environment} from '../../../environments/environment';
import {WeatherWidgetComponent} from '../../components/weather-widget/weather-widget.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StorageObject} from '../../common/constants/StorageObjects.enum';

class MockPlatform {
    ready: jasmine.Spy<any>;
    backButton: any;
}

class MockBackButton {
    subscribeWithPriority: jasmine.Spy<any>;
}

describe('HomePage', () => {
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;
    let storageSpy;
    let inAppBrowserSpy;
    let platformMock;
    const mockBackButton = new MockBackButton();


    beforeEach(async(() => {
        storageSpy = jasmine.createSpyObj('Storage', ['get', 'set']);
        inAppBrowserSpy = jasmine.createSpyObj('InAppBrowser', ['create']);
        mockBackButton.subscribeWithPriority = jasmine.createSpy('subscribeWithPriority', (priority, fn) => {
        });

        platformMock = new MockPlatform();
        platformMock.ready = () => Promise.resolve();
        platformMock.backButton = mockBackButton;

        TestBed.configureTestingModule({
            declarations: [HomePage, WeatherWidgetComponent],
            imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientTestingModule],
            providers: [
                {provide: Storage, useValue: storageSpy},
                {provide: InAppBrowser, useValue: inAppBrowserSpy},
                {provide: Platform, useValue: platformMock}
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('When component initialized', () => {
        it('should set city to default value if storage does not contain city object', async () => {
            await component.ionViewWillEnter();
            expect(component.city).toEqual(environment.defaultCity);
        });

        it('should set city to value from storage', async () => {
            const mockCity = 'Warsaw';
            storageSpy.get.withArgs(StorageObject.city).and.returnValue(mockCity);

            await component.ionViewWillEnter();

            expect(component.city).toEqual(mockCity);
        });
    });

    describe('When #onSelectChange called with event', () => {
        const selectedCity = 'warsaw';

        beforeEach(() => {
            const event = {detail: {value: selectedCity}};

            component.onSelectChanged(event);
        });

        it('Should set city equal to passed event value', () => {
            expect(component.city).toEqual(selectedCity);
        });

        it('should save value from passed event value', () => {
            expect(storageSpy.set).toHaveBeenCalledWith(StorageObject.city, selectedCity);
        });
    });

    describe('When #navigateToExternalUrl called with url', () => {
        it('and platform is ready should create iab object with passed url', async() => {
            const url = 'www.google.pl';
            await component.navigateToExternalUrl(url);
            expect(inAppBrowserSpy.create).toHaveBeenCalledWith(url, '_blank', 'location=off,hideurlbar=yes');
        });
    });
});
