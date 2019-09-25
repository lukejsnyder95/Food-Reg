import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { post } from 'selenium-webdriver/http';
import { map } from 'rxjs/operators';
import {RegistrationServiceService} from '../shared/registration-service.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-volunteer-landing',
  templateUrl: './volunteer-landing.component.html',
  styleUrls: ['./volunteer-landing.component.css']
})
export class VolunteerLandingComponent implements OnInit {

  constructor( public con:RegistrationServiceService, private router: Router) { }
  data = {street:'',zcode:'', email:'', sel:''}

  ngOnInit() {
  }

  insertVolData(nf:NgForm){

    this.con.insertVolD(nf.value)

    this.data = {street:'',zcode:'', email:'', sel:''}


    
  }

}
