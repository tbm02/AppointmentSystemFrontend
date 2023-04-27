import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormGroupFields } from 'src/app/utils/models/formgroupfields.model';

@Component({
  selector: 'app-shared-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit{

  dynamicFormGroup!:FormGroup
  @Input () model!:{}

  fields:string[]=[]

  ngOnInit(): void {
      this.buildForm()
  }
  buildForm(){
    const formGroupFields = this.getFormControlFields();
    this.dynamicFormGroup = new FormGroup(formGroupFields);
  }
  getFormControlFields(){
    const formGroupFields:FormGroupFields = {}

    for(let field of Object.keys(this.model)){
      formGroupFields[field] = new FormControl("")
      this.fields.push(field)
    }
    return formGroupFields;
  }
}

