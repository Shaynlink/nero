import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';

import { HomeComponent } from './page/home/home.component';
import { WelcomeHomeComponent } from './page/home/welcome/welcome-home.component';
import { FeaturesHomeComponent } from './page/home/features/features-home.component';
import { ProductsHomeComponent } from './page/home/products/products-home.component';

import { DecBtnComponent } from './components/decbtn/decbtn.component';
import { CardProductComponent } from './components/card-products/card-products.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MainFooterComponent,
    HomeComponent,
    WelcomeHomeComponent,
    FeaturesHomeComponent,
    ProductsHomeComponent,
    DecBtnComponent,
    CardProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
