import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Room } from '../models/room.model'
import 'rxjs/add/operator/map';

@Injectable()
export class RoomService{
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor (private http: Http){

    }

    GetRoom(): Observable<any> {

        return this.http.get("http://localhost:54042/api/room").map(this.extractData);        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

postRoom(room: Room): Promise<Room> {
    alert ("Price: " + room.pricePerNight);
    return this.http
      .post("http://localhost:54042/api/room", JSON.stringify(
          {
              id: room.id,
              roomNumber: room.roomNumber,
              bedCount: room.bedCount,
              description: room.description,
              pricePerNight: room.pricePerNight,
            //   Accommodation: {
            //                     name: room.accommodation.name
            //                 }  
          }
      ), {headers: this.headers})
      .toPromise()
      .then(res => res.json().room as Room);
  }

}