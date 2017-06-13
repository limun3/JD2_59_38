import {Region} from './region.model';

export class Place{
    constructor(
        public id: number,
        public name: string,
        public region: Region
    ){}
}