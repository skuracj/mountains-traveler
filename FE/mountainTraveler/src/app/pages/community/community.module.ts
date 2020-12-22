import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunityPageRoutingModule } from './community-routing.module';

import { CommunityPage } from './community.page';
import {HeaderComponentModule} from '../../components/header/header.module';
import {TimeLineComponent} from '../../components/time-line/time-line.component';
import {MostActiveUsersComponent} from '../../components/most-active-users/most-active-users.component';
import {PeoplePageModule} from '../people/people.module';
import {ProfilePictureThumbnailComponent} from '../../components/profile-picture-thumbnail/profile-picture-thumbnail.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CommunityPageRoutingModule,
        HeaderComponentModule,
    ],
    exports: [
        TimeLineComponent,
        MostActiveUsersComponent,
        ProfilePictureThumbnailComponent
    ],
    declarations: [CommunityPage, TimeLineComponent, MostActiveUsersComponent, ProfilePictureThumbnailComponent]
})
export class CommunityPageModule {}
