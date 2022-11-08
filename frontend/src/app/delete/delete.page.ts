import { Component, OnInit } from '@angular/core';
import { FruitsCrudService } from '../services/list-fruits.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

  fruits: any = [];

  constructor(private fruitsSevice:FruitsCrudService,private router: Router) { }
  ngOnInit(){}
  ionViewDidEnter() {
    this.fruitsSevice.getFruits().subscribe(response => {
      this.fruits = response;
    })
  }
  removeFruit(i) {
    if (window.confirm('¿Estas seguro?')) {
      this.fruitsSevice.deleteFruit(i)
      .subscribe(() => {
          this.ionViewDidEnter();
          console.log('Moto eliminada')
        }
      )
    }
  }
}
