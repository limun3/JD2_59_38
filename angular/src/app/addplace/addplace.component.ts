import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { PlaceService } from '../place/place.service';
import { Place } from '../models/place.model';

@Component({
  selector: 'app-addplace',
  templateUrl: './addplace.component.html',
  styleUrls: ['./addplace.component.css'],
})

export class AddPlace implements OnInit{
    Id: number;
    place: AddPlace[];

constructor(private service: PlaceService) { }

ngOnInit() {}

// onSubmit(country: Country, form: NgForm) {
//     console.log(country);
//     this.service.create(country);
//   }

}
