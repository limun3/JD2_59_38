import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlaceComponent } from './place/place.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { CountryComponent } from './country/country.component';
import { RegionComponent } from './region/region.component';
import { RoomComponent } from './room/room.component';
import { RoomReservationComponent } from './room-reservation/roomreservation.component';
import { AccommodationTypeComponent } from './accommodation-type/accommodationtype.component';

import { AddATypeComponent } from './addatype/addatype.component';

import { AccommodationService } from './accommodation/accommodation.service';
import { AuthenticationService } from './services/authentication.service';
import { PlaceService } from './place/place.service';
import { LoggedInGuard } from './guards/login.guard';
import { IsAdminGuard } from './guards/admin.guard';
import { IsManagerGuard } from './guards/manager.guard';
import { CountryService } from './country/country.service';
import { RegionService } from './region/region.service';
import { RoomService } from './room/room.service';
import { RoomReservationService } from './room-reservation/roomreservation.service';
import { AccommodationTypeService } from './accommodation-type/accommodationtype.service';

const Routes = [
  {path: "home", component: HomeComponent},
  {path: "place", component: PlaceComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "login",  component: LoginComponent},
  {path: "accommodation",component: AccommodationComponent},
  {path: "country", component: CountryComponent},
  {path: "region", component: RegionComponent},
  {path: "room", component: RoomComponent},
  {path: "roomreservation", component: RoomReservationComponent},
  {path: "accommodationtype", component: AccommodationTypeComponent},

  {path: "addatype", component: AddATypeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaceComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    AccommodationComponent,
    CountryComponent,
    RegionComponent,
    RoomComponent,
    RoomReservationComponent,
    AccommodationTypeComponent,
    AddATypeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [AuthenticationService, PlaceService, AccommodationService, LoggedInGuard, IsAdminGuard,
              IsManagerGuard, CountryService, RegionService, RoomService, RoomReservationService,
              AccommodationTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
