import { Component, OnInit, NgZone } from '@angular/core';
import { BikesCrudService } from '../services/bikes-crud.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";



@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  bikeForm: FormGroup;

  constructor(private router: Router, 
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private bikesSevice: BikesCrudService) {
    this.bikeForm = this.formBuilder.group({
      brand: [''],
      model: ['']
    });
  }
  ngOnInit() {
  }

  onSubmit() {
    if (!this.bikeForm.valid) {
      return false;
    } else {
      this.bikesSevice.createBike(this.bikeForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.bikeForm.reset();
            this.router.navigate(['/my-bikes']);
          })
        });
    }
  }

}
