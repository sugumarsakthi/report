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
import { ProfileComponent } from './profile/profile.component';
import { PhotosComponent } from './photos/photos.component';
import { BorrowsComponent } from './borrows/borrows/borrows.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form/template-driven-form.component';
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
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'photos',
    component:PhotosComponent
  },
  {
    path:'borrows',
    component:BorrowsComponent
  },
  {
    path:'template-form',
    component:TemplateDrivenFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
