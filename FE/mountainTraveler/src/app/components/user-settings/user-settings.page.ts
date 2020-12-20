import {ChangeDetectorRef, Component, HostListener, Input, OnInit} from '@angular/core';
import {User} from '../../common/models/user';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {Profile} from '../../common/constants/Profile.enum';

@Component({
    selector: 'app-user-settings',
    templateUrl: './user-settings.page.html',
    styleUrls: ['./user-settings.page.scss'],
})
export class UserSettingsPage implements OnInit {
    @Input() user: User;
    profileForm: FormGroup;
    public profile = Profile;

    constructor(private modalController: ModalController,
                public formBuilder: FormBuilder,
                private cd: ChangeDetectorRef) {

    }

    ngOnInit() {
        if (this.user) {
            console.log(this.user);
        }

        this.profileForm = this.formBuilder.group({
            [Profile.name]: ['dsa'],
            [Profile.location]: ['dsa'],
            [Profile.age]: [21],
            [Profile.isPublic]: [true],
            [Profile.profilePicture]: [this.user.profilePicture],
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

    async dismissModal() {
        await this.modalController.dismiss();
    }

    saveProfile(e) {
        e.preventDefault();
        console.log('Saving profile...', this.profileForm.value);
    }

}
