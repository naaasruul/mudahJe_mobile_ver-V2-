import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilihPerbualanPageRoutingModule } from './pilih-perbualan-routing.module';

import { PilihPerbualanPage } from './pilih-perbualan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PilihPerbualanPageRoutingModule
  ],
  declarations: [PilihPerbualanPage]
})
export class PilihPerbualanPageModule {}
