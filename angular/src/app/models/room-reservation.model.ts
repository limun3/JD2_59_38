import { Room } from './room.model';
import { BAIdentityUser } from './baidentity-user.model'

export class RoomReservation{
    constructor(
        public id: number,
        public startDate: Date,
        public endDate: Date,
        public timeStamp: Date,
        public room: Room,
        public user: BAIdentityUser
    ){}
}