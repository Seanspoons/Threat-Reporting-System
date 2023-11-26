import { Time } from "@angular/common";
import { Person } from './person';

export class NuisanceReport {
    id: string;
    reporter: Person;
    location: string;
    date: Date;
    status: boolean; // true means open; false means closed


    constructor(reporter: Person, location: string) {
        this.id = idGenerator();
        this.reporter = reporter;
        this.location = location;
        this.date = new Date();
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