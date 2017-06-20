import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { RegionService } from '../region/region.service';
import { Region } from '../models/region.model';

@Component({
  selector: 'delete-region',
  templateUrl: './delete-region.component.html',
  styleUrls: ['./delete-region.component.css'],
})

export class DeleteRegionComponent implements OnInit{
    Id: number;

constructor(private service: RegionService) { }

ngOnInit() {}

  deleteRegion(id: number): void
  {
    this.service.remove(id);
    // alert(id);
  }


}
