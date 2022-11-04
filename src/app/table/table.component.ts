import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { map, filter, scan } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {

  constructor(private auth:AuthService,private route:Router) { }

  

  ngOnInit(): void {
     
  }

  

}
