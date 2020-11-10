import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthenticationPageRoutingModule } from './authentication-routing.module';

import { AuthenticationPage } from './authentication.page';
import {AmplifyUIAngularModule} from "@aws-amplify/ui-angular";
import {NavigationButtonComponent} from "../../components/navigation-button/navigation-button.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AuthenticationPageRoutingModule,
        AmplifyUIAngularModule,
    ],
    exports: [
        NavigationButtonComponent
    ],
    declarations: [AuthenticationPage, NavigationButtonComponent]
})
export class AuthenticationPageModule {}
