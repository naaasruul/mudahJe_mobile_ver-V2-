import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedItemPagePageRoutingModule } from './selected-item-page-routing.module';

import { SelectedItemPagePage } from './selected-item-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectedItemPagePageRoutingModule
  ],
  declarations: [SelectedItemPagePage]
})
export class SelectedItemPagePageModule {}
