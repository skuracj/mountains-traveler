import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntialScreenPage } from './intial-screen.page';
import {RouterTestingModule} from "@angular/router/testing";

describe('IntialScreenPage', () => {
  let component: IntialScreenPage;
  let fixture: ComponentFixture<IntialScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntialScreenPage ],
      providers: [],
      imports: [IonicModule.forRoot(),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(IntialScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
