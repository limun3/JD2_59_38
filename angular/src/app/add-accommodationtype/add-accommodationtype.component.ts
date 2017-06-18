import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AccommodationTypeService } from '../accommodation-type/accommodationtype.service';
import { AccommodationType } from '../accommodation-type/accommodationtype.model';

@Component({
  selector: 'add-accommodationtype',
  templateUrl: './add-accommodationtype.component.html',
  styleUrls: ['./add-accommodationtype.component.css'],
//   providers: [AddATypeService]
})

export class AddATypeComponent implements OnInit{
    Id: number;
    accommodationtype: AddATypeComponent[];

constructor(private service: AccommodationTypeService) { }

ngOnInit() {}

onSubmit(accommodationtype: AccommodationType, form: NgForm) {
    console.log(accommodationtype);
    this.service.postAccomType(accommodationtype);
    form.reset();
  }

  deleteAccomType(id: number): void
  {
    this.service.remove(id);
    alert(id);
  }
}
