import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
 
})



export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  goToPage(pageName: string): void{
    this.router.navigateByUrl('./file.component.html');
  }

  

}
