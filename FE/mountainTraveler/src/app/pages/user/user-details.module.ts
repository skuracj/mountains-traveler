import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDetailsPageRoutingModule } from './user-details-routing.module';

import { UserDetailsPage } from './user-details.page';
import {PeoplePageModule} from '../people/people.module';
import {HeaderComponentModule} from '../../components/header/header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UserDetailsPageRoutingModule,
        PeoplePageModule,
        HeaderComponentModule
    ],
  declarations: [UserDetailsPage]
})
export class UserDetailsPageModule {}
