import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule, ModalController} from '@ionic/angular';

import {PeoplePage} from './people.page';
import {Storage} from '@ionic/storage';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {UserDetailsComponent} from '../../components/user-details/user-details.component';

import {NO_ERRORS_SCHEMA} from '@angular/core';
import {userMock} from '../../common/testing/mocks/user.mock';

describe('People', () => {
    let component: PeoplePage;
    let fixture: ComponentFixture<PeoplePage>;
    let storageSpy;
    let userDetailsComponent: UserDetailsComponent;
    let modalControllerSpy;
    let modalSpy;

    beforeEach(async(() => {
        storageSpy = jasmine.createSpyObj('Storage', ['get', 'set']);
        modalControllerSpy = jasmine.createSpyObj('ModalController', ['create']);
        modalSpy = jasmine.createSpyObj('HTMLIonModalElement', ['present']);

        TestBed.configureTestingModule({
            declarations: [
                PeoplePage,
                UserDetailsComponent
                ],
            imports: [IonicModule.forRoot(), RouterTestingModule],
            providers: [
                {provide: Storage, useValue: storageSpy},
                {provide: ModalController, useValue: modalControllerSpy}],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(PeoplePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
        modalControllerSpy.create.and.callFake(() => Promise.resolve(modalSpy));
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('When segment clicked', () => {
        it('should set selectedSection to the value of clicked segment', () => {
            const testedSection = 'friends';
            const buttonId = fixture.debugElement.query(By.css(`[id="${testedSection}"]`));

            buttonId.nativeElement.click();

            expect(component.selectedSection).toEqual(testedSection);
        });
    });

    describe('UserDetailsComponent when setting button clicked', () => {
        let settingsButton;
        beforeEach(() => {

            fixture.detectChanges();

            const userDetails = fixture.debugElement.query(By.directive(UserDetailsComponent));
            userDetailsComponent = userDetails.componentInstance;

            settingsButton = userDetails.query(By.css('[id="settings-button"]'));
        });

        it('should open settings modal', () => {
            spyOn(component, 'openSettingsModal');
            settingsButton.nativeElement.click();

            expect(component.openSettingsModal).toHaveBeenCalled();
        });

        it('Should present packing-list', async () => {
            await component.openSettingsModal();

            expect(modalSpy.present).toHaveBeenCalled();
        });
    });
});

