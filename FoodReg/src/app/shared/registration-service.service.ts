import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private http:HttpClient) { }

  createAccount(registration){
    this.http.post('http://localhost:3000/createProfile',registration)
    }
}

