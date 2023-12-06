import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Globalconstants } from 'src/app/app.constant';
export interface Devikapuraminterest{
  date: string;
  amount: number;
  status:string
}
const Devikapuraminterests: Devikapuraminterest[] = Globalconstants.allpersonalinterest.Devikapuram;
@Component({
  selector: 'app-devikapuram',
  templateUrl: './devikapuram.component.html',
  styleUrls: ['./devikapuram.component.scss']
})
export class DevikapuramComponent {
  displayedColumns: string[] = ['#','date','amount','status'];
  DevikapuramInt = Devikapuraminterests;
  ngOnInit(){
    this.createDevikaputambarChart();
  }
  createDevikaputambarChart(){
    const Devikapurambarchart = Highcharts.chart('Devikapuram-chart-bar', {
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
        data: [24000]    
      }, {
        name: 'Total Amount',
        data: [400000]
    
      }]
    } as any);
  }
}
