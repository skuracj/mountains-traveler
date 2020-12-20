import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {RouteSegments} from './common/constants/RouteSegments.enum';

const routes: Routes = [
    {
        path: RouteSegments.app,
        loadChildren: () => import('./components/navigation/navigation.module').then(m => m.NavigationPageModule)
    },
    {
        path: RouteSegments.onboarding,
        loadChildren: () => import('./pages/onboarding/onboarding.module').then(m => m.OnboardingPageModule)
    },
    {
        path: RouteSegments.initialScreen,
        loadChildren: () => import('./pages/intial-screen/intial-screen.module').then(m => m.IntialScreenPageModule)
    },
    {
        path: RouteSegments.authentication,
        loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationPageModule)
    },
    {
        path: RouteSegments.community,
        loadChildren: () => import('./pages/community/community.module').then(m => m.CommunityPageModule)
    },
    {
        path: RouteSegments.user,
        loadChildren: () => import('./pages/user/user.module').then(m => m.UserPageModule)
    },
    {
        path: RouteSegments.userSettings,
        loadChildren: () => import('./components/user-settings/user-settings.module').then(m => m.UserSettingsPageModule)
    },
    {
        path: RouteSegments.travelPlanner,
        loadChildren: () => import('./pages/travel-planner/travel-planner.module').then(m => m.TravelPlannerPageModule)
    },
    {
        path: '',
        redirectTo: '/' + RouteSegments.initialScreen,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
