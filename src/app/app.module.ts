import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login/login.component';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home/home.component';
import { AngularmaterialModule } from './angularmaterial/angularmaterial.module';
import { SeenuComponent } from './seenu/seenu/seenu.component';
import { SenthilComponent } from './senthil/senthil/senthil.component';
import { PurusothComponent } from './purusoth/purusoth/purusoth.component';
import { SenthilArniComponent } from './senthil-arni/senthil-arni/senthil-arni.component';
import { SoodamaniComponent } from './soodamani/soodamani/soodamani.component';
import { PhotosComponent } from './photos/photos.component';
import { ProfileComponent } from './profile/profile.component';
import { BorrowsComponent } from './borrows/borrows/borrows.component';
import { GopiComponent } from './gopi/gopi/gopi.component';
import { DevikapuramComponent } from './devikapuram/devikapuram/devikapuram.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    SeenuComponent,
    SenthilComponent,
    PurusothComponent,
    SenthilArniComponent,
    SoodamaniComponent,
    PhotosComponent,
    ProfileComponent,
    GopiComponent,
    BorrowsComponent,
    DevikapuramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularmaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
