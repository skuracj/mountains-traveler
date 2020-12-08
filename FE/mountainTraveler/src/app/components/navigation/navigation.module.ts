import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavigationPageRoutingModule } from './navigation-routing.module';

import { NavigationComponent } from './navigation.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NavigationPageRoutingModule
  ],
  declarations: [NavigationComponent]
})
export class NavigationPageModule {}
