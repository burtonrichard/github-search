import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from '../profile/profile.component';
import { HomeComponent } from '../home/home.component';
import { RepoComponent } from '../repo/repo.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes:Routes =[
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"repo",
    component:RepoComponent
  },
  {
    path:"",
    redirectTo:"/profile",
    pathMatch:"full"
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
