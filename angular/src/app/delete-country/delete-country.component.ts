import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CountryService } from '../country/country.service';
import { Country } from '../models/country.model';

@Component({
  selector: 'delete-country',
  templateUrl: './delete-country.component.html',
  styleUrls: ['./delete-country.component.css'],
})

export class DeleteCountryComponent implements OnInit{
    Id: number;

constructor(private service: CountryService) { }

ngOnInit() {}

  deleteCountry(id: number): void
  {
    this.service.remove(id);
    // alert(id);
  }

}
