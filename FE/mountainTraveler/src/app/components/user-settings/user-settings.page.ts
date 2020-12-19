import {Component, Input, OnInit} from '@angular/core';
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
                public formBuilder: FormBuilder) {

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
            [Profile.profilePicture]: ['/assets/soldier.jpeg'],

        });
    }

    async dismissModal() {
        await this.modalController.dismiss();
    }

    saveProfile(e) {
        e.preventDefault();
        console.log('whatever');
        console.log('Saving profile...', this.profileForm.value);
    }

}
