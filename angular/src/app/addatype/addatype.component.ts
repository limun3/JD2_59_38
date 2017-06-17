import { Component, OnInit } from '@angular/core';

// import {AddATypeService} from '../addatype/addatype.service';

@Component({
  selector: 'app-addatype',
  templateUrl: './addatype.component.html',
  styleUrls: ['./addatype.component.css'],
//   providers: [AddATypeService]
})

export class AddATypeComponent implements OnInit{

    accommodationtype: AddATypeComponent[];

//    constructor(private _service: AddATypeService) { }
constructor(){}

    ngOnInit() {
    //     this._service.GetAccommodationTypes().subscribe(
    //   (prod: any) => {this.accommodationtype = prod; console.log(this.accommodationtype)},//You can set the type to Product.
    //   error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    //);
}


    //this.Username = "";
    //this.Password = "";
  


}