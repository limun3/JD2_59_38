import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { RoomService } from '../room/room.service';
import { Room } from '../models/room.model';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class RoomEditComponent implements OnInit{
  Id: number = -1;
  loading: boolean = false;
  room: Room;
  Name: string = "";

    rooms: RoomEditComponent[];

   constructor( private router: Router, 
    private activatedRoute: ActivatedRoute,
    private _service: RoomService) { }

    ngOnInit() {
        this._service.GetRoom().subscribe(
      (prod: any) => {this.rooms = prod; console.log(this.rooms)},//You can set the type to Product.
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
    }
  
  updateRoom(room: Room, form: NgForm)
  {
    // alert ("ID: " + room.id + ", name: " + room.roomNumber);
    this._service.updateRooms(room.id, room);
    this.router.navigate(['/room']);
  }
}
