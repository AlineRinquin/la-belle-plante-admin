import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AddUpdatePlantComponent } from './components/add-update-plant/add-update-plant.component';
import { ListPlantComponent } from './components/list-plant/list-plant.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AddPlantPageComponent } from './pages/add-plant-page/add-plant-page.component';
import { ModifPlantPageComponent } from './pages/modif-plant-page/modif-plant-page.component';


@NgModule({
  declarations: [
    AddUpdatePlantComponent,
    ListPlantComponent,
    AdminPageComponent,
    AddPlantPageComponent,
    ModifPlantPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
