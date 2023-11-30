import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MapLocation } from '../models/map-location';
import * as L from 'leaflet';
import { LeafletMouseEvent } from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class LocationService{

  locations: MapLocation[];
  firstLoad = true;
  addingMarker = false;

  constructor(private http: HttpClient) {
    this.locations = [];
  }

  get() {
    if(this.firstLoad) {
      this.http.get('https://272.selfip.net/apps/22m6j5mz3y/collections/locations/documents/')
      .subscribe((data)=>{
        var rows = <Array<any>>data;
        for(let i = 0; i < rows.length; i++) {
          this.locations.push(new MapLocation(rows[i].data.location, rows[i].data.lat, rows[i].data.long));
          this.firstLoad = false;
        }
      })
    } else {
      
    }
    
  }

  add(newLocation: MapLocation) {
    this.http.post<MapLocation>('https://272.selfip.net/apps/22m6j5mz3y/collections/locations/documents/', {
      "key": newLocation.location,
      "data": newLocation
    }).subscribe(
      (data: any) => {
        this.locations.push(newLocation);
      }
    );
  }
}
