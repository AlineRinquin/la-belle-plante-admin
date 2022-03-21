import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';
import { AddPlantPageComponent } from './pages/add-plant-page/add-plant-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ModifPlantPageComponent } from './pages/modif-plant-page/modif-plant-page.component';

const routes: Routes = [

    { path: '', redirectTo: 'page', pathMatch: 'full'}, 
    { path: 'page', component: AdminPageComponent }, 
    { path: 'ajout', component: AddPlantPageComponent }, 
    { path: 'modif', component: ModifPlantPageComponent }, 
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {

}
