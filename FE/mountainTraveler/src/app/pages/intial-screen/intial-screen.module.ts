import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntialScreenPageRoutingModule } from './intial-screen-routing.module';

import { IntialScreenPage } from './intial-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntialScreenPageRoutingModule
  ],
  declarations: [IntialScreenPage]
})
export class IntialScreenPageModule {}
