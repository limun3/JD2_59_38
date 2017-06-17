import { Component, OnInit } from '@angular/core';
import {RoomReservationService} from '../room-reservation/roomreservation.service';

@Component({
  selector: 'app-roomreservation',
  templateUrl: './roomreservation.component.html',
  styleUrls: ['./roomreservation.component.css'],
  providers: [RoomReservationService]
})

export class RoomReservationComponent implements OnInit{

    roomreservation: RoomReservationComponent[];

   constructor(private _service: RoomReservationService) { }

    ngOnInit() {
        this._service.GetRoomReservation().subscribe(
      (prod: any) => {this.roomreservation = prod; console.log(this.roomreservation)},//You can set the type to Product.
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
    }

}