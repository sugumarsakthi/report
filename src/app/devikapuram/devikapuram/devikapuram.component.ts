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
}
