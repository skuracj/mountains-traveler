import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntialScreenPage } from './intial-screen.page';

const routes: Routes = [
  {
    path: '',
    component: IntialScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntialScreenPageRoutingModule {}
