import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Accommodation } from '../models/accommodation.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccommodationService{

    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor (private http: Http){

    }

    GetAccommodations(): Observable<any> {

        return this.http.get("http://localhost:54042/api/accommodation").map(this.extractData);        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

postAccommodation(accommodation: Accommodation): Promise<Accommodation> {
        return this.http
            .post('http://localhost:54042/api/accommodation', 
            JSON.stringify(
            {
                name: accommodation.name,
                address: accommodation.address,
                description: accommodation.description,
                latitude: accommodation.latitude,
                longitude: accommodation.longitude,
                imageURL: accommodation.imageUrl,
                accommodationType: accommodation.accommodationType,
                place: accommodation.place,
                owner: accommodation.owner
                
        }),
             {headers: this.headers})
            .toPromise()
            .then(res => res.json().accommodation as Accommodation);
    }

remove(id: number): Promise<void> {
      const uri =  "http://localhost:54042/api/accommodation";
    const url = `${uri}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null);
  }

updateAccomodation(id: number, at: Accommodation) {
        let options = new RequestOptions();
        options.headers = this.headers;

        const path = "http://localhost:54042/api/accommodation";
        const uri = `${path}/${id}`;

        var s = `Id=${id}&Name=${at.name}`;
        return this.http.put(uri, JSON.stringify(at), options)
        .toPromise()
        .then(res => { debugger 
        return res.json() as Accommodation;});
    }

}