import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pizza6PageRoutingModule } from './pizza6-routing.module';

import { Pizza6Page } from './pizza6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pizza6PageRoutingModule
  ],
  declarations: [Pizza6Page]
})
export class Pizza6PageModule {}
