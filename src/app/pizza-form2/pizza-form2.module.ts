import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaForm2PageRoutingModule } from './pizza-form2-routing.module';

import { PizzaForm2Page } from './pizza-form2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaForm2PageRoutingModule
  ],
  declarations: [PizzaForm2Page]
})
export class PizzaForm2PageModule {}
