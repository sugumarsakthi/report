import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
export interface PeriodicElement {
  date: string;
  position: number;
  amount: number;
  status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, date: '1-10-2023', amount: 1500, status: 'Done'},
  {position: 2, date: '1-11-2023', amount: 1500, status: 'Done'},
  {position: 3, date: '30-11-2023', amount: 1500, status: 'Done'},
];
@Component({
  selector: 'app-gopi',
  templateUrl: './gopi.component.html',
  styleUrls: ['./gopi.component.scss']
})
export class GopiComponent {
displayedColumns: string[] = ['position', 'date', 'amount', 'status'];
  dataSource = ELEMENT_DATA;
  ngOnInit(){
    this.createGopibarChart();
  }
  createGopibarChart(){
    const Gopibarchart = Highcharts.chart('gopi-chart-pie', {
      chart: {
        type: 'column'
      },
      title: {
        text: ''
      },     
      xAxis: {
        categories: [
          'Nov',
          'Dec'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount (Rs)'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} Rs</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Interest',
        data: [4500]    
      }, {
        name: 'Total Amount',
        data: [50000]
    
      }]
    } as any);
  }
}
