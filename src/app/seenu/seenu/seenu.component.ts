import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
export interface PeriodicElement {
  date: string;
  position: number;
  amount: number;
  status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, date: '1-09-2023', amount: 4000, status: 'Done'},
  {position: 2, date: '1-10-2023', amount: 4000, status: 'Done'},
  {position: 3, date: '1-11-2023', amount: 4000, status: 'Pending'},
];
@Component({
  selector: 'app-seenu',
  templateUrl: './seenu.component.html',
  styleUrls: ['./seenu.component.scss']
})
export class SeenuComponent {
  displayedColumns: string[] = ['position', 'date', 'amount', 'status'];
  dataSource = ELEMENT_DATA;
  public ngAfterViewInit(): void {
    this.createChartPie();
  }
  createChartPie(){
  const chart = Highcharts.chart('chart-pie', {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Seenu'
  },
    credits: {
      enabled: false,
    },
    tooltip: {
      headerFormat: `<span class="mb-2">Date: {point.key}</span><br>`,
      pointFormat: '<span>Amount: {point.y}</span>',
      useHTML: true,
    },
    series: [{
      name: null,
      innerSize: '50%',
      data:[
        {
          date:'1/9/2023',
          name: 'Aug-Int',
          y:4000
        },
        {
          date:'1/10/2023',
          name: 'Aug-Int',
          y:4000
        },
        {
          date:'1/10/2023',
          name: 'Total amount',
          y:200000
        },       
    ]
    }],
  } as any);
}
}
