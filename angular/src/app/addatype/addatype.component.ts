import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AccommodationTypeService } from '../accommodation-type/accommodationtype.service';
import { AccommodationType } from '../accommodation-type/accommodationtype.model';

@Component({
  selector: 'app-addatype',
  templateUrl: './addatype.component.html',
  styleUrls: ['./addatype.component.css'],
//   providers: [AddATypeService]
})

export class AddATypeComponent implements OnInit{
    Id: number;
    accommodationtype: AddATypeComponent[];

constructor(private service: AccommodationTypeService) { }

ngOnInit() {}

onSubmit(accommodationtype: AccommodationType, form: NgForm) {
    console.log(accommodationtype);
    this.service.create(accommodationtype);
  }

}
