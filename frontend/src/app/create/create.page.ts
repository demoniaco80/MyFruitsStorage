import { Component, OnInit, NgZone } from '@angular/core';
import { FruitsCrudService } from '../services/list-fruits.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";



@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  fruitForm: FormGroup;

  constructor(private router: Router, 
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private fruitsSevice: FruitsCrudService) {
    this.fruitForm = this.formBuilder.group({
      name: [''],
      type: [''],
      quantity:['']
    });
  }
  ngOnInit() {
  }

  onSubmit() {
    if (!this.fruitForm.valid) {
      return false;
    } else {
      this.fruitsSevice.createFruit(this.fruitForm.value)
     
        .subscribe((response) => { window.confirm('¿Estas seguro?')
          this.zone.run(() => {
            this.fruitForm.reset();
            this.router.navigate(['/list-fruits']);
          })
        });
    }
  }

}
