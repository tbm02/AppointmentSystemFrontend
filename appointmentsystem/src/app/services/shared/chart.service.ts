import { Injectable } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';

@Injectable({ providedIn: 'root' })
export class ChartService {
  populateChartWithData<T>(
    chartData: ChartData<ChartType, number[], string | string[]>,
    data: any[],
    field: string,
    // animations:
  ) {
    let tempData: { [key: string]: number } = data.reduce(
      (accumulator, value) => {
        const objectField = field.split('.').reduce((o, k) => o?.[k], value);
        accumulator[objectField] = (accumulator[objectField] || 0) + 1;
        return accumulator;
      },
      {} as { [key: string]: number }
    );
    chartData.labels = Object.keys(tempData);
    console.log(chartData.labels);
    chartData.datasets.push({ data: Object.values(tempData),animation:{
      duration:1000,
      delay:500,
      easing:"linear"
    }});
  }
}
