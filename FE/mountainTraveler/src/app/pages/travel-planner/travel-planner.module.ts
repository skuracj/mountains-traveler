import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelPlannerPageRoutingModule } from './travel-planner-routing.module';

import { TravelPlannerPage } from './travel-planner.page';
import {HeaderComponentModule} from '../../components/header/header.module';
import {StarRatingModule} from 'ionic5-star-rating';
import {PeoplePageModule} from '../people/people.module';
import {PipeModule} from '../../pipes/pipe.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TravelPlannerPageRoutingModule,
        HeaderComponentModule,
        StarRatingModule,
        PeoplePageModule,
        ReactiveFormsModule,
        PipeModule
    ],
  declarations: [TravelPlannerPage]
})
export class TravelPlannerPageModule {}
