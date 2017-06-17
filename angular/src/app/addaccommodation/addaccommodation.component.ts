import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AccommodationService } from '../accommodation/accommodation.service';
import { Accommodation } from '../models/accommodation.model';

@Component({
  selector: 'app-addaccommodation',
  templateUrl: './addaccommodation.component.html',
  styleUrls: ['./addaccommodation.component.css'],
})

export class AddAccommodation implements OnInit{
    Id: number;
    accommodation: AddAccommodation[];

constructor(private service: AccommodationService) { }

ngOnInit() {}

// onSubmit(country: Country, form: NgForm) {
//     console.log(country);
//     this.service.create(country);
//   }

}
