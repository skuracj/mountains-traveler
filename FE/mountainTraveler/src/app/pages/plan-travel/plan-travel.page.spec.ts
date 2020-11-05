import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { PlanTravelPage } from './plan-travel.page';

describe('Tab2Page', () => {
  let component: PlanTravelPage;
  let fixture: ComponentFixture<PlanTravelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanTravelPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanTravelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
