import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isActive: boolean = false;

@Input("role") role!:string;
labelAndLinks!:{
  label:string,
  link:string,
  isdropdown?:boolean
}[]
RoleLinks:{
  role:string,
  links:{
    label:string,
    link:string,
    isdropdown?:boolean
  }[]}[] =  [
    {role:"Hospital",links:[{
      label:"Home",link:"",isdropdown:false
    },
    {
      label:"Doctors",link:"doctor",isdropdown:false
    },
    {
      label:"Appointments",link:"appointment",isdropdown:false
    },
    {
      label:"Dashhboard",link:"dashboard",isdropdown:false
    }
    ,
    {
      label:"Logout",link:"#",isdropdown:false
    }


    ]},
    {role:"Doctor",links:[{
      label:"Home",link:"#",isdropdown:false
    },
    {
      label:"Appointments",link:"#",isdropdown:false
    },
    {
      label:"Dashboard",link:"#",isdropdown:false
    },
    {
      label:"Logout",link:"#",isdropdown:false
    }


    ]},
    {role:"User",links:[{
      label:"Home",link:"#",isdropdown:false
    },
    {
      label:"Patients",link:"#",isdropdown:false
    },
    {
      label:"Appointments",link:"#",isdropdown:false
    },
    {
      label:"Dashboard",link:"#",isdropdown:false
    }



    ]}
  ]

  ngOnInit(): void {
    console.log("Hii I am initialized Literally Yaar");
    this.labelAndLinks = this.RoleLinks.filter(collection=>collection.role===this.role)[0].links
  }

}



