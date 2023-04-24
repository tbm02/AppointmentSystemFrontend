import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/utils/dto/user.model';
import { UserSignUpService } from '../../../services/user/user-sign-up.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
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
  console.log("Hii I am called",this.userFormGroup.value);
  this.isLoading = true
  this.userSignUpService.signUpUser("http://localhost:8080/api/person",this.userFormGroup.value).subscribe((data)=>{
    console.log("Succesfully Signedup user",data)
    this.isLoading = false
  },(err)=>{
    console.log("Error Occured",err)
    // this.isLoading = false
    this.hasError=true
    this.errors.push(...err.error.errorObj)
  })
}
constructor(private userSignUpService:UserSignUpService){

}

ngOnInit(): void {


}
}
