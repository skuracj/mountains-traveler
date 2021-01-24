import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TravelPlannerIntroPage} from './travel-planner-intro.page';

import {PlanTravelPageRoutingModule} from './travel-planner-intro-routing.module';
import {HeaderComponentModule} from '../../components/header/header.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        PlanTravelPageRoutingModule,
        HeaderComponentModule
    ],
    declarations: [TravelPlannerIntroPage]
})
export class TravelPlannerIntroPageModule {
}
