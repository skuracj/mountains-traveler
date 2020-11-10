import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthenticationPage } from './authentication.page';
import {RouterTestingModule} from "@angular/router/testing";

describe('AuthenticationPage', () => {
  let sut: AuthenticationPage;
  let fixture: ComponentFixture<AuthenticationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthenticationPage);
    sut = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should create', () => {
    expect(sut).toBeTruthy();
  });


});
