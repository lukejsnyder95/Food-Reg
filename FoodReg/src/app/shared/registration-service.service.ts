import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private http:HttpClient) { }

  createAccount(data:any){
    console.log('in service')
    this.http.post('http://192.168.1.9:8989/createProfile',data)
    .subscribe(record => console.log(record))
    }

    userAuthenticate(data:any){
console.log('User Auth')



    }
}

