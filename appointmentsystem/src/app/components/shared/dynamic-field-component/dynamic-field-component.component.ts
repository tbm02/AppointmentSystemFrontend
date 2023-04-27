import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-dynamic-field-component',
  templateUrl: './dynamic-field-component.component.html',
  styleUrls: ['./dynamic-field-component.component.css']
})
export class DynamicFieldComponentComponent {
  @Input() field!: {};
  @Input() formName!: string;
}
