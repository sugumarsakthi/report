import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Globalconstants } from 'src/app/app.constant';
export interface Soodamaninterest{
  date: string;
  amount: number;
  status:string
}
const Soodamaninterests: Soodamaninterest[] = Globalconstants.allpersonalinterest.Soodamani;
@Component({
  selector: 'app-soodamani',
  templateUrl: './soodamani.component.html',
  styleUrls: ['./soodamani.component.scss']
})
export class SoodamaniComponent {
  displayedColumns: string[] = ['#','date','amount','status'];
  SoodamanInt = Soodamaninterests;
  public interestamount:any;  
  interestamounts:any;
  pendingamount:any;
  totalintamount:any; 
  ngOnInit(){
    this.interestamount = this.SoodamanInt;
    this.interestamounts = 0; 
    this.pendingamount = 0;   
    this.totalintamount = 0;   
    for(var i=0; i < this.interestamount.length; i++){   
      if(this.interestamount[i].status == "Done"){
        this.interestamounts += this.interestamount[i].amount;
        console.log(this.interestamounts, "interesttotalamount");
      }
    }
    for(var i=0; i < this.interestamount.length; i++){   
      if(this.interestamount[i].status == "In Progress"){
        this.pendingamount += this.interestamount[i].amount;
        console.log(this.pendingamount, "interesttotalamount");
      }
    }
    for(var i=0; i < this.interestamount.length; i++){   
        this.totalintamount += this.interestamount[i].amount;
        console.log(this.totalintamount, "interesttotalamount");
    }
    this.createSoodamanibarChart();
  }
  createSoodamanibarChart(){
    const Soodamanibarchart = Highcharts.chart('Soodamani-chart-bar', {
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
        data: [3800]    
      }, {
        name: 'Total Amount',
        data: [10000]
    
      }]
    } as any);
  }
}
