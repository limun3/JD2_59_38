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

import { AccommodationService } from './accommodation/accommodation.service';
import { AuthenticationService } from './services/authentication.service';
import { PlaceService } from './place/place.service';
import { LoggedInGuard } from './guards/login.guard'
import { IsAdminGuard } from './guards/admin.guard'
import { IsManagerGuard } from './guards/manager.guard'

const Routes = [
  {path: "home", component: HomeComponent},
  {path: "place", component: PlaceComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  // {path: "Login", component: , canActivate: [LoggedInGuard]},  
  {path: "login",  component: LoginComponent},
  {path: "accommodation",component: AccommodationComponent},
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [AuthenticationService, PlaceService, AccommodationService, LoggedInGuard, IsAdminGuard, IsManagerGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
