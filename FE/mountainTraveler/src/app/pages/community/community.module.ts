import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunityPageRoutingModule } from './community-routing.module';

import { CommunityPage } from './community.page';
import {HeaderComponentModule} from '../../components/header/header.module';
import {TimeLineComponent} from '../../components/time-line/time-line.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CommunityPageRoutingModule,
        HeaderComponentModule
    ],
    exports: [
        TimeLineComponent
    ],
    declarations: [CommunityPage, TimeLineComponent]
})
export class CommunityPageModule {}
