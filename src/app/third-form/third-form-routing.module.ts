import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThirdFormPage } from './third-form.page';

const routes: Routes = [
  {
    path: '',
    component: ThirdFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdFormPageRoutingModule {}
