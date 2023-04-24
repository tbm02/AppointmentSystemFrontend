import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-role-card',
  templateUrl: './role-card.component.html',
  styleUrls: ['./role-card.component.css']
})
export class RoleCardComponent {
  @Input()
  cardHeading!: string;
  @Input()
  src!: string;
  @Input()
  altText!: string;
  @Input()
  cardContent! : string;
  @Input()
  role! : string;

  @Input()
  nextText! : string;

constructor(){
  // this.cardHading = cardHading
}
}
