import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardingPage } from './onboarding.page';

const routes: Routes = [
  {
    path: '',
    component: OnboardingPage
  },
  {
    path: 'onboarding-slide-item',
    loadChildren: () => import('./onboarding-slide-item/onboarding-slide-item.module').then( m => m.OnboardingSlideItemPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingPageRoutingModule {}
