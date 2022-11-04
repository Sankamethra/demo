import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regdata={
    email:"",
    username:"",
    password:""

  }

  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
  }

  register(){
    this.auth.getregdata(this.regdata).subscribe(res=>{
      if(res){
        console.log(res)
        localStorage.setItem('token',res.token)
        
        this.route.navigate(['/login'])
        

      }
      else{
        console.log("errr???")
      }
    })
  }  

}
