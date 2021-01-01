import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {TravelPlannerPage} from './travel-planner.page';
import {RouterTestingModule} from '@angular/router/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AccordionComponent} from '../../components/accordion/accordion.component';
import {By} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HyphensToSpacesPipe} from '../../pipes/hyphens-to-spaces.pipe';
import {StarRatingModule} from 'ionic5-star-rating';

describe('TravelPlannerPage', () => {
    let component: TravelPlannerPage;
    let fixture: ComponentFixture<TravelPlannerPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TravelPlannerPage,
                AccordionComponent,
                HyphensToSpacesPipe
            ],
            imports: [
                IonicModule.forRoot(),
                RouterTestingModule.withRoutes([]),
                ReactiveFormsModule,
                StarRatingModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
        fixture = TestBed.createComponent(TravelPlannerPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
        spyOn(component, 'createForm').and.callThrough();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call closeAccordion when apply filters clicked', async () => {
        spyOn(component.filtersAccordion, 'closeAccordion');
        await fixture.whenRenderingDone();

        fixture.debugElement.query(By.css(`[id="apply_filters"]`)).nativeElement.click();

        expect(component.filtersAccordion.closeAccordion).toHaveBeenCalled();
    });
});
