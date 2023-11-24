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
    SoodamaniComponent
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