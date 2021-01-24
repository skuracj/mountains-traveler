import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserSettingsPageRoutingModule } from './user-settings-routing.module';

import { UserSettingsPage } from './user-settings.page';
import {HeaderComponentModule} from '../header/header.module';
import {PeoplePageModule} from '../../pages/people/people.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UserSettingsPageRoutingModule,
        ReactiveFormsModule,
        HeaderComponentModule,
        PeoplePageModule
    ],
  declarations: [UserSettingsPage]
})
export class UserSettingsPageModule {}
