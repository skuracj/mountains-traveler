import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {UserSettingsPage} from './user-settings.page';
import {By} from '@angular/platform-browser';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {userMock} from '../../common/testing/mocks/user.mock';
import {CommonModule} from '@angular/common';
import {ProfileProperties} from '../../common/constants/Profile.enum';
import {StoriesService} from '../../services/stories.service';

describe('UserSettingsPage', () => {
    let component: UserSettingsPage;
    let fixture: ComponentFixture<UserSettingsPage>;
    let formBuilder: FormBuilder;
    let storiesServiceSpy;

    const userObject = userMock;
    beforeEach(async(() => {
        storiesServiceSpy = jasmine.createSpyObj('StoriesService', ['removeStory']);
        TestBed.configureTestingModule({
            declarations: [UserSettingsPage],
            imports: [IonicModule.forRoot(), CommonModule, ReactiveFormsModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                {provide: StoriesService, useValue: storiesServiceSpy},
                FormBuilder]
        }).compileComponents();

        formBuilder = TestBed.inject(FormBuilder);
        fixture = TestBed.createComponent(UserSettingsPage);
        component = fixture.componentInstance;
        spyOn(component, 'createForm').and.callThrough();
        spyOn(component, 'prefillForm').and.callThrough();

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

    it('should save profile data when save button clicked', async () => {
        await fixture.whenRenderingDone();
        spyOn(component, 'saveProfile');

        const saveButton = fixture.debugElement.query(By.css('[id="save-button"]'));
        saveButton.nativeElement.click();

        expect(component.saveProfile).toHaveBeenCalled();
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

            expect(component.removeStory).toHaveBeenCalledWith(userObject.stories[0].storyId);
            expect(storiesServiceSpy.removeStory).toHaveBeenCalledWith(userObject.stories[0].storyId);
        });
    });
});
