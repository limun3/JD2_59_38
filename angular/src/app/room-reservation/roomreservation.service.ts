import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RoomReservationService{

    constructor (private http: Http){

    }

    GetRoomReservation(): Observable<any> {

        return this.http.get("http://localhost:54042/api/roomreservation").map(this.extractData);        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }
}