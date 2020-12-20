import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelPlannerPage } from './travel-planner.page';
import {RouterTestingModule} from '@angular/router/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('TravelPlannerPage', () => {
  let component: TravelPlannerPage;
  let fixture: ComponentFixture<TravelPlannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelPlannerPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes([])],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelPlannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
