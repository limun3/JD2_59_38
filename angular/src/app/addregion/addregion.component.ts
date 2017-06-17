import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { RegionService } from '../region/region.service';
import { Region } from '../models/region.model';

@Component({
  selector: 'app-addregion',
  templateUrl: './addregion.component.html',
  styleUrls: ['./addregion.component.css'],
})

export class AddRegion implements OnInit{
    Id: number;
    region: AddRegion[];

constructor(private service: RegionService) { }

ngOnInit() {}

// onSubmit(country: Country, form: NgForm) {
//     console.log(country);
//     this.service.create(country);
//   }

}
