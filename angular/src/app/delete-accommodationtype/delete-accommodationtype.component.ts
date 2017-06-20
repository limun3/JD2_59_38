import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AccommodationTypeService } from '../accommodation-type/accommodationtype.service';
import { AccommodationType } from '../accommodation-type/accommodationtype.model';

@Component({
  selector: 'delete-accommodationtype',
  templateUrl: './delete-accommodationtype.component.html',
  styleUrls: ['./delete-accommodationtype.component.css'],
})

export class DeleteAccommodationTypeComponent implements OnInit{
    Id: number;

constructor(private service: AccommodationTypeService) { }

ngOnInit() {}

  deleteAccomType(id: number): void
  {
    this.service.remove(id);
    // alert(id);
  }
}
