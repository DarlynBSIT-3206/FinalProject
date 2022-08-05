import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pizza7Page } from './pizza7.page';

const routes: Routes = [
  {
    path: '',
    component: Pizza7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pizza7PageRoutingModule {}
