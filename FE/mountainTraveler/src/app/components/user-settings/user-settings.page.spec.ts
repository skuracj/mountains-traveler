import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserSettingsPage } from './user-settings.page';
import {By} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

describe('UserSettingsPage', () => {
  let component: UserSettingsPage;
  let fixture: ComponentFixture<UserSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingsPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UserSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save profile data when save button clicked', async () => {
    await fixture.whenRenderingDone();
    spyOn(component, 'saveProfile');

    const saveButton = fixture.debugElement.query(By.css('[id="save-button"]'));
    saveButton.nativeElement.click();

    expect(component.saveProfile).toHaveBeenCalled();
  });
});
