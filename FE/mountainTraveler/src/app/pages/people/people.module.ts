import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PeoplePage} from './people.page';

import {PeoplePageRoutingModule} from './people-routing.module';
import {HeaderComponentModule} from '../../components/header/header.module';
import {UserDetailsComponent} from '../../components/user-details/user-details.component';
import {CommunityPageModule} from '../community/community.module';
import {FriendsListComponent} from '../../components/friends-list/friends-list.component';
import {AccordionComponent} from '../../components/accordion/accordion.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: PeoplePage}]),
        PeoplePageRoutingModule,
        HeaderComponentModule,
        CommunityPageModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [
        UserDetailsComponent,
        AccordionComponent
    ],
    declarations: [PeoplePage, UserDetailsComponent, FriendsListComponent, AccordionComponent]
})
export class PeoplePageModule {
}
