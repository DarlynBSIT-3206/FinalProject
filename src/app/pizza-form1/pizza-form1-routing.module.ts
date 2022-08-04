import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaForm1Page } from './pizza-form1.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaForm1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaForm1PageRoutingModule {}
