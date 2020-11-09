import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaseComponent } from './base.component';

describe('BaseComponent', () => {
  let sut: BaseComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    sut = new BaseComponent();
  }));

  it('should create', () => {
    expect(sut).toBeTruthy();
  });
});
