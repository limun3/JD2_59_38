import { Component, OnInit } from '@angular/core';
import {RoomService} from '../room/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [RoomService]
})

export class RoomComponent implements OnInit{

    room: RoomComponent[];

   constructor(private _service: RoomService) { }

    ngOnInit() {
        this._service.GetRoom().subscribe(
      (prod: any) => {this.room = prod; console.log(this.room)},//You can set the type to Product.
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
    }

}