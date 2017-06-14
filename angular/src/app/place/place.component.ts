import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Place } from '../place/place.model';
import { Origins } from '../enumerations/origins.model';

@Component({
  selector: 'place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  @Input() place: Place;
  @Input() show: boolean = false;
  Origin : Origins = 'Place';

/*
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
      activatedRoute.params.subscribe(params => {this.place = params["countryId"]});
   }
*/
  ngOnInit() {
  }

  

}
