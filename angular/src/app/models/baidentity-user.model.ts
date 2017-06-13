import { Accommodation } from './accommodation.model'

export class BAIdentityUser {
  constructor(
    public id: string,
    public email: string,
    public password: string,
    public username: string
    ){}
}