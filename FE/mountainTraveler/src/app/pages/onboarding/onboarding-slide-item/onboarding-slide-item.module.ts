import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardingSlideItemPageRoutingModule } from './onboarding-slide-item-routing.module';

import { OnboardingSlideItemPage } from './onboarding-slide-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardingSlideItemPageRoutingModule
  ],
  declarations: [OnboardingSlideItemPage]
})
export class OnboardingSlideItemPageModule {}
