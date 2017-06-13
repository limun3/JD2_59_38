import {Country} from './country.model';

export class Region{
    constructor(
        public id: number,
        public name: string,
        public country: Country
    ){}
}