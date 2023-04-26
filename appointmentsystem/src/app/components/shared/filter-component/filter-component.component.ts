import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterObject } from 'src/app/utils/models/filterobject.model';

@Component({
  selector: 'app-shared-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.css']
})
export class FilterComponentComponent implements OnInit{

  @Input() fieldValues!:FilterObject[]
  @Output() filterObject = new EventEmitter<FilterObject[]>()
  displayfields:boolean = false
  displayfieldValues:boolean = false
  selectedValues:FilterObject[] = []
  values!:any[]

showfields(){
  this.displayfields = !this.displayfields
}
showfieldValues(field:string){
  console.log(this.fieldValues)
  this.displayfieldValues = !this.displayfieldValues
  this.values = this.fieldValues.filter(obj=>obj.field === field).map(obj=>obj.values)[0]
  console.log(this.values)
}

ngOnInit(): void {
    this.fieldValues.forEach(object=>{
      this.selectedValues.push({field:object.field,values:[],inclusive:object.inclusive})
    })
}
handleSelection(field:string,value:string){
const filterObj = this.selectedValues.find(obj => obj.field === field);
console.log(filterObj)
const valueIndex = filterObj?.values.indexOf(value);
console.log(filterObj?.values.indexOf(value))
if (valueIndex !== -1 && filterObj && valueIndex!==undefined) {
  filterObj?.values.splice(valueIndex, 1);

} else {
  filterObj?.values.push(value);

}
this.filterObject.emit(this.selectedValues)
}
}
