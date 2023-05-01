import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RoleCardComponent } from '../components/shared/role-card/role-card.component'
import { FooterComponent } from '../components/shared/footer/footer.component'
import { HeaderComponent } from '../components/shared/header/header.component'
import { SideBarComponent } from '../components/shared/side-bar/side-bar.component'
import { RouterModule } from '@angular/router'
import { FilterComponentComponent } from '../components/shared/filter-component/filter-component.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { GenricChartComponent } from '../components/shared/generic-chart/generic-chart.component'
import { PieChartComponent } from '../components/shared/pie-chart/pie-chart.component'
import { NgChartsModule } from 'ng2-charts'
import { DynamicFormComponent } from '../components/shared/dynamic-form/dynamic-form.component'
import { DynamicFieldComponentComponent } from '../components/shared/dynamic-field-component/dynamic-field-component.component'
import { LineChartComponent } from '../components/shared/line-chart/line-chart.component'
import { BarChartComponent } from '../components/shared/bar-chart/bar-chart.component'
import { ModalComponent } from '../components/shared/modal/modal.component'
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
@NgModule({
  declarations: [
    RoleCardComponent,
    FooterComponent,
    HeaderComponent,
    FilterComponentComponent,
    GenricChartComponent,
    PieChartComponent,
    DynamicFormComponent,
    DynamicFieldComponentComponent,
    LineChartComponent,
    BarChartComponent,
    ModalComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgChartsModule,
    ReactiveFormsModule,
    MdbModalModule
  ],
  exports: [
    RoleCardComponent,
    FooterComponent,
    HeaderComponent,
    FilterComponentComponent,
    GenricChartComponent,
    PieChartComponent,
    DynamicFormComponent,
    DynamicFieldComponentComponent,
    LineChartComponent,
    BarChartComponent,
    ModalComponent,
    SideBarComponent
  ]
})
export class SharedModule {}
