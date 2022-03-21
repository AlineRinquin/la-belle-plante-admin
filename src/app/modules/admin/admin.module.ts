import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddUpdatePlantComponent } from './components/add-update-plant/add-update-plant.component';
import { ListPlantComponent } from './components/list-plant/list-plant.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';


@NgModule({
  declarations: [
    AddUpdatePlantComponent,
    ListPlantComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
