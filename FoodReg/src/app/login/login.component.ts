import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

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
t
  ngOnInit() {
  }

  userAuth(nf:NgForm){
console.log(nf.value.uname)
console.log(nf.value.pwd)
 // this.router.navigateByUrl('/volunteer');

 console.log(nf.value)

//console.log(this.t)

this.con.userAuthenticate(nf.value).subscribe(
  posts=>{
    
    this.t=posts}
)
console.log(this.t)
// if(t.type === "v"){
//     this.router.navigateByUrl('/volunteer');}
//     else if(t.type === "c"){
//         this.router.navigateByUrl('/customer');}
//       else{
//         this.router.navigateByUrl('/error');
//       }


    }

}
