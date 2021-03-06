import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavigationButtonComponent } from './navigation-button.component';

describe('NavigationButtonComponent', () => {
  let component: NavigationButtonComponent;
  let fixture: ComponentFixture<NavigationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationButtonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
