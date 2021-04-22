import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GraphQLModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";

import { APOLLO_OPTIONS } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { InMemoryCache } from "@apollo/client/core";
import { LoginComponent } from "./login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HotelComponent } from "./hotel/hotel.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HotelCardComponent } from "./hotel-card/hotel-card.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HotelSearchComponent } from "./hotel-search/hotel-search.component";
import { SignupComponent } from "./signup/signup.component";
import { BookingComponent } from "./booking/booking.component";
import { BookingCardComponent } from "./booking-card/booking-card.component";
import { CanActivateRouteService } from "./CanActivateRoute.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HotelComponent,
    HotelCardComponent,
    NavbarComponent,
    HotelSearchComponent,
    SignupComponent,
    BookingComponent,
    BookingCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: "http://localhost:4000/graphql",
            withCredentials: true,
          }),
        };
      },
      deps: [HttpLink],
    },
    CanActivateRouteService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
