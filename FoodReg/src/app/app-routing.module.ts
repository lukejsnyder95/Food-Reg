
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {CreateProComponent} from './create-pro/create-pro.component'
import {VolunteerLandingComponent} from './volunteer-landing/volunteer-landing.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: CreateProComponent },
  { path: 'volunteer', component: VolunteerLandingComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }