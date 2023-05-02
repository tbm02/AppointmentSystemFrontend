import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DropdownQuestion } from 'src/app/components/shared/dynamic-field-component/dyanmic-field-question-text';
import { TextboxQuestion } from 'src/app/components/shared/dynamic-field-component/dynamic-field-question-dropdown';
import { QuestionBase } from 'src/app/components/shared/dynamic-field-component/dynamic-field-questionbase';
import { DynamicFormComponent } from 'src/app/components/shared/dynamic-form/dynamic-form.component';
import { User } from 'src/app/utils/dto/user.model';
import { FormField } from 'src/app/utils/models/dynamicformfield.model';
import { UserSignUpService } from '../../../services/user/user-sign-up.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  @ViewChild("form") form!:DynamicFormComponent
   questions: QuestionBase<string>[] = [


    new TextboxQuestion({
      key: 'firstName',
      label: 'First name',
      value: '',
      required: true,
      validations:[Validators.required,Validators.minLength(2)],
      order: 1
    }),

    new TextboxQuestion({
      key: 'lastName',
      label: 'Last Name',
      type: 'text',
      required: true,
      validations:[Validators.required],
      order: 2
    }),
    new TextboxQuestion({
      key: 'Email',
      label: 'Email',
      type: 'email',
      validations:[Validators.required,Validators.email],
      order: 3
    }),
    new TextboxQuestion({
      key: 'password',
      label: 'Password',
      type: 'password',
      order: 2
    })
    ,
    new TextboxQuestion({
      key: 'address',
      label: 'Address',
      type: 'text',
      order: 2
    }),
    new TextboxQuestion({
      key: 'dob',
      label: 'Date Of Birth',
      type: 'date',
      order: 2
    }),

  ];

user!:User
isLoading:boolean = false
hasError = false
errors:any[] = []
userFormGroup = new FormGroup({
  firstName : new FormControl("Virat"),
  lastName : new FormControl("kohli"),
  email:new FormControl("virat@bcci.com"),
  gender:new FormControl("Male"),
  password:new FormControl("Cheeku@123"),
  dob:new FormControl("1986-05-11"),
  contactNo:new FormControl("9733181881"),
  address:new FormControl("Sarojini Nagar Delhi")
});

submit(e:Event){
  console.log(this.form)
console.log(this.form.form.value)

}
constructor(private userSignUpService:UserSignUpService){

}

ngOnInit(): void {


}
}
