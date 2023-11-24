import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Globalconstants } from 'src/app/app.constant';

export interface PeriodicElement {
  typeofcost:string;
  date: string;
  amount: number;
}
export interface allborrow{
  date: string;
  amount: number;
  personname:string,
  status:string
}
const ELEMENT_DATA: PeriodicElement[] = Globalconstants.alldata.alldatas;
const allborrows: PeriodicElement[] = Globalconstants.alldata.totalborrows;
const decmonthcost2023: PeriodicElement[] = Globalconstants.alldata.decmonthcost2023;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns: string[] = ['#','date','typeofcost','amount'];
  dataSource = ELEMENT_DATA;
  displayedColumns1: string[] = ['#','date','personname','amount','status'];
  allborrows = allborrows;
  displayedColumns2: string[] = ['#','date','personname','amount','status'];
  decmonthcost2023 = decmonthcost2023;
  public totalamount: any;
  public totalborrowamountothers: any;
  public totaldecmonthcost: any;
  public totalteaamount:any;
  totalteaamounts: any;
  public totaltea = Globalconstants.alldata.alldatas;
  ngOnInit() {
    this.totalamount = 0;
    for(var i=0; i < this.dataSource.length; i++){
      this.totalamount += this.dataSource[i].amount;
    }
  
    this.totalborrowamountothers = 0;
    for(var i=0; i < this.allborrows.length; i++){
      this.totalborrowamountothers += this.allborrows[i].amount;
    }
    this.totaldecmonthcost = 0;
    for(var i=0; i < this.decmonthcost2023.length; i++){
      this.totaldecmonthcost += this.decmonthcost2023[i].amount;
    }

    this.totalteaamount = this.dataSource;
    this.totalteaamounts = 0;
    console.log(this.totalteaamount, "this.totalteaamount")
    for(var i=0; i < this.totaltea.length; i++){
      if(this.totaltea[i].typeofcost == "தேநீர்" && this.totaltea[i].month == "nov"){
        this.totalteaamounts += this.totaltea[i].amount;
      }
    }
    this.createbarChart();

    // if()
  }
  createbarChart(){
    const barchart = Highcharts.chart('bar-chart', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Monthly Average Cost'
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
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
        name: 'தேநீர்',
        data: [this.totalteaamounts,0]
    
      }, {
        name: 'சீனு',
        data: [83.6, 78.8,]
    
      }, {
        name: 'செந்தில்',
        data: [48.9, 38.8,]
    
      }, {
        name: 'புருசோத்',
        data: [42.4, 33.2,]
    
      }]
    } as any);
  }
}
