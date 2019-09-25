
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {CreateProComponent} from './create-pro/create-pro.component'
import {VolunteerLandingComponent} from './volunteer-landing/volunteer-landing.component'
import {CustomerLandingComponent} from './customer-landing/customer-landing.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: CreateProComponent },
  { path: 'volunteer', component: VolunteerLandingComponent },
  { path: 'customer', component: CustomerLandingComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }