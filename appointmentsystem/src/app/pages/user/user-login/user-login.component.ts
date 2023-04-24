import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {


  isLoading = false
  errors = []
  hasError = false
  userFormGroup = new FormGroup({

    email:new FormControl("virat@bcci.com"),

    password:new FormControl("Cheeku@123"),

  });
  constructor(private http:HttpClient){

  }

  submit(event:Event){
    console.log("Hii I am called Now lets center the div");
  }
}
