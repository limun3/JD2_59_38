import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import {Ng2PaginationModule} from 'ng2-pagination';

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
import { MapComponent } from './map/map.component';

import { AddATypeComponent } from './add-accommodationtype/add-accommodationtype.component';
import { AddCountry } from './add-country/add-country.component';
import { AddRegionComponent } from './add-region/add-region.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { AddAccommodation } from './add-accommodation/add-accommodation.component';
import { AddRoomComponent} from './add-room/add-room.component';
import { ShowAccommodationComponent } from './show-accommodation/show-accommodation.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';

import { ButtonsComponent } from './buttons/buttons.component';

import { AccommodationTypeEditComponent } from './edit-accommodationtype/edit-accommodationtype.component';
import { AccommodationEditComponent } from './edit-accommodation/edit-accommodation.component';
import { CountryEditComponent } from './edit-country/edit-country.component';
import { PlaceEditComponent } from './edit-place/edit-place.component';
import { RegionEditComponent } from './edit-region/edit-region.component';
import { RoomEditComponent } from './edit-room/edit-room.component';

import { DeleteAccommodationComponent } from './delete-accommodation/delete-accommodation.component'
import { DeleteAccommodationTypeComponent } from './delete-accommodationtype/delete-accommodationtype.component'
import { DeleteCountryComponent } from './delete-country/delete-country.component'
import { DeleteRegionComponent } from './delete-region/delete-region.component'
import { DeletePlaceComponent } from './delete-place/delete-place.component'
import { DeleteRoomComponent } from './delete-room/delete-room.component'

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
  {path: "show-accommodation", component: ShowAccommodationComponent},

  {path: "add-accommodationtype", component: AddATypeComponent},
  {path: "add-country", component: AddCountry},
  {path: "add-region", component: AddRegionComponent},
  {path: "add-place", component: AddPlaceComponent},
  {path: "add-accommodation", component: AddAccommodation},
  {path: "add-room", component: AddRoomComponent},
 
  {path: "room-booking", component: RoomBookingComponent, canActivate: [LoggedInGuard]},
  {path: "buttons", component: ButtonsComponent, canActivate: [LoggedInGuard, IsAdminGuard]},
  
  {path: "edit-accommodationtype", component: AccommodationTypeEditComponent},
  {path: "edit-accommodation", component: AccommodationEditComponent},
  {path: "edit-country", component: CountryEditComponent},
  {path: "edit-place", component: PlaceEditComponent},
  {path: "edit-region", component: RegionEditComponent},
  {path: "edit-room", component: RoomEditComponent},

  {path: "delete-accommodation", component: DeleteAccommodationComponent},
  {path: "delete-accommodationtype", component: DeleteAccommodationTypeComponent},
  {path: "delete-country", component: DeleteCountryComponent},
  {path: "delete-region", component: DeleteRegionComponent},
  {path: "delete-place", component: DeletePlaceComponent},
  {path: "delete-room", component: DeleteRoomComponent}
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
    AddCountry,
    AddRegionComponent,
    AddPlaceComponent,
    AddRoomComponent,
    AddAccommodation,
	
    ButtonsComponent,
	
    AccommodationTypeEditComponent,
  	AccommodationEditComponent,
    CountryEditComponent,
    PlaceEditComponent,
    RegionEditComponent,
    RoomEditComponent,
	
    ShowAccommodationComponent,
    RoomBookingComponent,
	
  	DeleteAccommodationComponent,
    DeleteAccommodationTypeComponent,
    DeleteCountryComponent,
    DeleteRegionComponent,
    DeletePlaceComponent,
    DeleteRoomComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(Routes),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBVJbM4JRY3f15s3WSQh2ZCc5yDd3PFeSs'})
  ],
  providers: [AuthenticationService, PlaceService, AccommodationService, LoggedInGuard, IsAdminGuard,
              IsManagerGuard, CountryService, RegionService, RoomService, RoomReservationService,
              AccommodationTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
