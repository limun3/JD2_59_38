import { Component, OnInit } from '@angular/core';
import {CountryService} from '../country/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [CountryService]
})

export class CountryComponent implements OnInit{

    country: CountryComponent[];

   constructor(private _service: CountryService) { }

    ngOnInit() {
        this._service.GetCountries().subscribe(
      (prod: any) => {this.country = prod; console.log(this.country)},//You can set the type to Product.
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
    }

}