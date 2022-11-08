import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyFruitsPageRoutingModule } from './list-fruits-routing.module';

import { MyFruitsPage } from './list-fruits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyFruitsPageRoutingModule
  ],
  declarations: [MyFruitsPage]
})
export class MyFruitsPageModule {}
