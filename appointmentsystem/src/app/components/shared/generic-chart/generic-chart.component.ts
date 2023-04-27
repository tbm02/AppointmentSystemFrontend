import { Component, Input, OnInit } from '@angular/core'
import { Chart ,ChartData,ChartType,registerables} from 'chart.js'

@Component({
  selector: 'app-shared-generic-chart',
  templateUrl: 'generic-chart.component.html',
  styleUrls: ['./generic-chart.component.css']
})
export class GenricChartComponent  {
  

  @Input() chartType!:ChartType
  @Input() data!:ChartData<ChartType,number[],string|string[]>
  @Input() height:number = 75
  @Input() width:number = 75
}
