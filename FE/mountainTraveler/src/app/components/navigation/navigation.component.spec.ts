import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigation } from './navigation.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('Navigation', () => {
  let component: Navigation;
  let fixture: ComponentFixture<Navigation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Navigation],
      imports: [RouterTestingModule],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
