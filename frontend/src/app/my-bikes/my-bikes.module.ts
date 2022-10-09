import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyBikesPageRoutingModule } from './my-bikes-routing.module';

import { MyBikesPage } from './my-bikes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyBikesPageRoutingModule
  ],
  declarations: [MyBikesPage]
})
export class MyBikesPageModule {}
