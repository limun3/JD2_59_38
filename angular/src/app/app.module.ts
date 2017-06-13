import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';

// const ChildRoutes = [
//    {path: "child1", component: SecondComponent},
//   ]

const Routes = [
  {path: "Child1", component: SecondComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
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
