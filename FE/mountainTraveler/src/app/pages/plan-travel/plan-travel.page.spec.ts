import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanTravelPage } from './plan-travel.page';
import {RouterTestingModule} from '@angular/router/testing';

describe('PlanTravel', () => {
  let component: PlanTravelPage;
  let fixture: ComponentFixture<PlanTravelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanTravelPage],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanTravelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
