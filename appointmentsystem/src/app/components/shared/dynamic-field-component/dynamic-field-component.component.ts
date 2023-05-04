import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from 'src/app/utils/models/dynamicformfield.model';
import { QuestionBase } from './dynamic-field-questionbase';

@Component({
  selector: 'app-shared-dynamic-field-component',
  templateUrl: './dynamic-field-component.component.html',
  styleUrls: ['./dynamic-field-component.component.css']
})
export class DynamicFieldComponentComponent{
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  @Output() formFieldChanged = new EventEmitter<void>();
  get isInvalid() {
   
    return (this.form.controls[this.question.key].touched && !this.form.controls[this.question.key].valid); }
handleChange(e:Event){
  this.formFieldChanged.emit()
}
}
