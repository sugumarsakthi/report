import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SeenuComponent } from 'src/app/seenu/seenu/seenu.component';
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
  public totalamount: any;
  public totalborrowamountothers: any;
  ngOnInit() {
    this.totalamount = 0;
    for(var i=0; i < this.dataSource.length; i++){
      this.totalamount += this.dataSource[i].amount;
    }
  
    this.totalborrowamountothers = 0;
    for(var i=0; i < this.allborrows.length; i++){
      this.totalborrowamountothers += this.allborrows[i].amount;
    }
  }
}
