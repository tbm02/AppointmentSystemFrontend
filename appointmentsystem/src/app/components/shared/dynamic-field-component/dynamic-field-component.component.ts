import { Component, Input } from '@angular/core';
import { FormField } from 'src/app/utils/models/dynamicformfield.model';

@Component({
  selector: 'app-shared-dynamic-field-component',
  templateUrl: './dynamic-field-component.component.html',
  styleUrls: ['./dynamic-field-component.component.css']
})
export class DynamicFieldComponentComponent {
  @Input() field!:FormField;
}
