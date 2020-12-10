import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    // navControllerSpy = jasmine.createSpyObj('NavController');
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [IonicModule.forRoot(),
      RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
