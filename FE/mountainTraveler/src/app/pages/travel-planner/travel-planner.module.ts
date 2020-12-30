import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelPlannerPageRoutingModule } from './travel-planner-routing.module';

import { TravelPlannerPage } from './travel-planner.page';
import {HeaderComponentModule} from '../../components/header/header.module';
import {StarRatingModule} from 'ionic5-star-rating';
import {PeoplePageModule} from '../people/people.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TravelPlannerPageRoutingModule,
        HeaderComponentModule,
        StarRatingModule,
        PeoplePageModule
    ],
  declarations: [TravelPlannerPage]
})
export class TravelPlannerPageModule {}
