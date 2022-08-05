import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pizza6Page } from './pizza6.page';

const routes: Routes = [
  {
    path: '',
    component: Pizza6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pizza6PageRoutingModule {}
