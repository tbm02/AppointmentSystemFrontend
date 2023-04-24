import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
ngOnInit(): void {
    console.log("Menu bulaya gaya he");
}
}
