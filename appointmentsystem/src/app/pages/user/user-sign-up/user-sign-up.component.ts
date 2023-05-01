import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  formDetails:{
    title:string,
    fields:FormField[]
  }={
    title:"User Sign Up Form",
    fields:[
    {
      name:"firstName",
      label:"First Name",
      type:"text",
      value:"",
      validators:[
        Validators.required,
        Validators.minLength(2)
      ]
    },
    {
      name:"lastName",
      label:"Last Name",
      type:"text",
      value:"",
      validators:[
        Validators.required,
        Validators.minLength(2)
      ]
    },
    {
      name:"email",
      label:"Email Id",
      type:"email",
      value:"",
      validators:[
        Validators.required,
        Validators.minLength(2)
      ]
    }
    ,
    {
      name:"password",
      label:"Password",
      type:"password",
      value:"",
      validators:[
        Validators.required,
        Validators.minLength(2)
      ]
    },
    {
      name:"address",
      label:"Address",
      type:"textarea",
      value:"",
      validators:[
        Validators.required,
        Validators.minLength(2)
      ]
    }
      ]
  }
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

  console.log(this.form.formData);
  // console.log("Hii I am called",this.userFormGroup.value);
  // this.isLoading = true
  // this.userSignUpService.signUpUser("http://localhost:8080/api/person",this.userFormGroup.value).subscribe((data)=>{
  //   console.log("Succesfully Signedup user",data)
  //   this.isLoading = false
  // },(err)=>{
  //   console.log("Error Occured",err)
  //   // this.isLoading = false
  //   this.hasError=true
  //   this.errors.push(...err.error.errorObj)
  // })
}
constructor(private userSignUpService:UserSignUpService){

}

ngOnInit(): void {


}
}
