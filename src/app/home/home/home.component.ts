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
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns: string[] = ['#','date','typeofcost','amount'];
  dataSource = ELEMENT_DATA;
  public overallteacosts:any;            //bar chart OVerall tea cost
  public totalnovteaamount:any;            //bar chart novmonth tea cost
  totalnovteaamounts: any;                 //bar chart novmonth tea cost
  totalnovotheramount: any;                 //bar chart novmonth other cost
  totalnovotheramounts: any;                 //bar chart novmonth other cost
  totaldecteaamount: any;                 //bar chart decmonth tea cost
  totaldecteaamounts: any;                 //bar chart decmonth tea cost
  totaldecotheramount: any;                 //bar chart decmonth other cost
  totaldecotheramounts: any;                 //bar chart decmonth other cost
  public fulldata = Globalconstants.alldata.alldatas; //bar chart decmonth
  public todaycost = Globalconstants.alldata.alldatas; //header section today cost
  todaycosts: any;  //header section today cost
  todaydate: any;
  todayyear: any;
  todaymonth: any;
  arraydate: any;
  arraymonth: any;
  arrayyear: any;
  totalcostofthismonth: any; //header section current month cost
  totalcostofthisyear: any; //header section current year cost
  overallteacost: any; //header section current year cost
  teacostofcurrentmonth: any; //tea cost of current month
  ngOnInit() {
    this.totalnovteaamount = this.dataSource;
    this.totalnovteaamounts = 0;   //bar chart novmonth
    for(var i=0; i < this.fulldata.length; i++){
      if(this.fulldata[i].typeofcost == "தேநீர்" && this.fulldata[i].month == "nov"){
        this.totalnovteaamounts += this.fulldata[i].amount;
      }
    }
    this.overallteacosts = 0;
    for(var i=0; i < this.fulldata.length; i++){
      if(this.fulldata[i].typeofcost == "தேநீர்"){
        this.overallteacosts += this.fulldata[i].amount;
      }
    }
    this.totalnovotheramounts = 0;
    for(var i=0; i < this.fulldata.length; i++){
      if(this.fulldata[i].typeofcost != "தேநீர்" && this.fulldata[i].month == "nov"){
        this.totalnovotheramounts += this.fulldata[i].amount;
      }
    }
    this.totaldecteaamounts = 0;   //bar chart decmonth
    for(var i=0; i < this.fulldata.length; i++){
      if(this.fulldata[i].typeofcost == "தேநீர்" && this.fulldata[i].month == "dec"){
        this.totaldecteaamounts += this.fulldata[i].amount;
      }
    }
    this.totaldecotheramounts = 0;
    for(var i=0; i < this.fulldata.length; i++){
      if(this.fulldata[i].typeofcost != "தேநீர்" && this.fulldata[i].month == "dec"){
        this.totaldecotheramounts += this.fulldata[i].amount;
      }
    }
    this.todaycosts=0;  //header section today cost
    this.totalcostofthismonth = 0; //header section current month cost
    this.totalcostofthisyear = 0; //header section current month cost
    this.teacostofcurrentmonth = 0; // tea cost of current month
    this.overallteacost = 0; //Over all tea cost
    for(var i=0; i < this.todaycost.length; i++){
      this.arraydate = new Date(this.todaycost[i].date).getDate();
      this.arraymonth = new Date(this.todaycost[i].date).getMonth();
      this.arrayyear = new Date(this.todaycost[i].date).getFullYear();
      this.todayyear = new Date().getFullYear();
      this.todaydate = new Date().getDate();
      this.todaymonth = new Date().getMonth();
      if( this.arraydate == this.todaydate && this.arrayyear == this.todayyear && this.arraymonth == this.todaymonth){
        this.todaycosts += this.todaycost[i].amount;
      }
      if( this.arrayyear == this.todayyear && this.arraymonth == this.todaymonth){
        this.totalcostofthismonth += this.todaycost[i].amount;
      }
      if( this.arrayyear == this.todayyear && this.arraymonth == this.todaymonth){
        if(this.fulldata[i].typeofcost == "தேநீர்"){
          this.teacostofcurrentmonth += this.todaycost[i].amount;
        }
      }
      if( this.arrayyear == this.todayyear){
        this.totalcostofthisyear += this.todaycost[i].amount;
      }
      this.overallteacost += this.todaycost[i].amount;
    }
    this.createbarChart();
  }
  createbarChart(){
    const barchart = Highcharts.chart('bar-chart', {
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
        name: 'தேநீர்',
        data: [this.totalnovteaamounts,this.totaldecteaamounts]
    
      }, {
        name: 'Others',
        data: [this.totalnovotheramounts, this.totaldecotheramounts]
    
      }]
    } as any);
  }
}
