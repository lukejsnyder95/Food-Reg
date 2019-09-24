
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {CreateProComponent} from './create-pro/create-pro.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: CreateProComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }