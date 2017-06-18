import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Country } from '../models/country.model'
import 'rxjs/add/operator/map';

@Injectable()
export class CountryService{
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor (private http: Http){

    }

    GetCountries(): Observable<any> {

        return this.http.get("http://localhost:54042/api/country").map(this.extractData);        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }
    
    postCountry(country: Country): Promise<Country> {
    return this.http
      .post("http://localhost:54042/api/country", JSON.stringify(
          {
              id: country.id,
              name: country.name,
              code: country.code
          }
      ), {headers: this.headers})
      .toPromise()
      .then(res => res.json().country as Country);
  }

  remove(id: number): Promise<void> {
      const uri =  "http://localhost:54042/api/country";
    const url = `${uri}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null);
  }

}