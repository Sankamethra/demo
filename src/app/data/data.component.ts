import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  userForm: FormGroup;
  listData: any;
  

  constructor(private fb:FormBuilder)  {

    this.listData = [];


    this.userForm = this.fb.group ({
      name : ['', Validators.required],
      address : ['', Validators.required]

    })

   }

   public addItem() : void{
    this.listData.push(this.userForm.value);
    this.userForm.reset();
   }

   reset()
   {
    this.userForm.reset();
   }

   removeitem(element:any){
    this.listData.forEach((value:any,index:any)=>{
      if(value == element)
      this.listData.splice(index,1);
    })
   }

  ngOnInit(): void {
  }

}
