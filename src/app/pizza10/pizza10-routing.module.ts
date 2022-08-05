import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pizza10Page } from './pizza10.page';

const routes: Routes = [
  {
    path: '',
    component: Pizza10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pizza10PageRoutingModule {}
