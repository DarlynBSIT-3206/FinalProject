import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaForm1PageRoutingModule } from './pizza-form1-routing.module';

import { PizzaForm1Page } from './pizza-form1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaForm1PageRoutingModule
  ],
  declarations: [PizzaForm1Page]
})
export class PizzaForm1PageModule {}
