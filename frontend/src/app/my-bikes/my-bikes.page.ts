import { Component, OnInit } from '@angular/core';
import { BikesCrudService } from '../services/bikes-crud.service';

@Component({
  selector: 'app-my-bikes',
  templateUrl: './my-bikes.page.html',
  styleUrls: ['./my-bikes.page.scss'],
})
export class MyBikesPage implements OnInit {

  bicycles: any = [];

  constructor(private bikesSevice:BikesCrudService) { }
   ngOnInit(){
     //this.getallbikes();
    }
  ionViewDidEnter() {
    this.getallbikes();
  }

  getallbikes(){
    this.bikesSevice.getBikes().subscribe(response => {
      this.bicycles = response;
    });

  }

}
