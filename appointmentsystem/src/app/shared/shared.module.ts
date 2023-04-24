import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleCardComponent } from '../components/shared/role-card/role-card.component';
import { FooterComponent } from '../components/shared/footer/footer.component';
import { HeaderComponent } from '../components/shared/header/header.component';
import { SideBarComponent } from '../components/shared/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { FilterComponentComponent } from '../components/shared/filter-component/filter-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ RoleCardComponent, FooterComponent, HeaderComponent,FilterComponentComponent,
    SideBarComponent],
  imports: [CommonModule,RouterModule,FormsModule],
  exports:[ RoleCardComponent, FooterComponent, HeaderComponent,FilterComponentComponent,
    SideBarComponent]
})
export class SharedModule {}
