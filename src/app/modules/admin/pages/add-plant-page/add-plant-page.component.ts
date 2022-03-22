import { Component, OnInit } from '@angular/core';
import { Plant } from '../../models/plant';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-plant-page',
  templateUrl: './add-plant-page.component.html',
  styleUrls: ['./add-plant-page.component.scss']
})
export class AddPlantPageComponent implements OnInit {

  public data !: Plant;

  constructor(private adminService : AdminService) {
    this.data = new Plant();
   }

  ngOnInit(): void {
  }

  addPlant(form : Plant){
    this.adminService.add(form).subscribe(
      resp=> console.log(resp)
      
    );
  }

}
