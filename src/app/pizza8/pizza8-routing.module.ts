import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pizza8Page } from './pizza8.page';

const routes: Routes = [
  {
    path: '',
    component: Pizza8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pizza8PageRoutingModule {}
