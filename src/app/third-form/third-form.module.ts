import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThirdFormPageRoutingModule } from './third-form-routing.module';

import { ThirdFormPage } from './third-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThirdFormPageRoutingModule
  ],
  declarations: [ThirdFormPage]
})
export class ThirdFormPageModule {}
