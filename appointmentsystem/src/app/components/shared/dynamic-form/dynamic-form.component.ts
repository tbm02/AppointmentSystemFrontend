import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormField } from 'src/app/utils/models/dynamicformfield.model';
import { FormGroupFields } from 'src/app/utils/models/formgroupfields.model';

@Component({
  selector: 'app-shared-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit{

  form!:FormGroup
  @Input() formData!: {
    title:string,
    fields:FormField[]
  };

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(){
    this.form = this.formBuilder.group({});
    this.formData.fields.forEach(field=>{
      this.form.addControl(field.name, this.formBuilder.control('', field.validators));
    })
  }

}

