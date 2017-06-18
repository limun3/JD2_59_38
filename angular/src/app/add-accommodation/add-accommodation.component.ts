import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AccommodationService } from '../accommodation/accommodation.service';
import { Accommodation } from '../models/accommodation.model';

@Component({
  selector: 'add-accommodation',
  templateUrl: './add-accommodation.component.html',
  styleUrls: ['./add-accommodation.component.css'],
})

export class AddAccommodation implements OnInit{
    Id: number;
    accommodation: AddAccommodation[];

constructor(private service: AccommodationService) { }

ngOnInit() {}

onSubmit(accommodation: Accommodation, form: NgForm) {
    console.log(accommodation);
    this.service.postAccommodation(accommodation);
    form.reset();
  }
}
