import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePage} from './home.page';

import {HomePageRoutingModule} from './home-routing.module';
import {HeaderComponentModule} from '../../components/header/header.module';
import {AuthenticationPageModule} from '../authentication/authentication.module';
import {WeatherWidgetComponent} from '../../components/weather-widget/weather-widget.component';
import {HttpClientModule} from '@angular/common/http';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        HomePageRoutingModule,
        HeaderComponentModule,
        AuthenticationPageModule,
        HttpClientModule
    ],
    declarations: [HomePage, WeatherWidgetComponent],
    providers: [InAppBrowser]
})
export class HomePageModule {
}
