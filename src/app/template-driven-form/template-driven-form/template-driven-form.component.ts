import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {
    countrylist: country[] = [
      new country('1', 'India'),
      new country('2', 'Australia'),
      new country('3', 'NZ'),
    ]


    onSubmit(form: NgForm){
      console.log(form,"form");
      console.log(form,"form");

    }

}
class country{
  id:string;
  name:string;
  constructor(id:string, name:string){
    this.id = id;
    this.name = name
  }
}