import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { RoomService } from '../room/room.service';
import { Room } from '../models/room.model';

@Component({
  selector: 'delete-room',
  templateUrl: './delete-room.component.html',
  styleUrls: ['./delete-room.component.css'],
})

export class DeleteRoomComponent implements OnInit{
    Id: number;

constructor(private service: RoomService) { }

ngOnInit() {}

deleteRoom(id: number): void
  {
    this.service.remove(id);
    // alert(id);
  }
}
