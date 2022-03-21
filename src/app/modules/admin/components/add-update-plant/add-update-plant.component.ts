import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-add-update-plant',
  templateUrl: './add-update-plant.component.html',
  styleUrls: ['./add-update-plant.component.scss']
})
export class AddUpdatePlantComponent implements OnInit {
  public ajoutPlantForm: FormGroup;

  constructor(private fb: FormBuilder) {
  this.ajoutPlantForm = new FormGroup({});
  }

  ngOnInit(): void {
this.ajoutPlantForm = this.fb.group({
  nomProduitFc: new FormControl(),
  CategorieFc: new FormControl(),
  prixFc: new FormControl(),
  quantiteFc: new FormControl(),
  stockFc: new FormControl(),
})
  }

    public onSubmit(): void {
    }


}
