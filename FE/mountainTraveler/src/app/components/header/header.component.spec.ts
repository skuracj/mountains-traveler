import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule, ModalController} from '@ionic/angular';

import {HeaderComponent} from './header.component';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';
import {ComponentType} from '../../common/constants/ComponentType.enum';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let modalControllerSpy;
    beforeEach(async(() => {
        modalControllerSpy = jasmine.createSpyObj('ModalController', ['dismiss']);

        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [IonicModule.forRoot(),

                RouterTestingModule],
            providers: [{provide: ModalController, useValue: modalControllerSpy}]
        }).compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        modalControllerSpy.dismiss.and.returnValue(Promise.resolve());
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('When close button clicked', () => {
        it('Should close packing-list', () => {
            component.displayMode = ComponentType.modal;
            fixture.detectChanges();
            fixture.whenRenderingDone();
            const closeButton = fixture.debugElement.query(By.css(`[id="close-button"]`));

            closeButton.nativeElement.click();

            expect(modalControllerSpy.dismiss).toHaveBeenCalled();
        });
    });
});
