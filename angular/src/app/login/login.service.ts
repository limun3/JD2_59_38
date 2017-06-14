import { Injectable } from '@angular/core';
import { LoginData } from './login-data.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConfigurationManager } from '../services/configuration.service';

@Injectable()
export class LoginService {

    constructor(private http: Http) {}

    login(loginData: LoginData) : Observable<any> {
        let header = new Headers();
        header.append('Content-Type', 'application/x-www-form-urlencoded');

        let options = new RequestOptions();
        options.headers = header;
        
        let data = `username=${loginData.username}&password=${loginData.password}&grant_type=${loginData.grant_type}`;

        let host = ConfigurationManager.Host;
        return this.http.post(`http://${host}/oauth/token`, data, options);
    }

}