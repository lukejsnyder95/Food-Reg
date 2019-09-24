import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { post } from 'selenium-webdriver/http';
import { map } from 'rxjs/operators';
import {RegistrationServiceService} from '../shared/registration-service.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-pro',
  templateUrl: './create-pro.component.html',
  styleUrls: ['./create-pro.component.css']
})
export class CreateProComponent implements OnInit {

  constructor( public con:RegistrationServiceService, private router: Router) { }

  user = {   type:'', fname:'', lname:'', email:'', password:''  }

  ngOnInit() {
  }


  createUser(nf:NgForm){
    if(nf.value.fname != ''){
    console.log('User is added')
    console.log(nf.value.type)
    console.log(nf.value.fname)
    console.log(nf.value.lname)
    console.log(nf.value.email)
    console.log(nf.value.password)

   this.con.createAccount(nf.value)
  //this.con.createAccount()
  this.user = {   type:'', fname:'', lname:'', email:'', password:''  }
  this.router.navigateByUrl('/login');


    
    }
}

}
