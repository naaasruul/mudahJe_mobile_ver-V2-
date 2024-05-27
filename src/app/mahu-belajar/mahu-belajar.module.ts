import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MahuBelajarPageRoutingModule } from './mahu-belajar-routing.module';

import { MahuBelajarPage } from './mahu-belajar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MahuBelajarPageRoutingModule
  ],
  declarations: [MahuBelajarPage]
})
export class MahuBelajarPageModule {}
