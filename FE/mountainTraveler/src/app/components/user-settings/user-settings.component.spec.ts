import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {UserSettingsComponent} from './user-settings.component';
import {By} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

describe('UserSettingsComponent', () => {
    let component: UserSettingsComponent;
    let fixture: ComponentFixture<UserSettingsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserSettingsComponent],
            imports: [IonicModule.forRoot(), ReactiveFormsModule]
        }).compileComponents();

        fixture = TestBed.createComponent(UserSettingsComponent);
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
