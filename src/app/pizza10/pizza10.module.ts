import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pizza10PageRoutingModule } from './pizza10-routing.module';

import { Pizza10Page } from './pizza10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pizza10PageRoutingModule
  ],
  declarations: [Pizza10Page]
})
export class Pizza10PageModule {}
