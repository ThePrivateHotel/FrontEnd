import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { BodyComponentComponent } from './components/body-component/body-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotelComponentComponent } from './components/hotel-component/hotel-component.component';
import { TourismComponentComponent } from './components/tourism-component/tourism-component.component';
import { VillaComponentComponent } from './components/villa-component/villa-component.component';
import { RestaurantComponentComponent } from './components/restaurant-component/restaurant-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    BodyComponentComponent,
    HotelComponentComponent,
    TourismComponentComponent,
    VillaComponentComponent,
    RestaurantComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
