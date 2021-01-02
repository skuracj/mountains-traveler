import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import {RouteSegments} from "../../common/constants/RouteSegments.enum";

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: RouteSegments.home,
        loadChildren: () => import('../../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: RouteSegments.planTravel,
        loadChildren: () => import('../../pages/plan-travel/plan-travel.module').then(m => m.PlanTravelPageModule)
      },
      {
        path: RouteSegments.people,
        loadChildren: () => import('../../pages/people/people.module').then(m => m.PeoplePageModule)
      },
      {
        path: '',
        redirectTo: `/${RouteSegments.app}/${RouteSegments.home}`

      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationPageRoutingModule {}
