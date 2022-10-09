import { Component, OnInit } from '@angular/core';
import { BikesCrudService } from '../services/bikes-crud.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {

  updateBike: FormGroup;
  id: any;

  constructor(
    private bikeCrudService: BikesCrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.updateBike = this.formBuilder.group({
      brand: [''],
      model: ['']
    })
  }
  ionViewDidEnter() {
    this.fetchUser(this.id);
  }
    

  fetchUser(id) {
    this.bikeCrudService.getBike(id).subscribe((data) => {
      this.updateBike.setValue({
        brand: data['brand'],
        model: data['model']
      });
    });
  }

  onSubmit() {
    if (!this.updateBike.valid) {
      return false;
    } else {
      this.bikeCrudService.updateBike(this.id, this.updateBike.value)
        .subscribe(() => {
          this.updateBike.reset();
          this.router.navigate(['/my-bikes']);
        })
    }
  }

}
