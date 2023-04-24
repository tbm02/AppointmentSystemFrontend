import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/utils/dto/user.model";


@Injectable({
  providedIn:"root"
})
export class UserSignUpService{


    constructor(private http:HttpClient){

    }

    fetchAllUser(){
      return this.http.get("http://localhost:8080/api/person")
    }

    signUpUser(url:string,user:any){
      return this.http.post(url,user)
    }

}
