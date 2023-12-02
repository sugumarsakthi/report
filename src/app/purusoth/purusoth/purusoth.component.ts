import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Globalconstants } from 'src/app/app.constant';
export interface Purusothinterest{
  date: string;
  amount: number;
  status:string
}
const Purusothinterests: Purusothinterest[] = Globalconstants.allpersonalinterest.Purusoth;
@Component({
  selector: 'app-purusoth',
  templateUrl: './purusoth.component.html',
  styleUrls: ['./purusoth.component.scss']
})
export class PurusothComponent {
  displayedColumns: string[] = ['#','date','amount','status'];
  PurusothInt = Purusothinterests;
}
