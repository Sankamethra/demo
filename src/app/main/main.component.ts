import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { User } from '../datatype';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
 
})



export class MainComponent implements OnInit {

 
public data:any
 public status:any

 
  public value:any=[{
    drawingnumber:String,
    componentname:String
}]

  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
    
  }

  demo(){
    this.auth.getdata(this.data).subscribe(res=>{
      this.value=res
      console.log(typeof(this.value))
      console.log(this.value)
    })
  }
  

}
