import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-list-plant',
  templateUrl: './list-plant.component.html',
  styleUrls: ['./list-plant.component.scss']
})
export class ListPlantComponent implements OnInit {

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {

    this.adminService.collection$.subscribe(resp => {
      console.log(resp);

    });

  }

}
