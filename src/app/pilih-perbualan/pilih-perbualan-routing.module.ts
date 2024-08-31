import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilihPerbualanPage } from './pilih-perbualan.page';

const routes: Routes = [
  {
    path: '',
    component: PilihPerbualanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PilihPerbualanPageRoutingModule {}
