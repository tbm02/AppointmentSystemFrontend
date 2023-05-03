import { Injectable } from "@angular/core";
import { FilterObject } from "src/app/utils/models/filterobject.model";


@Injectable({providedIn:"root"})
export class FilterService{

    applyFilter<T>(data:any[],filterParams:FilterObject[]):any[]{
        const filterData = data.filter(dataObject=>{
            let isMatch = true
            for (let filterParam of filterParams) {
              const objectSearchValue = dataObject[filterParam.field as keyof T]
              const filterValues = filterParam.values

              if (filterValues.length === 0) {
                continue
              }

              if (filterParam.inclusive) {
                let localMatched:boolean = false ;
                // console.log(objectSearchValue,"HERE")
                for (let value of objectSearchValue as any[]) {
                  let fieldValue;
                  if(filterParam.filterKey){
                   fieldValue = value[filterParam.filterKey as keyof Object]
                  }else{
                     fieldValue = value
                  }
                  if (filterValues.includes(fieldValue)) {
                    localMatched = true
                    break
                  }
                }
                isMatch = isMatch && localMatched
              }
              else{
                let localMatched = filterParam.values.some(val=>val===objectSearchValue)
                isMatch = isMatch && localMatched
              }
          }
          return isMatch
        })

        return filterData
    }

     registerValues<T>(data:any[],filterfieldValues:FilterObject[]){
      let tempFilterObj!:FilterObject|undefined
      // let tempArray = []
      filterfieldValues.forEach(({field,inclusive})=>{
        tempFilterObj = filterfieldValues?.find(obj=>obj.field === field);
        if(inclusive){
          data.forEach((dataObj)=>{
            (dataObj[field as keyof T] as string[]).forEach((value: any)=>{
              if (!tempFilterObj?.values.includes(value)) {
                      tempFilterObj?.values.push(value)
                    }
            })

          })
        }else{
          data.forEach((dataObj)=>{

            if (!tempFilterObj?.values.includes(dataObj[field as keyof T])) {
              tempFilterObj?.values.push(dataObj[field as keyof T])
            }
          })
    }})}
}
