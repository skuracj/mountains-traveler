import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule, ModalController} from '@ionic/angular';

import {PackingListComponent} from './packing-list.component';
import {By} from '@angular/platform-browser';


describe('PackingListComponent', () => {
    let component: PackingListComponent;
    let fixture: ComponentFixture<PackingListComponent>;
    let modalControllerSpy;

    beforeEach(async(() => {
        modalControllerSpy = jasmine.createSpyObj('ModalController', ['dismiss']);

        TestBed.configureTestingModule({
            declarations: [PackingListComponent],
            imports: [IonicModule.forRoot()],
            providers: [{provide: ModalController, useValue: modalControllerSpy}]
        }).compileComponents();

        fixture = TestBed.createComponent(PackingListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        modalControllerSpy.dismiss.and.returnValue(Promise.resolve());
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('When in edit mode and value present in the input', () => {
        const inputValue = 'SomeValue';
        beforeEach(() => {
            component.packingList = [];
            component.editMode = true;
            component.newItemValue = inputValue;
            fixture.detectChanges();
            fixture.whenRenderingDone();
            const addButton = fixture.debugElement.query(By.css(`[id="add-item-button"]`));

            addButton.nativeElement.click();
        });

        it('Should add item when "add item" button clicked and clear the newItemValue', () => {
            expect(component.packingList).toContain({title: inputValue, packed: false});
            expect(component.newItemValue).toEqual(null);
        });
    });

    describe('When "delete" button clicked', () => {
        it('should delete item from packingList', () => {
            const mockPackingList = [
                {
                    title: 'Backpack',
                    packed: true
                },
                {
                    title: 'Map',
                    packed: true
                },
                {
                    title: 'Bottle',
                    packed: false
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
        it('Should save list', () => {
            spyOn(component, 'savePackingList');
            fixture.detectChanges();
            fixture.whenRenderingDone();
            const saveButton = fixture.debugElement.query(By.css(`[id="save-button"]`));

            saveButton.nativeElement.click();

            expect(component.savePackingList).toHaveBeenCalled();
        });
    });

    describe('When close button clicked', () => {
        it('Should close packing-list', () => {
            fixture.detectChanges();
            fixture.whenRenderingDone();
            const closeButton = fixture.debugElement.query(By.css(`[id="close-button"]`));

            closeButton.nativeElement.click();

            expect(modalControllerSpy.dismiss).toHaveBeenCalled();
        });
    });
});
