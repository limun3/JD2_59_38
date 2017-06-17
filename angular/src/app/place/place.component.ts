import { Component, OnInit } from '@angular/core';
import {PlaceService} from '../place/place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
  providers: [PlaceService]
})

export class PlaceComponent implements OnInit{

    place: PlaceComponent[];

   constructor(private _service: PlaceService) { }

    ngOnInit() {
        this._service.GetPlaces().subscribe(
      (prod: any) => {this.place = prod; console.log(this.place)},//You can set the type to Product.
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
    }

}