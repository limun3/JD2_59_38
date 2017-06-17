import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AccommodationTypeService{

    constructor (private http: Http){

    }

    GetAccommodationTypes(): Observable<any> {

        return this.http.get("http://localhost:54042/api/accommodationtypes").map(this.extractData);        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }
}