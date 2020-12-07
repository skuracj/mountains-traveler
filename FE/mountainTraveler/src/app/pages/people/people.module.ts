import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeoplePage } from './people.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { PeoplePageRoutingModule } from './people-routing.module'
import {HeaderComponentModule} from "../../components/header/header.module";
import {UserDetailsComponent} from '../../components/user-details/user-details.component';
import {FriendsComponent} from '../../components/friends/friends.component';
import {CommunityPageModule} from '../community/community.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        RouterModule.forChild([{path: '', component: PeoplePage}]),
        PeoplePageRoutingModule,
        HeaderComponentModule,
        CommunityPageModule
    ],
    exports: [
        UserDetailsComponent
    ],
    declarations: [PeoplePage, UserDetailsComponent, FriendsComponent]
})
export class PeoplePageModule {}
