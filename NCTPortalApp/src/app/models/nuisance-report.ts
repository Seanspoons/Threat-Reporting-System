import { Person } from './person';

export class NuisanceReport {
    id: string;
    reporter: Person;
    baddieName: string;
    location: string;
    imgURL: string;
    date: Date;
    description: string;
    status: boolean; // true means open; false means closed


    constructor(reporter: Person, baddieName: string, location: string, imgURL: string, description: string) {
        this.id = idGenerator();
        this.reporter = reporter;
        this.baddieName = baddieName
        this.location = location;
        this.imgURL = imgURL;
        this.date = new Date();
        this.description = description;
        this.status = true;
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