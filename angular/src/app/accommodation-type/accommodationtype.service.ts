import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AccommodationType } from '../accommodation-type/accommodationtype.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccommodationTypeService{
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor (private http: Http){

    }

    GetAccommodationTypes(): Observable<any> {

        return this.http.get("http://localhost:54042/api/accommodationtypes").map(this.extractData);        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

     postAccomType(acctype: AccommodationType): Promise<AccommodationType> {
        return this.http.post("http://localhost:54042/api/accommodationtypes", JSON.stringify(
          {
              Id: acctype.Id,
              Name: acctype.Name
          }
      ), {headers: this.headers})
      .toPromise()
      .then(res => res.json().acctype as AccommodationType);
  }

remove(id: number): Promise<void> {
      const uri =  "http://localhost:54042/api/accommodationtypes";
    const url = `${uri}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null);
  }

  updateAccomodationType(id: number, at: AccommodationType) {
      alert ("updateAccomodation: ID: " + id + ", name: " + at.Name);
        let options = new RequestOptions();
        options.headers = this.headers;

        const path = "http://localhost:54042/api/accommodationtypes";
        const uri = `${path}/${id}`;

        var s = `Id=${id}&Name=${at.Name}`;
        return this.http.put(uri, JSON.stringify(at), options)
        .toPromise()
        .then(res => { debugger 
        return res.json() as AccommodationType;});
    }
}