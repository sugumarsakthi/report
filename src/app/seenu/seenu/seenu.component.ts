import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Globalconstants } from 'src/app/app.constant';


export interface Seenuinterest{
  date: string;
  amount: number;
  status:string
}
const Seenuinterests: Seenuinterest[] = Globalconstants.allpersonalinterest.Seenu;
@Component({
  selector: 'app-seenu',
  templateUrl: './seenu.component.html',
  styleUrls: ['./seenu.component.scss']
})
export class SeenuComponent {
  displayedColumns: string[] = ['#','date','amount','status'];
  Seenuint = Seenuinterests;
  ngOnInit(){

  }
}