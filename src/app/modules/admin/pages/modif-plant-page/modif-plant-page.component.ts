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
  public idPlant!: string;

  constructor(private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private route : Router) {

  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      (resp: ParamMap) => {
        const plantId = resp.get('id')
        if(plantId != null){
          this.idPlant = plantId;
          this.adminService.getPlantById(plantId).subscribe(resp => {
            console.log(resp);
            this.data = resp;
          }
          );
        }else{
          //page not found et message erreur
        }
      }
    )



  }

  editPlant(form: Plant) {
    this.adminService.update(form, this.idPlant).subscribe(
      resp => {
        console.log(resp)

      }

    );

  }

}
;
