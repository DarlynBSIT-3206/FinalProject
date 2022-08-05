import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pizza9PageRoutingModule } from './pizza9-routing.module';

import { Pizza9Page } from './pizza9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pizza9PageRoutingModule
  ],
  declarations: [Pizza9Page]
})
export class Pizza9PageModule {}
