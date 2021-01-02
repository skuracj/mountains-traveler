import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavigationPageRoutingModule } from './navigation-routing.module';

import { NavigationComponent } from './navigation.component';
import {PipeModule} from '../../pipes/pipe.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        NavigationPageRoutingModule,
        PipeModule
    ],
  declarations: [NavigationComponent]
})
export class NavigationPageModule {}
