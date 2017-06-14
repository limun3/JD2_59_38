import { Component, OnInit } from '@angular/core';
// import { LoginService } from './login.service'
import { LoginData } from './login-data.model'
// import { AuthService } from '../services/auth.service';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
//   providers: [LoginService, AuthService]
})
export class LoginComponent implements OnInit {
  Username: string;
  Password: string;

//   constructor(private loginService: LoginService, private authService: AuthService, private router: Router) {
//    }
    constructor(){
        
    }
  ngOnInit() {
    /*if (this.authService.isLoggedIn()){
      this.router.navigate(['/home']);
    }*/
  }

  onSubmit() {

    // let userName = this.Username;
    // this.loginService.login(new LoginData(this.Username, this.Password)).subscribe(x => {this.authService.logIn(x); 
    //     this.router.navigate(['/']);});

    //this.Username = "";
    //this.Password = "";
  }

}
