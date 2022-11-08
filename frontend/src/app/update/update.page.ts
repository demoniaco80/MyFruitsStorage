import { Component, OnInit } from '@angular/core';
import { FruitsCrudService } from '../services/list-fruits.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {

  updateFruit: FormGroup;
  id: any;

  constructor(
    private fruitCrudService: FruitsCrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.updateFruit = this.formBuilder.group({
      name: [''],
      type: [''],
      quantity:['']
    })
  }
  ionViewDidEnter() {
    this.fetchFruit(this.id);
  }
    

  fetchFruit(id) {
    this.fruitCrudService.getFruit(id).subscribe((data) => {
      this.updateFruit.setValue({
        name: data['name'],
        type: data['type'],
        quantity: data['quantity']
      });
    });
  }

  onSubmit() {
    if (!this.updateFruit.valid) {
      return false;
    } else {
      this.fruitCrudService.updateFruit(this.id, this.updateFruit.value)
        .subscribe(() => {
          this.updateFruit.reset();
          this.router.navigate(['/list-fruits']);
        })
    }
  }

}
