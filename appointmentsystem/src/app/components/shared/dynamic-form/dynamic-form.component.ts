import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionControlService } from 'src/app/services/shared/question-control.service';
import { FormField } from 'src/app/utils/models/dynamicformfield.model';
import { FormGroupFields } from 'src/app/utils/models/formgroupfields.model';
import { QuestionBase } from '../dynamic-field-component/dynamic-field-questionbase';

@Component({
  selector: 'app-shared-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit{

  @Input() questions: QuestionBase<string>[] | null = [];

  form!: FormGroup;
  // @Output()formDetails = new EventEmitter<FormGroup>();

  constructor(private qcs:QuestionControlService) {}
  ngOnInit(){
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[])

  }


  onSubmit(){
      console.log(this.form.value)
  }
  handleChange(){
    console.log("Changes")
  }

}

