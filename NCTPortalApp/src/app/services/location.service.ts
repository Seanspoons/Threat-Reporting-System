import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MapLocation } from '../models/map-location';

@Injectable({
  providedIn: 'root'
})
export class LocationService{

  locations: MapLocation[];
  firstLoad = true;
  addingMarker = false;
  firstAdd = true;

  constructor(private http: HttpClient) { //, private reportService: ReportServiceService
    this.locations = [];
  }

  get() {
    if(this.firstLoad) {
      this.http.get('https://272.selfip.net/apps/22m6j5mz3y/collections/locations/documents/')
      .subscribe((data)=>{
        var rows = <Array<any>>data;
        for(let i = 0; i < rows.length; i++) {
          let locationID = rows[i].data.id;
          let newLocation = new MapLocation(rows[i].data.location, rows[i].data.lat, rows[i].data.long);
          newLocation.id = locationID;
          this.locations.push(newLocation);
          this.firstLoad = false;
        }
      })
    } else {
    }
  }

  add(newLocation: MapLocation) {
    this.firstAdd = false;
    this.http.post<MapLocation>('https://272.selfip.net/apps/22m6j5mz3y/collections/locations/documents/', {
      "key": newLocation.id,
      "data": newLocation
    }).subscribe(
      (data: any) => {
        this.locations.push(newLocation);
      }
    );
  }

  delete(deleteLocationID: string) {
    const url = `https://272.selfip.net/apps/22m6j5mz3y/collections/locations/documents//${deleteLocationID}`;
    this.http.delete(url).subscribe(
      (data: any) => {
        this.locations = this.locations.filter(l=> l.id !== deleteLocationID);
      }
    );
  }
}
