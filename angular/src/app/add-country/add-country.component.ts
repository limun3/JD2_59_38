import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CountryService } from '../country/country.service';
import { Country } from '../models/country.model';

@Component({
  selector: 'add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css'],
})

export class AddCountry implements OnInit{
    Id: number;
    country: AddCountry[];

constructor(private service: CountryService) { }

ngOnInit() {}

onSubmit(country: Country, form: NgForm) {
    console.log(country);
    this.service.postCountry(country);
    form.reset();
  }

}
