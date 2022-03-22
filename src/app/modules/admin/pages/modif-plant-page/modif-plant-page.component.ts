import { Component, OnInit } from '@angular/core';
import { Plant } from '../../models/plant';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-modif-plant-page',
  templateUrl: './modif-plant-page.component.html',
  styleUrls: ['./modif-plant-page.component.scss']
})
export class ModifPlantPageComponent implements OnInit {
  public data : Plant;

  constructor(private adminService : AdminService) {
    
    this.data = new Plant();
   }

  ngOnInit(): void {

    this.data = this.adminService.plantById;

  }

}