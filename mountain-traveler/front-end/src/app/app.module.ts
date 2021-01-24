import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import Amplify from 'aws-amplify';
import {IonicStorageModule} from '@ionic/storage';
import {PipeModule} from './pipes/pipe.module';
import {BaseStoriesService, StoriesService} from './services/stories/stories.service';
import {BaseUserService, UserService} from './services/user/user.service';
import {AuthService, BaseAuthService} from './services/auth/auth.service';
import {BaseTravelService, TravelService} from './services/travel/travel.service';
import {amplifyConfig} from '../environments/amplify-config';
import {BaseProfileService, ProfileService} from './services/profile/profile.service';
import {BaseGeocodingService, GeocodingService} from './services/geocoding/geocoding.service';
import {HttpClientModule} from '@angular/common/http';


/* TODO Configure Amplify resources */
Amplify.configure(amplifyConfig);

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
        AppRoutingModule,
        PipeModule,
        HttpClientModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: BaseStoriesService, useClass: StoriesService},
        {provide: BaseUserService, useClass: UserService},
        {provide: BaseAuthService, useClass: AuthService},
        {provide: BaseProfileService, useClass: ProfileService},
        {provide: BaseTravelService, useClass: TravelService},
        {provide: BaseGeocodingService, useClass: GeocodingService}
    ],
    bootstrap: [AppComponent],
    exports: [PipeModule]
})
export class AppModule {
}
