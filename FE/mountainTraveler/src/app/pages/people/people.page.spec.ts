import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { PeoplePage } from './people.page';
import {Storage} from "@ionic/storage";

describe('People', () => {
  let component: PeoplePage;
  let fixture: ComponentFixture<PeoplePage>;
  let storageSpy;

  beforeEach(async(() => {
    storageSpy = jasmine.createSpyObj('Storage', ['get', 'set']);

    TestBed.configureTestingModule({
      declarations: [PeoplePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
      providers: [{provide: Storage, useValue: storageSpy}]
    }).compileComponents();

    fixture = TestBed.createComponent(PeoplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
