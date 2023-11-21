import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GopiComponent } from './gopi/gopi/gopi.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { PurusothComponent } from './purusoth/purusoth/purusoth.component';
import { SeenuComponent } from './seenu/seenu/seenu.component';
import { SenthilArniComponent } from './senthil-arni/senthil-arni/senthil-arni.component';
import { SenthilComponent } from './senthil/senthil/senthil.component';
import { SoodamaniComponent } from './soodamani/soodamani/soodamani.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'seenu',
    component:SeenuComponent
  },
  {
    path:'senthil',
    component:SenthilComponent
  },
  {
    path:'gopi',
    component:GopiComponent
  },
  {
    path:'purusoth',
    component:PurusothComponent
  },
  {
    path:'soodamani',
    component:SoodamaniComponent
  },
  {
    path:'senthil-arni',
    component:SenthilArniComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
