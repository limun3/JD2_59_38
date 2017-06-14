import { Component, OnInit } from '@angular/core';
import {AccommodationService} from '../services/accommodation.service';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css'],
  providers: [AccommodationService]
})

export class AccommodationComponent implements OnInit{

    data: AccommodationComponent[];

   constructor(private _service: AccommodationService) { }

    ngOnInit() {
        this._service.getData().subscribe(
      (prod: any) => {this.data = prod; console.log(this.data)},//You can set the type to Product.
      //error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
    }

}