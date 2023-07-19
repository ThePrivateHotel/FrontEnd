import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponentComponent} from './components/navbar-component/navbar-component.component';
import { LoginComponentComponent} from './components/login-component/login-component.component';
import { HomeComponentComponent} from './components/home-component/home-component.component';
import { HotelComponentComponent } from './components/hotel-component/hotel-component.component';
import { VillaComponentComponent } from './components/villa-component/villa-component.component';
import { TourismComponentComponent } from './components/tourism-component/tourism-component.component';
import { RestaurantComponentComponent } from './components/restaurant-component/restaurant-component.component';

const routes: Routes = [

  { path: 'navbar', component: NavbarComponentComponent} ,
  { path: 'login', component: LoginComponentComponent},
  { path: 'home', component: HomeComponentComponent},
  { path: 'hotel', component: HotelComponentComponent} ,
  { path: 'villa', component: VillaComponentComponent},
  { path: 'tourism', component: TourismComponentComponent},
  { path: 'restaurant', component: RestaurantComponentComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
