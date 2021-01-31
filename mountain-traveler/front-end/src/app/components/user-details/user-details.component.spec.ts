import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserDetailsComponent } from './user-details.component';
import {By} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';
import {usersMock} from '../../common/testing/mocks/users.mock';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      imports: [IonicModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    component.user = usersMock[0];
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When user is owner of the profile', () => {
    let settingsButton: HTMLButtonElement;

    beforeEach(async () => {
      component.isProfileOwner = true;
      fixture.detectChanges();
      await fixture.whenRenderingDone();

      settingsButton = fixture.debugElement.query(By.css('[id="settings-button"]')).nativeElement;
    });

    it('should display setting-button when user is owner of the profile', async () => {
      expect(settingsButton).toBeTruthy();
    });

    it('should emit value when setting-button clicked', () => {
      spyOn(component.openSettingsModal, 'emit');
      settingsButton.click();

      expect(component.openSettingsModal.emit).toHaveBeenCalled();
    });
  });



  it('should NOT display setting-button when user is NOT the owner of the profile', async () => {
    component.isProfileOwner = false;
    await fixture.whenRenderingDone();

    const settingsButton: DebugElement = fixture.debugElement.query(By.css('[id="settings-button"]'));

    expect(settingsButton).toBeFalsy();
  });


});
