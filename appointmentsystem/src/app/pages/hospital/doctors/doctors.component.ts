import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { debounceTime, Subject, Subscription } from 'rxjs'
import { ModalComponent } from 'src/app/components/shared/modal/modal.component'
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal'
import { HospitalHttpService } from 'src/app/services/hospital/hospital.http.service'
import { FilterService } from 'src/app/services/shared/filter.service'
import { Doctor } from 'src/app/utils/dto/doctor.model'
import { Specialization } from 'src/app/utils/dto/specialization.model'
import { FilterObject } from 'src/app/utils/models/filterobject.model'
import { ModalConfig } from 'src/app/utils/models/modalconfig.model'
import { QuestionBase } from 'src/app/components/shared/dynamic-field-component/dynamic-field-questionbase'
import { TextboxQuestion } from 'src/app/components/shared/dynamic-field-component/dynamic-field-question-dropdown'
import { DropdownQuestion } from 'src/app/components/shared/dynamic-field-component/dyanmic-field-question-text'
import { DynamicFormComponent } from 'src/app/components/shared/dynamic-form/dynamic-form.component'
import { DynamicFormService } from 'src/app/services/shared/dynamic-form.service'

@Component({
  selector: 'app-hospital-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  searchQuery!: string
  showAddDoctorForm!:boolean;
  private searchQuery$ = new Subject<string>()
  modalConfig:ModalConfig={modalTitle:"Doctor Form"}
  @ViewChild("modalRef")modalComponant!:ModalComponent
  @ViewChild("addDoctorForm")addDoctorForm!:DynamicFormComponent
 
  filterfieldValues: FilterObject[] = [
    {
      field: 'specializations',
      values: [],
      inclusive: true
    },
    { field: 'gender', values: [], inclusive: false }
  ]
  doctorData: Doctor[] = []
  subscription!: Subscription
  // modalRef: MdbModalRef<ModalComponent> | null = null;
  constructor (private hospitalHttpService: HospitalHttpService,private modalService: MdbModalService,private filterService:FilterService,private dynamicFormService:DynamicFormService) {}
  filteredDoctors: Doctor[] = this.doctorData
  ngOnInit (): void {
    this.subscription = this.hospitalHttpService
      .getAllDoctorsForHospital()
      .subscribe({
        next: data => {
          console.log('Here We Have recieved data', data)
          this.doctorData = data.data

          this.filterService.registerValues(this.doctorData,this.filterfieldValues)
          this.filteredDoctors = this.doctorData
          console.log(this.doctorData)
        },
        error: err => {
          console.log('Error Occured', err)
        },
        complete () {
          console.log('COmpleted')
        }
      })

  }
  applyFilter (filterParams: FilterObject[]) {
    console.log(filterParams)
    this.filteredDoctors = this.filterService.applyFilter<Doctor>(
      this.doctorData,
      filterParams
    )
    this.filterService.registerValues(this.filteredDoctors,this.filterfieldValues)
  }
  filterByFields (filterParam: FilterObject) {}

  addDoctor () {
    // this.modalComponant.open()
  }

  searchDoctorsByName (searchQuery: string) {
    // console.log("Attemping to Searcj",searchQuery)
    if (searchQuery.length <= 1) {
      this.filteredDoctors = this.doctorData
    }
    else if(searchQuery.length > 1 && this.filteredDoctors.length === 0){
      console.log("Will Save performance")
    }
    else {
      console.log("Searching")
      const lowerCaseSearchQuery = searchQuery.toLowerCase()
      this.filteredDoctors = this.doctorData.filter(
        doctor =>
          doctor.firstName.toLowerCase().includes(lowerCaseSearchQuery) ||
          doctor.lastName.toLowerCase().includes(lowerCaseSearchQuery) ||
          doctor.specializations.some(specialization =>
            specialization.toLowerCase().includes(lowerCaseSearchQuery)
          )
      )
    }
  }
  addNewDoctor(){
    console.log("Hume Bulayta he")
    this.modalComponant.open()
  }


  closeModal(){
    console.log("HEres")
    // this.showAddDoctorForm = false
  }

  questions:QuestionBase<string>[] = [
   new TextboxQuestion({
      key:"firstName",
      label:"First Name",
      required:true,
      value:'',
      type:'text',


    }),
    new TextboxQuestion({
      key:"lastName",
      label:"Last Name",
      required:true,
      value:'',
      type:'text',

    }),
    new TextboxQuestion({
      key:"dob",
      label:"Date Of Birth",
      required:true,
      value:'23-04-1988',
      type:'date',

    }),
    new TextboxQuestion({
      key:"email",
      label:"Email",
      required:true,
      value:'',
      type:'email',

    }),
    new TextboxQuestion({
      key:"contactNo",
      label:"Contact No",
      required:true,
      value:'',
      type:'text',

    }),
    new TextboxQuestion({
      key:"password",
      label:"Password",
      required:true,
      value:'',
      type:'password',

    }),
    new TextboxQuestion({
      key:"startTime",
      label:"OPD start time",
      required:true,
      value:'',
      type:'time',

    }),
    new TextboxQuestion({
      key:"endTime",
      label:"OPD End Time",
      required:true,
      value:'',
      type:'time',

    }),
    new TextboxQuestion({
      key:"recessStartTime",
      label:"Recess End Time",
      required:true,
      value:'',
      type:'time',

    }),new TextboxQuestion({
      key:"recessEndTime",
      label:"Recess End Time",
      required:true,
      value:'',
      type:'time',

    }),
    new TextboxQuestion({
      key:"slotDuration",
      label:"Slot Duration",
      required:true,
      value:'',
      type:'number',

    }),
    new TextboxQuestion({
      key:"bufferTime",
      label:"Buffer Duration",
      required:true,
      value:'',
      type:'number',

    }),

    new DropdownQuestion({
      key:"gender",
      label:"Gender",
      required:true,
      value:'',
      options:[
        {
          key:"Male",
          value:"Male"
        },
        {
          key:"Female",
          value:"Female"
        }
      ]

    }),

  ]
  viewProfile(data:Doctor){

    this.dynamicFormService.populateFormWithData<Doctor>(this.addDoctorForm.form,data)
    this.modalComponant.open()
  }


}
