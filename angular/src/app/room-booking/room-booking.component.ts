import { Component, OnInit } from '@angular/core';
import {RoomService} from '../room/room.service';
import { Room } from '../models/room.model';
import { NgForm } from "@angular/forms";
import { RoomReservation } from '../models/room-reservation.model'
import { RoomReservationService } from '../room-reservation/roomreservation.service'

@Component({
  selector: 'room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css'],
  providers: [RoomService]
})

export class RoomBookingComponent implements OnInit{

    room: RoomBookingComponent[];
    reservation: RoomReservation[];

   constructor(private _service: RoomReservationService) { }

    ngOnInit() {
  }

  onSubmit(reservation: RoomReservation, form: NgForm) {
    console.log(reservation);
    //this._service.postReservation(reservation);
    // alert("bookRoom");
    form.reset();
  }

}