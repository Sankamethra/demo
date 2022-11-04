import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthlogService {
  public url="http://localhost:3000/api/login"

  constructor(private http:HttpClient) { }
logusr(user:any=[]){
    return this.http.post<any>(this.url,user)
  }


}
