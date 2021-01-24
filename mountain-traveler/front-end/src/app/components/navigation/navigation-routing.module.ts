import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import {RouteSegment} from "../../common/constants/RouteSegments.enum";

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: RouteSegment.home,
        loadChildren: () => import('../../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: RouteSegment.planTravel,
        loadChildren: () => import('../../pages/travel-planner-intro/travel-planner-intro.module').then(m => m.TravelPlannerIntroPageModule)
      },
      {
        path: RouteSegment.people,
        loadChildren: () => import('../../pages/people/people.module').then(m => m.PeoplePageModule)
      },
      {
        path: '',
        redirectTo: `/${RouteSegment.app}/${RouteSegment.home}`

      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationPageRoutingModule {}
