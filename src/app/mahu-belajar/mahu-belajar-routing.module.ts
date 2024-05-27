import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MahuBelajarPage } from './mahu-belajar.page';

const routes: Routes = [
  {
    path: '',
    component: MahuBelajarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MahuBelajarPageRoutingModule {}
