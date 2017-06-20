import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
// import { RoomService } from '../room/room.service';
// import { Room } from '../models/room.model';

@Component({
  selector: 'buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})

export class ButtonsComponent implements OnInit{
    Id: number;
    //room: AddRoomComponent[];

//constructor(private service: RoomService) { }
constructor(){}

ngOnInit() {}

// onSubmit(room: Room, form: NgForm) {
//     console.log(room);
//     this.service.postRoom(room);
//     form.reset();
//   }
// deleteRoom(id: number): void
//   {
//     this.service.remove(id);
//     alert(id);
//   }
}
