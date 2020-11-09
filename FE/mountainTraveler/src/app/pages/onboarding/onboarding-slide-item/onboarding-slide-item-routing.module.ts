import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardingSlideItemPage } from './onboarding-slide-item.page';

const routes: Routes = [
  {
    path: '',
    component: OnboardingSlideItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingSlideItemPageRoutingModule {}
