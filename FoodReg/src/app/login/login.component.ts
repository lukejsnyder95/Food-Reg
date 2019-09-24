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

  constructor(public con:RegistrationServiceService, private router: Router) { }
data = {uname:'',pwd:''}
  ngOnInit() {
  }

  userAuth(nf:NgForm){

    this.router.navigateByUrl('/volunteer');
// var t = this.con.userAuthenticate(nf.value)
// if(t.type === "v"){
//     this.router.navigateByUrl('/volunteer');}
//     else if(t.type === "c"){
//       this.router.navigateByUrl('/customer');}
//       else{
//         this.router.navigateByUrl('/error');
//       }


  }

}
