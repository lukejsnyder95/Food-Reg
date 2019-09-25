import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { post } from 'selenium-webdriver/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private http:HttpClient) { }

  createAccount(data:any){
    console.log('in service')
    this.http.post('http://localhost:8989/createProfile',data)
    .subscribe(record => console.log(record))
    }

    userAuthenticate(data:any){
console.log('User Auth')
console.log('in service')


return this.http.get("http://localhost:8989/login",data)
        .pipe(map(responseData => {
            var type;
            type = responseData;
            
            return type;
        }))


    }
}

