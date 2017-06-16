import { Component, OnInit } from '@angular/core';
import {AccommodationService} from '../accommodation/accommodation.service';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css'],
  providers: [AccommodationService]
})

export class AccommodationComponent implements OnInit{

    accommon: AccommodationComponent[];

   constructor(private _service: AccommodationService) { }

    ngOnInit() {
        this._service.GetAccommodations().subscribe(
      (prod: any) => {this.accommon = prod; console.log(this.accommon)},//You can set the type to Product.
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
    }

}