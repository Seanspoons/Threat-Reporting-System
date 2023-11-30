import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { MapLocation } from 'src/app/models/map-location';
import { LocationService } from 'src/app/services/location.service';
import { RouteStateService } from 'src/app/services/route-state.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: L.Map | undefined;
  locations: MapLocation[];
  temporaryMarker: L.Marker | undefined;

  constructor(private routeService: RouteStateService, private router: Router, private locationService: LocationService) { 
    this.locationService.get();
    this.locations = [];
  }

  ngOnInit(): void {
    this.locations = this.locationService.locations;
    this.initMap();
    this.addMarkers();
    if(this.locationService.addingMarker) {
      this.map?.on('click', this.addTemporaryMarker.bind(this));
    }
  }

  initMap() {
    this.map = L.map('map').setView([49.2167, -122.7036], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  addMarkers() {
    if(this.map) {
      this.locations.forEach(location => {
        L.marker([location.lat, location.long]).addTo(this.map!).bindPopup(`<b>${location.location}</b> <br> ${location.reportCount} nuisance reports`);
      })
    }
  }

  onCloseMap() {
    if(this.routeService.isOnThreeComponents) {
      this.router.navigate(['/rectangle-more-info']);
    } else if(this.routeService.isOnAddFormMap) {
      this.router.navigate(['report-add-form']);
    } else {
      this.router.navigate(['rectangle-container']);
    }
  }

  onAddLocation() {
    let coords = this.getTemporaryMarkerCoordinates();
    let lat: number;
    let long: number;
    if(coords) {
      lat = coords[0];
      long = coords[1];
      console.log("Lat is: " + lat + " and Long is: " + long);
      // It is working. Just need to get name and then can create a new location object for locationService and push onto locations
    }
    
  }

  checkButtonState(): boolean {
    if(this.routeService.isOnAddFormMap) {
      return true;
    } else {
      return false;
    }
  }

  addTemporaryMarker(event: L.LeafletMouseEvent) {
    if (this.temporaryMarker) {
      this.map?.removeLayer(this.temporaryMarker);
    }

    this.temporaryMarker = L.marker([event.latlng.lat, event.latlng.lng])
      .addTo(this.map!)
      .bindPopup('New Location');
  }

  getTemporaryMarkerCoordinates(): [number, number] | undefined {
    if (this.temporaryMarker) {
      const latlng = this.temporaryMarker.getLatLng();
      return [latlng.lat, latlng.lng];
    }
    return undefined;
  }

  resetAddingMarker() {
    this.locationService.addingMarker = false;

    this.map?.off('click', this.addTemporaryMarker.bind(this));
  }
}
