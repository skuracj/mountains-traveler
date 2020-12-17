import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Form, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {User} from '../../common/models/user';

@Component({
    selector: 'app-user-settings',
    templateUrl: './user-settings.component.html',
    styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent implements OnInit {
    @Input() user: User;
    profileForm: FormGroup ;

    constructor(private modalController: ModalController,
                public formBuilder: FormBuilder) {

    }

    ngOnInit() {
        if (this.user) {
            console.log(this.user);
        }

        this.profileForm = this.formBuilder.group({
            name: ['dsa'],

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
