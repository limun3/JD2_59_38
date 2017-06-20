import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AccommodationService } from '../accommodation/accommodation.service';
import { Accommodation } from '../models/accommodation.model';

@Component({
  selector: 'delete-accommodation',
  templateUrl: './delete-accommodation.component.html',
  styleUrls: ['./delete-accommodation.component.css'],
})

export class DeleteAccommodationComponent implements OnInit{
    Id: number;

constructor(private service: AccommodationService) { }

ngOnInit() {}

   deleteAccommodation(id: number): void
  {
    this.service.remove(id);
    // alert(id);
  }
 }

