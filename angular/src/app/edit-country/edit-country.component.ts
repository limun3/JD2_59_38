import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { CountryService } from '../country/country.service';
import { Country } from '../models/country.model';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css'],
})
export class CountryEditComponent implements OnInit{
  Id: number = -1;
  loading: boolean = false;
  country: Country;
  Name: string = "";

    countrys: CountryEditComponent[];

   constructor( private router: Router, 
    private activatedRoute: ActivatedRoute,
    private _service: CountryService) { }

    ngOnInit() {
        this._service.GetCountries().subscribe(
      (prod: any) => {this.countrys = prod; console.log(this.countrys)},//You can set the type to Product.
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
  }
  
  updateCountry(country: Country, form: NgForm)
  {
    // alert ("ID: " + country.id + ", name: " + country.name);
    this._service.updateCountry(country.id, country);
    this.router.navigate(['/country']);
  }
}
