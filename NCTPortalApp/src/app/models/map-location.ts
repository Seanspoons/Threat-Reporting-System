export class MapLocation {
    id: string;
    location: string;
    lat: number;
    long: number;
    reportCount: number;


    constructor(location: string, lat: number, long: number) {
        this.id = idGenerator();
        this.location = location;
        this.lat = lat;
        this.long = long;
        this.reportCount = 1;
    }
}

function idGenerator(): string {
    const selectableCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    let id = '';
    for(let i = 0; i < 18; i++) {
        id += selectableCharacters.charAt(Math.floor(Math.random() * selectableCharacters.length));
    }
    return id;
}