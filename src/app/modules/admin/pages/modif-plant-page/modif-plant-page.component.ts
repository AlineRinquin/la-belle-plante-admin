import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Plant } from '../../models/plant';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-modif-plant-page',
  templateUrl: './modif-plant-page.component.html',
  styleUrls: ['./modif-plant-page.component.scss']
})
export class ModifPlantPageComponent implements OnInit {
  public data !: Plant;
  public idPlant: string;

  constructor(private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private route : Router) {
    this.idPlant = '';

  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      (resp: ParamMap) => {
        const plantId = resp.get('id')
        this.adminService.getPlantById(plantId).subscribe(resp => {
          console.log(resp);
          this.data = resp;

        }
        );

      }
    )



  }

  editPlant(form: Plant) {
    this.activatedRoute.paramMap.subscribe(
      (resp: ParamMap) => {
        const plantId = resp.get('id')
        this.adminService.update(form, plantId).subscribe(
          resp =>{ console.log(resp)
            
          }

        );

      })
  }

}
;
