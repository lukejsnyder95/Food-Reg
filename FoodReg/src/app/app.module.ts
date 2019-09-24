import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateProComponent } from './create-pro/create-pro.component';
import { RegisterFoodComponent } from './register-food/register-food.component';
import { RegisterCarePackageComponent } from './register-care-package/register-care-package.component';
import { IdentiyVerifyComponent } from './identiy-verify/identiy-verify.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VolunteerLandingComponent } from './volunteer-landing/volunteer-landing.component';
import { CustomerLandingComponent } from './customer-landing/customer-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateProComponent,
    RegisterFoodComponent,
    RegisterCarePackageComponent,
    IdentiyVerifyComponent,
    UpdateProfileComponent,
    VolunteerLandingComponent,
    CustomerLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
