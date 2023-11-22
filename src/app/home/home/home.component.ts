import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SeenuComponent } from 'src/app/seenu/seenu/seenu.component';
import { Globalconstants } from 'src/app/app.constant';

export interface PeriodicElement {
  typeofcost:string;
  date: string;
  amount: number;
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
  public totalamount: any;
  extraColumns = [
    [
      {
        key: 'totalName',
        colspan: 2,
        render: (): string => 'Total'
      },
      {
        key: 'totalCost',
        colspan: 1,
        render: (): string | null =>
          this.totalamount
      }
    ],   
  ];
  ngOnInit() {
    console.log(this.dataSource.length,"this.dataSource.length");
    this.totalamount = 0;
    for(var i=0; i < this.dataSource.length; i++){
      this.totalamount += this.dataSource[i].amount;
    }
    console.log(this.totalamount,"this.totalamount");
  }
  isExtendedRow = (index: number) => {
    return index === 5;
  };
}
