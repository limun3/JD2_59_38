import { Accommodation } from './accommodation.model';
import { BAIdentityUser } from './baidentity-user.model';

export class Comment {
  constructor(
    public id: number,
    public grade: number,
    public text: string,
    public user: BAIdentityUser,
    public accommodation: Accommodation){}
}