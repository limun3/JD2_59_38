import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   constructor(private authService: AuthenticationService){}

 isLoggedIn(): boolean{
   return this.authService.isLoggedIn();
 }

logOut(){
    this.authService.logOut();
  }
  
  isManager() : boolean{
    return this.authService.getRole() == "Manager";
  }

  isAdmin(): boolean {
    return this.authService.getRole() == "Admin";
  }
}
