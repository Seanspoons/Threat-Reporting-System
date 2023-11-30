export class MapLocation {
    location: string;
    lat: number;
    long: number;
    reportCount: number;


    constructor(location: string, lat: number, long: number) {
        this.location = location;
        this.lat = lat;
        this.long = long;
        this.reportCount = 1;
    }
}