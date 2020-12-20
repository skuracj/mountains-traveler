import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {User} from '../../common/models/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Profile} from '../../common/constants/Profile.enum';
import {BaseComponent} from '../../common/base/base.component';

@Component({
    selector: 'app-user-settings',
    templateUrl: './user-settings.page.html',
    styleUrls: ['./user-settings.page.scss'],
})
export class UserSettingsPage extends BaseComponent implements OnInit {
    @Input() user: User;
    profileForm: FormGroup;
    public profile = Profile;

    constructor(public formBuilder: FormBuilder,
                private cd: ChangeDetectorRef) {
        super();

    }

    ngOnInit() {
        this.createForm();
        this.prefillForm();
    }

    createForm() {
        this.profileForm = this.formBuilder.group({
            [Profile.name]: ['', Validators.required],
            [Profile.location]: [''],
            [Profile.age]: [],
            [Profile.isPublic]: [],
            [Profile.profilePicture]: [this.user.profilePicture],
        });
    }

    prefillForm() {
        this.profileForm.patchValue({
            [Profile.name]: this.user.name,
            [Profile.location]: this.user.location,
            [Profile.age]: this.user.age,
            [Profile.isPublic]: this.user.isPublic,
            [Profile.profilePicture]: this.user.profilePicture,
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
        // TODO update user profile object
        alert('saved');
        console.log('Saving profile...', this.profileForm.value);
    }

}
