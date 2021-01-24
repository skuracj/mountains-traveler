import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntialScreenPageRoutingModule } from './intial-screen-routing.module';

import { IntialScreenPage } from './intial-screen.page';
import {AuthenticationPageModule} from "../authentication/authentication.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IntialScreenPageRoutingModule,
        AuthenticationPageModule
    ],
  declarations: [IntialScreenPage]
})
export class IntialScreenPageModule {}
