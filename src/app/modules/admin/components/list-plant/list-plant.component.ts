import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Plant } from '../../models/plant';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-list-plant',
  templateUrl: './list-plant.component.html',
  styleUrls: ['./list-plant.component.scss']
})
export class ListPlantComponent implements OnInit {
  public listPlant : Plant[];
  public subCollection$ = new Subject<Plant[]>();

  constructor(private adminService : AdminService,
    private router : Router) {
    this.listPlant=[];
    
    this.subCollection$ = this.adminService.subCollection$;

    this.adminService.refreshPlant();

   }

  ngOnInit(): void {

    // this.adminService.collection$.subscribe(resp => {

    // });

  }

  onClickToUpdate(plantId : string): void {

    //this.adminService.getById(plant);
    this.router.navigate([`admin/modif/${plantId}`]);

  }

  onClickToDelete(plantId : string){
    console.log(plantId);
    
    this.adminService.deleteById(plantId).subscribe();
  }

  ngOnDestroy(): void {
     //this.subCollection$.unsubscribe();
  }

}
