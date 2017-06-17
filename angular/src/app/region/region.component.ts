import { Component, OnInit } from '@angular/core';
import {RegionService} from '../region/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
  providers: [RegionService]
})

export class RegionComponent implements OnInit{

    region: RegionComponent[];

   constructor(private _service: RegionService) { }

    ngOnInit() {
        this._service.GetRegions().subscribe(
      (prod: any) => {this.region = prod; console.log(this.region)},//You can set the type to Product.
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
    }

}