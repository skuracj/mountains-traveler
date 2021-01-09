import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AlertController, ModalController, Platform} from '@ionic/angular';

import {HomePage} from './home.page';
import {RouterTestingModule} from '@angular/router/testing';
import {Storage} from '@ionic/storage';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {environment} from '../../../environments/environment';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StorageObject} from '../../common/constants/StorageObjects.enum';
import {By} from '@angular/platform-browser';
import {PackingListComponent} from '../../components/packing-list/packing-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

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
    let modalControllerSpy;
    let modalSpy;
    let alertControllerSpy;
    let alertSpy;

    beforeEach(async(() => {
        storageSpy = jasmine.createSpyObj('Storage', ['get', 'set']);
        inAppBrowserSpy = jasmine.createSpyObj('InAppBrowser', ['create']);
        modalControllerSpy = jasmine.createSpyObj('ModalController', ['create']);
        modalSpy = jasmine.createSpyObj('HTMLIonModalElement', ['present']);
        alertControllerSpy = jasmine.createSpyObj('AlertController', ['create']);
        alertSpy = jasmine.createSpyObj('HTMLIonAlertElement', ['present']);
        mockBackButton.subscribeWithPriority = jasmine.createSpy('subscribeWithPriority', (priority, fn) => {
        });

        platformMock = new MockPlatform();
        platformMock.ready = () => Promise.resolve();
        platformMock.backButton = mockBackButton;

        TestBed.configureTestingModule({
            declarations: [HomePage],
            imports: [ RouterTestingModule, HttpClientTestingModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                {provide: Storage, useValue: storageSpy},
                {provide: InAppBrowser, useValue: inAppBrowserSpy},
                {provide: Platform, useValue: platformMock},
                {provide: ModalController, useValue: modalControllerSpy},
                {provide: AlertController, useValue: alertControllerSpy},
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
        modalControllerSpy.create.and.callFake(() => Promise.resolve(modalSpy));
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

    describe('When #onLocationChange called with event', () => {
        const selectedCity = 'warsaw';

        beforeEach(() => {
            const event = {detail: {value: selectedCity}};

            component.onLocationChanged(event);
        });

        it('Should set city equal to passed event value', () => {
            expect(component.city).toEqual(selectedCity);
        });

        it('should save value from passed event value', () => {
            expect(storageSpy.set).toHaveBeenCalledWith(StorageObject.city, selectedCity);
        });
    });

    describe('When #navigateToExternalUrl called with url', () => {
        it('and platform is ready should create iab object with passed url', async () => {
            const url = 'www.google.pl';
            await component.navigateToExternalUrl(url);
            expect(inAppBrowserSpy.create).toHaveBeenCalledWith(url, '_blank', 'location=off,hideurlbar=yes');
        });
    });

    describe('when packingListButton clicked', () => {
        beforeEach(() => {
            spyOn(component, 'showPackingListModal').and.callThrough();
            const packingListButton = fixture.debugElement.query(By.css(`[id="packing-list"]`));
            packingListButton.nativeElement.click();
        });

        it('should call #showPackingListModal', () => {
            expect(component.showPackingListModal).toHaveBeenCalled();
        });


        it('Should create packing-list with title', () => {
            expect(modalControllerSpy.create).toHaveBeenCalledWith({
                component: PackingListComponent,
                componentProps: {
                    title: 'Packing list',
                }
            });
        });

        it('Should present packing-list', async () => {
            await component.showPackingListModal();

            expect(modalSpy.present).toHaveBeenCalled();
        });
    });

    describe('when sosButton clicked', () => {

        beforeEach(() => {
            alertControllerSpy.create.and.callFake(() => Promise.resolve(alertSpy));

            fixture.whenRenderingDone();
            const sosButton = fixture.debugElement.query(By.css(`[id="sos"]`));
            spyOn(component, 'openConfirmationAlert').and.callThrough();

            sosButton.nativeElement.click();
        });

        it('should call #openConfirmationAlert', () => {
            expect(component.openConfirmationAlert).toHaveBeenCalled();
        });


        it('Should create alert', () => {
            expect(alertControllerSpy.create).toHaveBeenCalledWith({
                header: 'Confirm SOS !',
                message: 'Are You sure You want to call help?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Okay',
                        cssClass: 'sos',
                        handler: component.callSos,
                    }
                ]
            });
        });

        it('Should present alert', async () => {
            await component.openConfirmationAlert();

            expect(alertSpy.present).toHaveBeenCalled();
        });
    });
});
