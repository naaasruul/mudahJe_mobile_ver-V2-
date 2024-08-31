import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedItemPagePage } from './selected-item-page.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedItemPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedItemPagePageRoutingModule {}
