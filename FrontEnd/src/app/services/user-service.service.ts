import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private ac:HttpClient) { }

  add(formdata: FormData):Observable<any>
{
    let x = "http://localhost:8080/add"
    console.log(formdata);
    return this.ac.post(x,formdata);
  }

  getdata(x:number):Observable<any>
  {
    console.log(x);
    return this.ac.get("http://localhost:8080/getdata?x="+x)
  }

  getdetails():Observable<any>
  {
    return this.ac.get("http://localhost:8080/getdetails")
  }

  updateApplication(user:any):Observable<any>
  {
    return this.ac.post("http://localhost:8080/update",user);
  }

  signup(user:any):Observable<any>
  {
      return this.ac.post("http://localhost:8080/signup",user);
  }

  editprofile(user:any):Observable<any>
  {
    return this.ac.post("http://localhost:8080/editprofile",user);
  }
}
