import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {UserSettingsPage} from './user-settings.page';
import {By} from '@angular/platform-browser';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileProperties} from '../../common/constants/Profile.enum';
import {usersMock} from '../../common/testing/mocks/users.mock';
import {BaseProfileService} from '../../services/profile/profile.service';
import {of} from 'rxjs';
import {storiesMock} from '../../common/testing/mocks/stories.mock';

describe('UserSettingsPage', () => {
    let component: UserSettingsPage;
    let fixture: ComponentFixture<UserSettingsPage>;
    let formBuilder: FormBuilder;
    let profileServiceSpy;

    const userObject = usersMock[0];
    beforeEach(async(() => {

        profileServiceSpy = jasmine.createSpyObj(BaseProfileService, ['updateUserProfile', 'removeStory']);
        TestBed.configureTestingModule({
            declarations: [UserSettingsPage],
            imports: [IonicModule.forRoot(), CommonModule, ReactiveFormsModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                {provide: BaseProfileService, useValue: profileServiceSpy},
                FormBuilder]
        }).compileComponents();

        formBuilder = TestBed.inject(FormBuilder);
        fixture = TestBed.createComponent(UserSettingsPage);
        component = fixture.componentInstance;
        spyOn(component, 'createForm').and.callThrough();
        spyOn(component, 'prefillForm').and.callThrough();
        component.stories$ = of(storiesMock);

        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('When component initialized', () => {
        it('Should create a form', () => {
            expect(component.createForm).toHaveBeenCalled();
            expect(component.profileForm.value).toEqual({
                [ProfileProperties.name]: null,
                [ProfileProperties.location]: null,
                [ProfileProperties.age]: null,
                [ProfileProperties.isPublic]: null,
                [ProfileProperties.profilePicture]: null,
            });
        });

        it('and user passed should prefill form', () => {
            component.user = userObject;

            component.ngOnInit();

            expect(component.prefillForm).toHaveBeenCalled();
            expect(component.profileForm.value).toEqual({
                [ProfileProperties.name]: userObject.name,
                [ProfileProperties.location]: userObject.location,
                [ProfileProperties.age]: userObject.age,
                [ProfileProperties.isPublic]: userObject.isPublic,
                [ProfileProperties.profilePicture]: userObject.profilePicture,
            });
        });
    });

    describe('and save button clicked', () => {
        beforeEach(async () => {
            await fixture.whenRenderingDone();
            spyOn(component, 'saveProfile').and.callThrough();
            spyOn(window, 'alert');
            profileServiceSpy.updateUserProfile.and.stub();

            const saveButton = fixture.debugElement.query(By.css('[id="save-button"]'));
            saveButton.nativeElement.click();
        });

        it('#saveProfile should be called', async () => {
            expect(window.alert).toHaveBeenCalled();
            expect(component.saveProfile).toHaveBeenCalled();
        });

        it('should save user profile', () => {
            expect(profileServiceSpy.updateUserProfile).toHaveBeenCalledWith(component.profileForm.value);
        });
    });


    describe('When stories rendered', () => {
        beforeEach(async () => {
            component.user = userObject;
            spyOn(component, 'removeStory').and.callThrough();

            fixture.detectChanges();
            await fixture.whenRenderingDone();
        });
        it('Should delete story if deleteButton clicked', async () => {
            const deleteButton = fixture.debugElement.query(By.css('.item__button'));
            deleteButton.nativeElement.click();

            expect(component.removeStory).toHaveBeenCalledWith(userObject.stories[0]);
            expect(profileServiceSpy.removeStory).toHaveBeenCalledWith(userObject.stories[0]);
        });
    });
});
