/*
  Title: app-routing.component.ts
  Author: Ashleigh Lyman
  Date: 06 September 2020
  Description: Controls app routing component logic page
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




import { HomeComponent } from './home/home.component';

//Page routes
export const routes: Routes = [
{
  path: 'home',
  component: HomeComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//End of App Routing Component logic page
