import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {RouteSegment} from './common/constants/RouteSegments.enum';

const routes: Routes = [
    {
        path: RouteSegment.app,
        loadChildren: () => import('./components/navigation/navigation.module').then(m => m.NavigationPageModule)
    },
    {
        path: RouteSegment.onboarding,
        loadChildren: () => import('./pages/onboarding/onboarding.module').then(m => m.OnboardingPageModule)
    },
    {
        path: RouteSegment.initialScreen,
        loadChildren: () => import('./pages/intial-screen/intial-screen.module').then(m => m.IntialScreenPageModule)
    },
    {
        path: RouteSegment.authentication,
        loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationPageModule)
    },
    {
        path: RouteSegment.community,
        loadChildren: () => import('./pages/community/community.module').then(m => m.CommunityPageModule)
    },
    {
        path: RouteSegment.user,
        loadChildren: () => import('./pages/user/user.module').then(m => m.UserPageModule)
    },
    {
        path: RouteSegment.userSettings,
        loadChildren: () => import('./components/user-settings/user-settings.module').then(m => m.UserSettingsPageModule)
    },
    {
        path: RouteSegment.travelPlanner,
        loadChildren: () => import('./pages/travel-planner/travel-planner.module').then(m => m.TravelPlannerPageModule)
    },
    {
        path: '',
        redirectTo: '/' + RouteSegment.initialScreen,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
