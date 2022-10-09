import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBikesPage } from './my-bikes.page';

const routes: Routes = [
  {
    path: '',
    component: MyBikesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyBikesPageRoutingModule {}
