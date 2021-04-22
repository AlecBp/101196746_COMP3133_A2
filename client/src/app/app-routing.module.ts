import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HotelComponent} from './hotel/hotel.component';
import {LoginComponent} from './login/login.component';
import {HotelSerachComponent} from './hotel-serach/hotel-serach.component';
import {SignupComponent} from './signup/signup.component';
import {BookingComponent} from './booking/booking.component';
import {CanActivateRouteService} from './CanActivateRoute.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'hotel',
    component: HotelComponent,
    pathMatch: 'full',
    canActivate: [CanActivateRouteService]
  },
  {
    path: 'search-hotel',
    component: HotelSerachComponent,
    pathMatch: 'full',
    canActivate: [CanActivateRouteService]
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'booking',
    component: BookingComponent,
    pathMatch: 'full',
    canActivate: [CanActivateRouteService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
