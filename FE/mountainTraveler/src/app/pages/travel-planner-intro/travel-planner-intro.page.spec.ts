import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelPlannerIntroPage } from './travel-planner-intro.page';
import {RouterTestingModule} from '@angular/router/testing';

describe('TravelPlannerIntro', () => {
  let component: TravelPlannerIntroPage;
  let fixture: ComponentFixture<TravelPlannerIntroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TravelPlannerIntroPage],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelPlannerIntroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
