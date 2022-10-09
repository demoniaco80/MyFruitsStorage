import { Component, OnInit } from '@angular/core';
import { BikesCrudService } from '../services/bikes-crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

  bicycles: any = [];

  constructor(private bikesSevice:BikesCrudService,private router: Router) { }
  ngOnInit(){}
  ionViewDidEnter() {
    this.bikesSevice.getBikes().subscribe(response => {
      this.bicycles = response;
    })
  }
  removeBike(i) {
    if (window.confirm('¿Estas seguro?')) {
      this.bikesSevice.deleteBike(i)
      .subscribe(() => {
          this.ionViewDidEnter();
          console.log('Moto eliminada')
        }
      )
    }
  }
}
