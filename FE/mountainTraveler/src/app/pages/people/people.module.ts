import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeoplePage } from './people.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { PeoplePageRoutingModule } from './people-routing.module'
import {HeaderComponentModule} from "../../components/header/header.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: PeoplePage }]),
    PeoplePageRoutingModule,
    HeaderComponentModule
  ],
  declarations: [PeoplePage]
})
export class PeoplePageModule {}
