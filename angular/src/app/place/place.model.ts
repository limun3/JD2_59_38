export class Place {
    Id: number;
    Name: string;
    RegionId: number;

    constructor(Id?: number, Name?: string,  RegionId?: number) { 
        this.Id = Id;
        this.Name = Name;
        this.RegionId = RegionId;
    }
}