import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pizza7PageRoutingModule } from './pizza7-routing.module';

import { Pizza7Page } from './pizza7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pizza7PageRoutingModule
  ],
  declarations: [Pizza7Page]
})
export class Pizza7PageModule {}
