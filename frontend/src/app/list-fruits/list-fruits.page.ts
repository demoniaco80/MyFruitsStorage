import { Component, OnInit } from '@angular/core';
import { FruitsCrudService } from '../services/list-fruits.service';

@Component({
  selector: 'app-list-fruits',
  templateUrl: './list-fruits.page.html',
  styleUrls: ['./list-fruits.page.scss'],
})
export class MyFruitsPage implements OnInit {

  fruits: any = [];

  constructor(private fruitsSevice:FruitsCrudService) { }
   ngOnInit(){
    //this.getallFruits();
    }
  ionViewDidEnter() {
    this.getallFruits();
  }

  getallFruits(){
    this.fruitsSevice.getFruits().subscribe(response => {
      this.fruits = response;
    });
  }

}
