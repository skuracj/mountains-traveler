import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelPlannerIntroPage } from './travel-planner-intro.page';

const routes: Routes = [
  {
    path: '',
    component: TravelPlannerIntroPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanTravelPageRoutingModule {}
