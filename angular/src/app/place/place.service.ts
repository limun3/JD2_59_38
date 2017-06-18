import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Place } from '../models/place.model'
import 'rxjs/add/operator/map';

@Injectable()
export class PlaceService{
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor (private http: Http){

    }

    GetPlaces(): Observable<any> {

        return this.http.get("http://localhost:54042/api/place").map(this.extractData);        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    postPlace(place: Place): Promise<Place> {
    return this.http
      .post("http://localhost:54042/api/place", JSON.stringify(
          {
              id: place.id,
              name: place.name,
            //   Region: {
            //                 name:place.region
            //             }
          }
      ), {headers: this.headers})
      .toPromise()
      .then(res => res.json().place as Place);
  }
remove(id: number): Promise<void> {
      const uri =  "http://localhost:54042/api/place";
    const url = `${uri}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null);
  }

}