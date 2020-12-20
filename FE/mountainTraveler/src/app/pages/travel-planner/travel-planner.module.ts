import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelPlannerPageRoutingModule } from './travel-planner-routing.module';

import { TravelPlannerPage } from './travel-planner.page';
import {HeaderComponentModule} from '../../components/header/header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TravelPlannerPageRoutingModule,
        HeaderComponentModule
    ],
  declarations: [TravelPlannerPage]
})
export class TravelPlannerPageModule {}
