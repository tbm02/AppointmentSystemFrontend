import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleCardComponent } from '../components/shared/role-card/role-card.component';
import { FooterComponent } from '../components/shared/footer/footer.component';
import { HeaderComponent } from '../components/shared/header/header.component';
import { SideBarComponent } from '../components/shared/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { FilterComponentComponent } from '../components/shared/filter-component/filter-component.component';
import { FormsModule } from '@angular/forms';
import { BarChartComponent } from '../components/shared/bar-chart/bar-chart.component';
import { PieChartComponent } from '../components/shared/pie-chart/pie-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { DynamicFormComponent } from '../components/shared/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [ RoleCardComponent, FooterComponent, HeaderComponent,FilterComponentComponent,BarChartComponent,
    PieChartComponent,
    DynamicFormComponent,

    SideBarComponent],
  imports: [CommonModule,RouterModule,FormsModule,NgChartsModule],
  exports:[ RoleCardComponent, FooterComponent, HeaderComponent,FilterComponentComponent,
    BarChartComponent,
    PieChartComponent,
    DynamicFormComponent,
    SideBarComponent,]
})
export class SharedModule {}
