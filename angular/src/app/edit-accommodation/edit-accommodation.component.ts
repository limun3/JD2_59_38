import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AccommodationService } from '../accommodation/accommodation.service';
import { Accommodation } from '../models/accommodation.model';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'edit-accommodation',
  templateUrl: './edit-accommodation.component.html',
  styleUrls: ['./edit-accommodation.component.css']
})
export class AccommodationEditComponent implements OnInit{
  Id: number = -1;
  loading: boolean = false;
  actype: Accommodation;
  Name: string = "";

    accommodation: AccommodationEditComponent[];

   constructor( private router: Router, 
      private activatedRoute: ActivatedRoute,
      private _service: AccommodationService) { }

    ngOnInit() {
        this._service.GetAccommodations().subscribe(
      (prod: any) => {this.accommodation = prod; console.log(this.accommodation)},//You can set the type to Product.
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
  }
  
  updateAccommon(ac: Accommodation, form: NgForm)
  {
    // alert ("Component: ID: " + ac.id + ", Name: " + ac.name);
    this._service.updateAccomodation(ac.id, ac);
    this.router.navigate(['/accommodation']);
  }
}
