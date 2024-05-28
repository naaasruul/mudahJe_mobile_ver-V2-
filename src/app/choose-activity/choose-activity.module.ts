import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseActivityPageRoutingModule } from './choose-activity-routing.module';

import { ChooseActivityPage } from './choose-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseActivityPageRoutingModule
  ],
  declarations: [ChooseActivityPage]
})
export class ChooseActivityPageModule {}
