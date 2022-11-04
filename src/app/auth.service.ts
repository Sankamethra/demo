import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
import { User } from './datatype';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url="http://localhost:3000/api/register";

  constructor(private http:HttpClient) { }

  getregdata(user:any=[]){
  console.log(user)
  return this.http.post<any>(this.url,user)
  }

  getdata(user:any){
    return this.http.get<any>("http://localhost:3000/api/tool",user)
  }
  
}

