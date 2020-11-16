import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { HomePage } from './home.page';
import {RouterTestingModule} from "@angular/router/testing";
import {Storage} from "@ionic/storage";


describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let storageSpy;

  beforeEach(async(() => {
    storageSpy = jasmine.createSpyObj('Storage', ['get']);
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, RouterTestingModule],
      providers: [{provide: Storage, useValue: storageSpy}]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
