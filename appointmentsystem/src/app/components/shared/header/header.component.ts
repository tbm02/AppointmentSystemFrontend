import { Component, Input, OnInit } from '@angular/core';
import { RouterLinks } from 'src/app/utils/constants/routerlink.constant';

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

  ngOnInit(): void {
    console.log("Hii I am initialized Literally Yaar");
    this.labelAndLinks = RouterLinks.RoleLinks.filter(collection=>collection.role===this.role)[0].links
  }

}



