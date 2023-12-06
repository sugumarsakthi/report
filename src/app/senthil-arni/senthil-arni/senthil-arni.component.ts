import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Globalconstants } from 'src/app/app.constant';

export interface SenthilArninterest{
  date: string;
  amount: number;
  status:string
}
const SenthilArninterests: SenthilArninterest[] = Globalconstants.allpersonalinterest.SenthilArni;
@Component({
  selector: 'app-senthil-arni',
  templateUrl: './senthil-arni.component.html',
  styleUrls: ['./senthil-arni.component.scss']
})
export class SenthilArniComponent {
  displayedColumns: string[] = ['#','date','amount','status'];
  SenthilArniInt = SenthilArninterests;
  ngOnInit(){
    this.createSenthilArnibarChart();
  }
  createSenthilArnibarChart(){
    const SenthilArnibarchart = Highcharts.chart('senthil-arni-chart-bar', {
      chart: {
        type: 'column'
      },
      title: {
        text: ''
      },     
      xAxis: {
        categories: [
          'Report'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount (Rs)'
        }
      },
      exporting: {
        buttons: {
          contextButton: {
            enabled:true
          }
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
        data: [5000]    
      }, {
        name: 'Total Amount',
        data: [100000]
    
      }]
    } as any);
  }
}
