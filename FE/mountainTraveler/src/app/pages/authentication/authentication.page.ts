import {Component} from '@angular/core';
import {FormFieldTypes} from '@aws-amplify/ui-components';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.page.html',
    styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage {
    signUpFormFields: FormFieldTypes;
    signInFormFields: FormFieldTypes;

    constructor(public navController: NavController) {
        this.signUpFormFields = [
            {
                type: 'email',
                required: true
            },
            {
                type: 'password',
                required: true,
            }
        ];
        this.signInFormFields = [
            {
                type: 'email'
            },
            {
                type: 'password'
            }
        ];
    }
}
