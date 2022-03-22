import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() submitted = new EventEmitter();

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
    console.log(this.ajoutPlantForm.value);
  
      const plant: Plant = {
        id: this.ajoutPlantForm.value['id'],
        nom: this.ajoutPlantForm.value['nomProduitFc'],
        category : this.ajoutPlantForm.value['CategorieFc'],
        price : this.ajoutPlantForm.value['prixFc'],
        quantity : this.ajoutPlantForm.value['quantiteFc'],
        instock :this.ajoutPlantForm.value['stockFc'],
        urlPicture : this.plant.urlPicture,
        rating : this.plant.rating
        
      };
  

    this.submitted.emit(plant);


  }


}
