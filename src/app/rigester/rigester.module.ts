import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RigesterPageRoutingModule } from './rigester-routing.module';

import { RigesterPage } from './rigester.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RigesterPageRoutingModule
  ],
  declarations: [RigesterPage]
})
export class RigesterPageModule {}
