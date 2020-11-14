import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import {HomePageRoutingModule} from './home-routing.module';
import {HeaderComponentModule} from "../../components/header/header.module";
import {AuthenticationPageModule} from "../authentication/authentication.module";
import {WeatherWidgetComponent} from "../../components/weather-widget/weather-widget.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        HomePageRoutingModule,
        HeaderComponentModule,
        AuthenticationPageModule,
        HttpClientModule
    ],
    declarations: [HomePage, WeatherWidgetComponent]
})
export class HomePageModule {}
