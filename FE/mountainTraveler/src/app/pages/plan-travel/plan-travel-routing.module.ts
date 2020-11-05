import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanTravelPage } from './plan-travel.page';

const routes: Routes = [
  {
    path: '',
    component: PlanTravelPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanTravelPageRoutingModule {}
