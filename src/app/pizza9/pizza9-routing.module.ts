import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pizza9Page } from './pizza9.page';

const routes: Routes = [
  {
    path: '',
    component: Pizza9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pizza9PageRoutingModule {}
