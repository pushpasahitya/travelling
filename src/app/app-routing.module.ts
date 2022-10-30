import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClgComponent } from './clg/clg.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"clg",component:ClgComponent},
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
