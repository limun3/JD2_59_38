import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AccommodationTypeService } from '../accommodation-type/accommodationtype.service';
import { AccommodationType } from '../accommodation-type/accommodationtype.model';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'edit-accommodationtype',
  templateUrl: './edit-accommodationtype.component.html',
  styleUrls: ['./edit-accommodationtype.component.css']
})
export class AccommodationTypeEditComponent implements OnInit{
  Id: number = -1;
  loading: boolean = false;
  actype: AccommodationType;
  Name: string = "";

    accommodationtype: AccommodationTypeEditComponent[];

   constructor( private router: Router, 
    private activatedRoute: ActivatedRoute,
    private service: AccommodationTypeService, private _service: AccommodationTypeService) { }

    ngOnInit() {
        this._service.GetAccommodationTypes().subscribe(
      (prod: any) => {this.accommodationtype = prod; console.log(this.accommodationtype)},//You can set the type to Product.
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
  }
  
  updateAcType(ac: AccommodationType, form: NgForm)
  {
    // alert ("ID: " + ac.Id + ", name: " + ac.Name);
    this._service.updateAccomodationType(ac.Id, ac);
    this.router.navigate(['/accommodationtypes']);
  }
}
