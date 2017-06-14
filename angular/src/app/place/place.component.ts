import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Place } from '../place/place.model';
import { Origins } from '../enumerations/origins.model';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
  providers: [PlaceService]
})
export class PlaceComponent implements OnInit {

  @Input() place: Place;
  @Input() show: boolean = false;
  Origin : Origins = 'Place';

   data: PlaceComponent[];

/*
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
      activatedRoute.params.subscribe(params => {this.place = params["countryId"]});
   }
*/
constructor(private _service: PlaceService) { }
  ngOnInit() {
        this._service.getData().subscribe(
      (prod: any) => {this.data = prod; console.log(this.data)},//You can set the type to Product.
      //error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
    }
  

}
