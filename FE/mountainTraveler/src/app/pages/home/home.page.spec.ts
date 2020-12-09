import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {HomePage} from './home.page';
import {RouterTestingModule} from '@angular/router/testing';
import {Storage} from '@ionic/storage';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {environment} from '../../../environments/environment';
import {WeatherWidgetComponent} from '../../components/weather-widget/weather-widget.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {By} from '@angular/platform-browser';


describe('HomePage', () => {
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;
    let storageSpy;
    let inAppBrowserSpy;

    beforeEach(async(() => {
        storageSpy = jasmine.createSpyObj('Storage', ['get']);
        inAppBrowserSpy = jasmine.createSpyObj('InAppBrowser', ['create']);

        TestBed.configureTestingModule({
            declarations: [HomePage, WeatherWidgetComponent],
            imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientTestingModule],
            providers: [
                {provide: Storage, useValue: storageSpy},
                {provide: InAppBrowser, useValue: inAppBrowserSpy}
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
            storageSpy.get.withArgs('city').and.returnValue(mockCity);

            await component.ionViewWillEnter();

            expect(component.city).toEqual(mockCity);
        });
    });

    describe('When city selection changed', () => {
        const selectedCity = 'warsaw';
        beforeEach(fakeAsync(() => {
            const ionSelect = fixture.debugElement.query(By.css(`[value="warsaw"]`));

            ionSelect.nativeElement.click();

        }));



        it('should set city', () => {
            const spy = spyOn(component, 'onSelectChanged');
            expect(spy).toHaveBeenCalled();
        });
    });
});
