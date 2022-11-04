import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthlogService } from '../authlog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logdata={
    email:"",
    password:""
   }

   public data:any
 public status:any

  constructor(private auth:AuthlogService,private route:Router) { }

  ngOnInit(): void {
   
  }
                                                                                                                                                                                                                             
  log(){
    console.log(this.logdata)
    this.auth.logusr(this.logdata).subscribe(res=>{
      if(res){
        console.log(res)
        localStorage.setItem('token',res.token)
        this.route.navigate(['/data'])
      }
      else{
        console.log("Throw errrr???")
      }
    })

  }
}



