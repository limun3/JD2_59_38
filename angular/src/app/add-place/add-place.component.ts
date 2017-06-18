import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { PlaceService } from '../place/place.service';
import { Place } from '../models/place.model';

@Component({
  selector: 'add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css'],
})

export class AddPlaceComponent implements OnInit{
    Id: number;
    place: AddPlaceComponent[];

constructor(private service: PlaceService) { }

ngOnInit() {}

onSubmit(place: Place, form: NgForm) {
    console.log(place);
    this.service.postPlace(place);
    form.reset();
  }

}
