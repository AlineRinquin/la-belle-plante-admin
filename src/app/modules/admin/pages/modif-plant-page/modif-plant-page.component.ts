import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plant } from '../../models/plant';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-modif-plant-page',
  templateUrl: './modif-plant-page.component.html',
  styleUrls: ['./modif-plant-page.component.scss']
})
export class ModifPlantPageComponent implements OnInit {
  public data : Plant;

  constructor(private adminService : AdminService,
    private acivatedRoute : ActivatedRoute) {
    
    this.data = new Plant();
   }

  ngOnInit(): void {

    const plantId = this.acivatedRoute.snapshot.paramMap.get('id');
    // this.data = this.adminService.getPlantById(plantId).subscribe(
      
    // );

  }

}
