import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

const routes: Routes = [

    { path: '', redirectTo: 'page', pathMatch: 'full'}, // account -> account/signin
    { path: 'page', component: AdminPageComponent }, // account/signin
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {

}
