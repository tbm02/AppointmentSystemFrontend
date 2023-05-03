import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Doctor } from "src/app/utils/dto/doctor.model";

@Injectable({
  providedIn:'root'
})
export class DynamicFormService{

  populateFormWithData<T>(form:FormGroup,data:any){
    let tempObj:any = {}
    Object.keys(data).forEach((key)=>{

      this.giveDataObject<T>(data,key,tempObj)

    })
    console.log(tempObj)
    let tempObj2:any = {}
    Object.keys(tempObj).forEach((key:string)=>{
      tempObj2[key] = tempObj[key]
      form.patchValue(tempObj2)
      tempObj2 = {}
    })
  }
  private  giveDataObject<T>(data:any,key:any,tempObj:any){


    if(Array.isArray(data[key as keyof T])){

      tempObj[key] = data[key as keyof T]
    }else if(typeof data[key as keyof T] === 'object'  && data[key as keyof T] !== null){

      Object.keys(data[key as keyof T]).forEach(subKey=>{

        this.giveDataObject(data[key as keyof T],subKey,tempObj)
      })

    }
    tempObj[key] = data[key as keyof T]
    return

}
}
