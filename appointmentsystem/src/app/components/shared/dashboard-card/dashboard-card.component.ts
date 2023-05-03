import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent {
@Input() title:string = ''
@Input() data:string|number =  0
@Input() color!:string
}
