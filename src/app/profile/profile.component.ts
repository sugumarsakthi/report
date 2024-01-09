import { Component } from '@angular/core';
import { ExperienceConstant } from '../app.experience';
export interface expdetails{
  id: number;
  companyname: string;
  designation:string,
  years:string,
  exp:string,
  projectdetails:string,
  projectname:string,
  projectdesc:string
}
const workexperience: expdetails[] = ExperienceConstant.expdata.experiencedatas;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  displayedColumns: string[] = ['id','companyname','designation','years','exp'];
  workingexperience = workexperience;
  projdetaildisplay :boolean = false;
  projectid: any;
  ngOnint(){
  }
 
  // openIt(element: { id: any; }){
  //   debugger;
  //   this.projectid = element;
  //   console.log(this.projectid, "element");
  // }



  // openIt(){
  //   console.log(this.workingexperience[0]);
  // }

  
  // openIt(columns: any){
  //   console.log(columns);
  // }
  // element(){
  //   alert("test");
  //   console.log(this.element);
  // }
  // onSelect(){
  //   this.projdetaildisplay = true;
  //   // this.projectid
  // }
}
