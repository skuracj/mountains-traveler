import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelPlannerPage } from './travel-planner.page';

const routes: Routes = [
  {
    path: '',
    component: TravelPlannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelPlannerPageRoutingModule {}
