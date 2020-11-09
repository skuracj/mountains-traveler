import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnboardingSlideItemPage } from './onboarding-slide-item.page';

describe('OnboardingSlideItemPage', () => {
  let component: OnboardingSlideItemPage;
  let fixture: ComponentFixture<OnboardingSlideItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingSlideItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnboardingSlideItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
