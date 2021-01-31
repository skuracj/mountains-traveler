import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {User} from '../../common/models/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileProperties} from '../../common/constants/Profile.enum';
import {BaseComponent} from '../../common/base/base.component';
import {BaseProfileService} from '../../services/profile/profile.service';
import {Story} from '../../common/models/story';
import {Observable} from 'rxjs';
import {BaseStoriesService} from '../../services/stories/stories.service';

@Component({
    selector: 'app-user-settings',
    templateUrl: './user-settings.page.html',
    styleUrls: ['./user-settings.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSettingsPage extends BaseComponent implements OnInit {
    @Input() user: User;
    @Input() stories$: Observable<Story[]>;
    profileForm: FormGroup;
    public profileProperties = ProfileProperties;

    constructor(
        public formBuilder: FormBuilder,
        private profileService: BaseProfileService) {
        super();

    }

    ngOnInit() {
        this.createForm();
        this.prefillForm();
    }

    createForm() {
        this.profileForm = this.formBuilder.group({
            [ProfileProperties.name]: [null, Validators.required],
            [ProfileProperties.location]: [null],
            [ProfileProperties.age]: [null],
            [ProfileProperties.isPublic]: [null],
            [ProfileProperties.profilePicture]: [null],
        });
    }

    prefillForm() {
        if (!this.user) {
            return;
        }
        this.profileForm.patchValue({
            [ProfileProperties.name]: this.user.name,
            [ProfileProperties.location]: this.user.location,
            [ProfileProperties.age]: this.user.age,
            [ProfileProperties.isPublic]: this.user.isPublic,
            [ProfileProperties.profilePicture]: this.user.profilePicture,
        });
    }

    saveProfile(e) {
        e.preventDefault();
        const updatedProfile = this.profileForm.value;
        alert('Profile Saved');
        this.profileService.updateUserProfile(updatedProfile);
    }

    removeStory(storyId: string) {
        this.profileService.removeStory(storyId);
    }
}
