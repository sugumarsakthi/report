import { Component } from '@angular/core';
export interface PeriodicElement {
  date: string;
  position: number;
  amount: number;
  status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, date: '1-09-2023', amount: 4000, status: 'Done'},
  {position: 2, date: '1-10-2023', amount: 4000, status: 'Done'},
  {position: 3, date: '1-11-2023', amount: 4000, status: 'Pending'},
];
@Component({
  selector: 'app-seenu',
  templateUrl: './seenu.component.html',
  styleUrls: ['./seenu.component.scss']
})
export class SeenuComponent {
  displayedColumns: string[] = ['position', 'date', 'amount', 'status'];
  dataSource = ELEMENT_DATA;
}
