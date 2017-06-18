import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { RegionService } from '../region/region.service';
import { Region } from '../models/region.model';

@Component({
  selector: 'add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css'],
})

export class AddRegionComponent implements OnInit{
    Id: number;
    region: AddRegionComponent[];

constructor(private service: RegionService) { }

ngOnInit() {}

onSubmit(region: Region, form: NgForm) {
  alert("onSubmit: " + region.id + " " +region.name + " " + region.country);
    console.log(region);
    this.service.PostRegion(region);
    form.reset();
  }

}
