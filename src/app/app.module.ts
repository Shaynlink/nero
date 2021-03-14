import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { HomeComponent } from './page/home/home.component';
import { WelcomeHomeComponent } from './page/home/welcome/welcome-home.component';
import { DecBtnComponent } from './components/decbtn/decbtn.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    HomeComponent,
    WelcomeHomeComponent,
    DecBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
