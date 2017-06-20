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

remove(id: number): Promise<void> {
      const uri =  "http://localhost:54042/api/room";
    const url = `${uri}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null);
  }

postRoom(room: Room): Promise<Room> {
    // alert ("Price: " + room.pricePerNight);
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

updateRooms(id: number, room: Room) {
    //   alert ("updateRoom: ID: " + id + ", name: " + room.roomNumber);
        let options = new RequestOptions();
        options.headers = this.headers;

        const path = "http://localhost:54042/api/room";
        const uri = `${path}/${id}`;

        // var s = `Id=${id}&Name=${pl.name}`;
        return this.http.put(uri, JSON.stringify(room), options)
        .toPromise()
        .then(res => { debugger 
        return res.json().room as Room;});
    }
}