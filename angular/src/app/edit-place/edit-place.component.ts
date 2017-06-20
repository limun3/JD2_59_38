import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PlaceService } from '../place/place.service';
import { Place } from '../models/place.model';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'edit-place',
  templateUrl: './edit-place.component.html',
  styleUrls: ['./edit-place.component.css']
})
export class PlaceEditComponent implements OnInit{
  Id: number = -1;
  loading: boolean = false;
  place: Place;
  Name: string = "";

    places: PlaceEditComponent[];

   constructor( private router: Router, 
    private activatedRoute: ActivatedRoute,
    private _service: PlaceService) { }

ngOnInit() {
        this._service.GetPlaces().subscribe(
      (prod: any) => {this.places = prod; console.log(this.places)},//You can set the type to Product.
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
  }
  
  updatePlace(place: Place, form: NgForm)
  {
    // alert ("ID: " + place.id + ", name: " + place.name);
    this._service.updatePlaces(place.id, place);
    this.router.navigate(['/place']);
  }
}
