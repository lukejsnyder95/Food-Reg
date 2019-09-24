import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms'
import { post } from 'selenium-webdriver/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-create-pro',
  templateUrl: './create-pro.component.html',
  styleUrls: ['./create-pro.component.css']
})
export class CreateProComponent implements OnInit {

  constructor() { }

  user = {   type:'', fname:'', lname:'', email:'', password:''  }

  ngOnInit() {
  }


  createUser(nf:NgForm){
    if(nf.value.rname != ''){
    console.log('User is added')
    
    }
}

}
