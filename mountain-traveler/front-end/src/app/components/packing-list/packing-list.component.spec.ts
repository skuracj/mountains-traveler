import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AlertController, IonicModule} from '@ionic/angular';

import {PackingListComponent} from './packing-list.component';
import {By} from '@angular/platform-browser';
import {BaseProfileService} from '../../services/profile/profile.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {of} from 'rxjs';
import {usersMock} from '../../common/testing/mocks/users.mock';


describe('PackingListComponent', () => {
    let component: PackingListComponent;
    let fixture: ComponentFixture<PackingListComponent>;
    let profileServiceSpy;
    let alertControllerSpy;
    let alertSpy;

    beforeEach(async(() => {
        profileServiceSpy = jasmine.createSpyObj('BaseProfileService', ['updateUserPackingList', 'loadUserProfile']);
        alertControllerSpy = jasmine.createSpyObj('AlertController', ['create']);
        alertSpy = jasmine.createSpyObj('HTMLIonAlertElement', ['present']);

        TestBed.configureTestingModule({
            declarations: [PackingListComponent],
            imports: [IonicModule],
            providers: [
                {provide: BaseProfileService, useValue: profileServiceSpy},
                {provide: AlertController, useValue: alertControllerSpy},
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],

        }).compileComponents();
        alertControllerSpy.create.and.callFake(() => Promise.resolve(alertSpy));
        profileServiceSpy.updateUserPackingList.and.stub();
        profileServiceSpy.profile$ = of(usersMock[0]);
        profileServiceSpy.loadUserProfile.and.stub();

        fixture = TestBed.createComponent(PackingListComponent);
        component = fixture.componentInstance;
        spyOn(component, 'getPackingList').and.callThrough();
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('when component initialized should call getPackingList', () => {
        expect(component.getPackingList).toHaveBeenCalled();
    });

    it('#addItemToList', () => {
        const item = 'good mood';
        component.packingList = [];

        component.addItemToList(item);

        expect(component.packingList[0]).toEqual({title: item, packed: false});
    });

    describe('When #add-new-item clicked', () => {
        const inputValue = 'SomeValue';
        beforeEach(() => {
            spyOn(component, 'openAddModal').and.callThrough();
            component.packingList = [];
            fixture.detectChanges();
            fixture.whenRenderingDone();
            const addButton = fixture.debugElement.query(By.css(`[id="add-item-button"]`));

            addButton.nativeElement.click();
        });

        it('should call #openConfirmationAlert', () => {
            expect(component.openAddModal).toHaveBeenCalled();
        });

        it('should create alert', () => {
            expect(alertControllerSpy.create).toHaveBeenCalled();
        });

        it('Should present alert', async () => {
            await component.openAddModal();

            expect(alertSpy.present).toHaveBeenCalled();
        });
    });

    describe('When "delete" button clicked', () => {
        it('should delete item from packingList', () => {
            const mockPackingList = [
                {
                    title: 'Backpack',
                    packed: true,
                },
                {
                    title: 'Map',
                    packed: true,
                },
                {
                    title: 'Bottle',
                    packed: false,
                }];
            component.packingList = [...mockPackingList];
            fixture.detectChanges();
            fixture.whenRenderingDone();
            const deleteButtons = fixture.debugElement.queryAll(By.css(`[id="delete-item-button"]`));

            deleteButtons[0].nativeElement.click();

            expect(component.packingList).not.toContain(mockPackingList[0]);
        });
    });

    describe('When save button clicked', () => {
        beforeEach(() => {
            spyOn(component, 'savePackingList').and.callThrough();
            fixture.detectChanges();
            fixture.whenRenderingDone();
            const saveButton = fixture.debugElement.query(By.css(`[id="save-button"]`));

            saveButton.nativeElement.click();
            fixture.detectChanges();
        });
        it('Should call savePackingList', () => {
            expect(component.savePackingList).toHaveBeenCalled();
        });

        it('should call profileService.updateUserPackingList', () => {
            expect(profileServiceSpy.updateUserPackingList).toHaveBeenCalledWith(component.packingList);
        });
    });
});
