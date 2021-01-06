import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {User} from '../../common/models/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileProperties} from '../../common/constants/Profile.enum';
import {BaseComponent} from '../../common/base/base.component';
import {BaseStoriesService, StoriesService} from '../../services/stories/stories.service';
import {BaseProfileService} from '../../services/profile/profile.service';

@Component({
    selector: 'app-user-settings',
    templateUrl: './user-settings.page.html',
    styleUrls: ['./user-settings.page.scss'],
})
export class UserSettingsPage extends BaseComponent implements OnInit {
    @Input() user: User;
    profileForm: FormGroup;
    public profileProperties = ProfileProperties;

    constructor(
        public formBuilder: FormBuilder,
        private storiesService: BaseStoriesService,
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

    changeListener(event) {
        console.log(event.target.value);
        console.log(event.target.files[0]);
        // this.profileForm.patchValue({
        //     [Profile.profilePicture]:  event.target.files[0]
        // });
        // const reader = new FileReader();
        // if(event.target.files && event.target.files.length) {
        //     const [file] = event.target.files;
        //     reader.readAsDataURL(file);
        //
        //     reader.onload = () => {
        //         this.profileForm.patchValue({
        //             [Profile.profilePicture]: file
        //         });
        //
        //         // need to run CD since file load runs outside of zone
        //         this.cd.markForCheck();
        //     };
        // }
    }

    saveProfile(e) {
        e.preventDefault();
        const updatedProfile = this.profileForm.value;
        alert('saved');
        console.log('Saving profile...', updatedProfile);
        this.profileService.updateUserProfile(updatedProfile);
    }

    removeStory(storyId: string){
        this.profileService.removeStory(storyId);
    }
}
