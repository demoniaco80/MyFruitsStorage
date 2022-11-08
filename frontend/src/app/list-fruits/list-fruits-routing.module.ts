import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFruitsPage } from './list-fruits.page';

const routes: Routes = [
  {
    path: '',
    component: MyFruitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFruitsPageRoutingModule {}
