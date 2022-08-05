import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaForm2Page } from './pizza-form2.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaForm2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaForm2PageRoutingModule {}
