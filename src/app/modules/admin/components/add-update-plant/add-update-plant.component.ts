import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import * as _ from 'underscore';
import { Category } from '../../models/category';
import { Plant } from '../../models/plant';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-update-plant',
  templateUrl: './add-update-plant.component.html',
  styleUrls: ['./add-update-plant.component.scss']
})
export class AddUpdatePlantComponent implements OnInit {
  public ajoutPlantForm: FormGroup;
  @Input() public plant !: Plant;
  listCategories = Category;

  constructor(private fb: FormBuilder) {
    this.ajoutPlantForm = new FormGroup({});
  }

  ngOnInit(): void {
    

    console.log(this.plant.category);
      this.ajoutPlantForm = this.fb.group({
        nomProduitFc: new FormControl(this.plant.nom),
        CategorieFc: new FormControl(this.plant.category),
        prixFc: new FormControl(this.plant.price),
        quantiteFc: new FormControl(this.plant.quantity),
        stockFc: new FormControl(this.plant.instock),
      })


  }

  public onSubmit(): void {
  }


}
