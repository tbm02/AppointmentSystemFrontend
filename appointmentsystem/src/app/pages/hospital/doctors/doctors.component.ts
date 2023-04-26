import { Component, OnInit } from '@angular/core'
import { FilterService } from 'src/app/services/user/shared/filter.service'
import { Doctor } from 'src/app/utils/dto/doctor.model'
import { Specialization } from 'src/app/utils/dto/specialization.model'
import { FilterObject } from 'src/app/utils/models/filterobject.model'

@Component({
  selector: 'app-hospital-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  searchQuery!: string
  selectedSpecialization!: Specialization
  specializations: Specialization[] = [
    { specializationId: '1', specializationName: 'Neurologist' },
    { specializationId: '2', specializationName: 'Orthopadic' },
    { specializationId: '3', specializationName: 'Gynac' }
  ]
  filterfieldValues: FilterObject[] = [
    {
      field: 'specialization',
      values: ['Neurologist', 'Orthopadic', 'Gynac'],
      inclusive: true,
      filterKey: 'specializationName'
    },
    { field: 'gender', values: ['male', 'female'], inclusive: false }
  ]

  
  dummyDoctors: Doctor[] = [
    {
      user: {
        contactNo: '9494902102',
        email: 'virat@hospital.com',
        password: '2928',
        roleId: '2',
        userId: '1'
      },
      firstName: 'Jane',
      lastName: 'Doe',
      hospital: {
        hospitalId: '1',
        hospitalName: 'ABC Hospital'
      },
      gender: 'male',
      dob: new Date('1985-03-15'),
      recessStartTime: '12:00',
      recessEndTime: '13:00',
      startTime: '09:00',
      endTime: '17:00',
      slotDuration: '30',
      bufferTime: '10',
      specialization: [
        { specializationId: '1', specializationName: 'Neurologist' }
      ],

      imageLink: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      user: {
        contactNo: '9494902102',
        email: 'virat@hospital.com',
        password: '2928',
        roleId: '2',
        userId: '1'
      },
      firstName: 'Jane',
      lastName: 'Doe',
      hospital: {
        hospitalId: '1',
        hospitalName: 'ABC Hospital'
      },
      gender: 'male',
      dob: new Date('1985-03-15'),
      recessStartTime: '12:00',
      recessEndTime: '13:00',
      startTime: '09:00',
      endTime: '17:00',
      slotDuration: '30',
      bufferTime: '10',
      specialization: [{ specializationId: '3', specializationName: 'Gynac' }],

      imageLink: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      user: {
        contactNo: '9494902102',
        email: 'virat@hospital.com',
        password: '2928',
        roleId: '2',
        userId: '1'
      },
      firstName: 'King Kohli',
      lastName: 'Doe',
      hospital: {
        hospitalId: '1',
        hospitalName: 'ABC Hospital'
      },
      gender: 'male',
      dob: new Date('1985-03-15'),
      recessStartTime: '12:00',
      recessEndTime: '13:00',
      startTime: '09:00',
      endTime: '17:00',
      slotDuration: '30',
      bufferTime: '10',
      specialization: [
        { specializationId: '1', specializationName: 'Neurologist' },
        { specializationId: '3', specializationName: 'Gynac' }
      ],

      imageLink: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      user: {
        contactNo: '9494902102',
        email: 'virat@hospital.com',
        password: '2928',
        roleId: '2',
        userId: '1'
      },
      firstName: 'Jane',
      lastName: 'Doe',
      hospital: {
        hospitalId: '1',
        hospitalName: 'ABC Hospital'
      },
      gender: 'male',
      dob: new Date('1985-03-15'),
      recessStartTime: '12:00',
      recessEndTime: '13:00',
      startTime: '09:00',
      endTime: '17:00',
      slotDuration: '30',
      bufferTime: '10',
      specialization: [
        { specializationId: '1', specializationName: 'Pediatrics' }
      ],

      imageLink: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      user: {
        contactNo: '9494902102',
        email: 'virat@hospital.com',
        password: '2928',
        roleId: '2',
        userId: '1'
      },
      firstName: 'Jane',
      lastName: 'Doe',
      hospital: {
        hospitalId: '1',
        hospitalName: 'ABC Hospital'
      },
      gender: 'female',
      dob: new Date('1985-03-15'),
      recessStartTime: '12:00',
      recessEndTime: '13:00',
      startTime: '09:00',
      endTime: '17:00',
      slotDuration: '30',
      bufferTime: '10',
      specialization: [
        { specializationId: '3', specializationName: 'Gynac' }
      ],

      imageLink: 'https://randomuser.me/api/portraits/men/1.jpg'
    }
  ]
  filteredDoctors: Doctor[] = this.dummyDoctors
  ngOnInit (): void {
      }
  applyFilter (filterParams: FilterObject[]) {
this.filteredDoctors = FilterService.applyFilter<Doctor>(this.dummyDoctors,filterParams)


}
  filterByFields (filterParam: FilterObject) {}

  addDoctor(){

  }
}
