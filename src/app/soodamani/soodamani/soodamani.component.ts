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
}
