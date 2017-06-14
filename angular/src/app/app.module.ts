import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { PlaceComponent } from './place/place.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

// const ChildRoutes = [
//    {path: "child1", component: SecondComponent},
//   ]

const Routes = [
  {path: "home", component: HomeComponent},
  {path: "place", component: PlaceComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  // {path: "Login", component: , canActivate: [LoggedInGuard]},  
  {path: "login",  component: LoginComponent},
]

@NgModule({
  declarations: [
    AppComponent,
  

    HomeComponent,
    PlaceComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
