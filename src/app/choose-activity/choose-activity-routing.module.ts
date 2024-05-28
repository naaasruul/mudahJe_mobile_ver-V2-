import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseActivityPage } from './choose-activity.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseActivityPageRoutingModule {}
