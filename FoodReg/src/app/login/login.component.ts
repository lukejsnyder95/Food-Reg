import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { post } from 'selenium-webdriver/http';
import { map } from 'rxjs/operators';
import {RegistrationServiceService} from '../shared/registration-service.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
data = {uname:'',pwd:''}
  ngOnInit() {
  }

  userAuth(nf:NgForm){}

}
