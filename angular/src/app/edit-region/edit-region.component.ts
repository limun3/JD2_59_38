import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { RegionService } from '../region/region.service';
import { Region } from '../models/region.model';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'edit-region',
  templateUrl: './edit-region.component.html',
  styleUrls: ['./edit-region.component.css'],
})
export class RegionEditComponent implements OnInit{
  Id: number = -1;
  loading: boolean = false;
  region: Region;
  Name: string = "";

    regions: RegionEditComponent[];

   constructor( private router: Router, 
    private activatedRoute: ActivatedRoute,
    private _service: RegionService) { }

    ngOnInit() {
        this._service.GetRegions().subscribe(
      (prod: any) => {this.regions = prod; console.log(this.regions)},//You can set the type to Product.
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
    }
  
  updateRegion(region: Region, form: NgForm)
  {
    // alert ("ID: " + region.id + ", name: " + region.name);
    this._service.updateRegions(region.id, region);
    this.router.navigate(['/region']);
  }
}
