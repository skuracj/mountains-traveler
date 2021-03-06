import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';

import { UserPage } from './user.page';
import {PeoplePageModule} from '../people/people.module';
import {HeaderComponentModule} from '../../components/header/header.module';
import {PackingListComponent} from '../../components/packing-list/packing-list.component';
import {CommunityPageModule} from '../community/community.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UserPageRoutingModule,
        PeoplePageModule,
        HeaderComponentModule,
        CommunityPageModule,
        ReactiveFormsModule
    ],
    declarations: [UserPage, PackingListComponent]
})
export class UserPageModule {}
