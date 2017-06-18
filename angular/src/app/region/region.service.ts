import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Region } from '../models/region.model'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegionService{
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor (private http: Http){

    }

    GetRegions(): Observable<any> {   
        return this.http.get("http://localhost:54042/api/region").map(this.extractData);        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }
    
    PostRegion(region: Region): Promise<Region> {
        alert(region.id + " " +region.name + " " + region.country);
    return this.http
      .post("http://localhost:54042/api/region", JSON.stringify(
          {
              id: region.id,
              name: region.name,
              Country: {
                            name:region.country
                        }
            //   country: region.country
          }
      ), {headers: this.headers})
      .toPromise()
      .then(res => res.json().region as Region)
      .catch(this.handleError);
  }
      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    remove(id: number): Promise<void> {
      const uri =  "http://localhost:54042/api/region";
    const url = `${uri}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null);
  }

}