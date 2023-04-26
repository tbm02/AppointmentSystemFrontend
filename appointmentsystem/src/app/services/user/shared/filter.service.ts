import { FilterObject } from "src/app/utils/models/filterobject.model";

export class FilterService{
    
   static applyFilter<T>(data:any[],filterParams:FilterObject[]):any[]{
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
                for (let value of objectSearchValue as any[]) {
                  const fieldValue = value[filterParam.filterKey as keyof Object]
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
}