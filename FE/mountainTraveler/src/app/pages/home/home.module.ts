import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import {HomePageRoutingModule} from './home-routing.module';
import {HeaderComponentModule} from "../../components/header/header.module";
import {AuthenticationPageModule} from "../authentication/authentication.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        HomePageRoutingModule,
        HeaderComponentModule,
        AuthenticationPageModule
    ],
  declarations: [HomePage]
})
export class HomePageModule {}
