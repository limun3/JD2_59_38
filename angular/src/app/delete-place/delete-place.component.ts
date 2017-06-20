
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { PlaceService } from '../place/place.service';
import { Place } from '../models/place.model';

@Component({
  selector: 'delete-place',
  templateUrl: './delete-place.component.html',
  styleUrls: ['./delete-place.component.css'],
})

export class DeletePlaceComponent implements OnInit{
    Id: number;

constructor(private service: PlaceService) { }

ngOnInit() {}

deletePlace(id: number): void
  {
    this.service.remove(id);
    // alert(id);
  }
}
