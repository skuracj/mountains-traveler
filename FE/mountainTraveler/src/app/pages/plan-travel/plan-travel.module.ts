import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlanTravelPage } from './plan-travel.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { PlanTravelPageRoutingModule } from './plan-travel-routing.module';
import {HeaderComponentModule} from "../../components/header/header.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PlanTravelPageRoutingModule,
    HeaderComponentModule
  ],
  declarations: [PlanTravelPage]
})
export class PlanTravelPageModule {}
