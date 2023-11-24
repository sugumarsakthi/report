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
  public totalamount: any;              // Type of cost list total
  public totalborrowamountothers: any;  //மொத்தம் கடன் 
  public totaldecmonthcost: any;        //bar chart decmonth
  public totalteaamount:any;            //bar chart decmonth tea
  totalteaamounts: any;                 //bar chart decmonth
  public totaltea = Globalconstants.alldata.alldatas; //bar chart decmonth
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
  ngOnInit() {

    this.totalamount = 0;  // Type of cost list total
    for(var i=0; i < this.dataSource.length; i++){
      this.totalamount += this.dataSource[i].amount;
    }
  
    this.totalborrowamountothers = 0;  // மொத்தம் கடன் :
    for(var i=0; i < this.allborrows.length; i++){
      this.totalborrowamountothers += this.allborrows[i].amount;
    }


    this.totaldecmonthcost = 0;  //bar chart decmonth
    for(var i=0; i < this.decmonthcost2023.length; i++){
      this.totaldecmonthcost += this.decmonthcost2023[i].amount;
    }

    this.totalteaamount = this.dataSource;
    this.totalteaamounts = 0;   //bar chart decmonth
    for(var i=0; i < this.totaltea.length; i++){
      if(this.totaltea[i].typeofcost == "தேநீர்" && this.totaltea[i].month == "nov"){
        this.totalteaamounts += this.totaltea[i].amount;
      }
    }
    this.todaycosts=0;  //header section today cost
    this.totalcostofthismonth = 0; //header section current month cost
    this.totalcostofthisyear = 0; //header section current month cost
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
