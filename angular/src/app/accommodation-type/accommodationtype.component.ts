import { Component, OnInit } from '@angular/core';
import {AccommodationTypeService} from '../accommodation-type/accommodationtype.service';

@Component({
  selector: 'app-accommodationtype',
  templateUrl: './accommodationtype.component.html',
  styleUrls: ['./accommodationtype.component.css'],
  providers: [AccommodationTypeService]
})

export class AccommodationTypeComponent implements OnInit{

    accommodationtype: AccommodationTypeComponent[];

   constructor(private _service: AccommodationTypeService) { }

    ngOnInit() {
        this._service.GetAccommodationTypes().subscribe(
      (prod: any) => {this.accommodationtype = prod; console.log(this.accommodationtype)},//You can set the type to Product.
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
}

// Add(element: addatype) {
//         this.elements.push(element);
//     }

}