import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyAuthService {

  constructor(private ac : HttpClient) { }

  autheticate(email : string, password : string):Observable<any>
  {
    let data = 
    {
      'email' : email,
      'password' : password
    }
    
    return this.ac.post("http://localhost:8080/login",data)
       
   
  }

  isloggedin()
  {
    let user = localStorage.getItem('userobj')
    return !(user===null)
  }

  isadmin()
  {
    let role = JSON.parse(localStorage.getItem('userobj')).role
    return !(role=="user")
  }
}
