import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pizza8PageRoutingModule } from './pizza8-routing.module';

import { Pizza8Page } from './pizza8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pizza8PageRoutingModule
  ],
  declarations: [Pizza8Page]
})
export class Pizza8PageModule {}
