import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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

  form: FormGroup;
  map: L.Map | undefined;
  locations: MapLocation[];
  temporaryMarker: L.Marker | undefined;
  markerAdded = false;

  constructor(private routeService: RouteStateService, private router: Router, private locationService: LocationService) { 
    this.locationService.get();
    this.locations = [];
    let formControls = {
      newLocation: new FormControl('', [Validators.required, Validators.minLength(4)]) // Need to deal with duplicates
    }
    this.form = new FormGroup(formControls)
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
    if (this.form.valid) {
      let newLocationName = this.form.get('newLocation')!.value;
      let coords = this.getTemporaryMarkerCoordinates();
      let lat: number;
      let long: number;
      if(coords) {
        lat = coords[0];
        long = coords[1];
        let newLocation = new MapLocation(newLocationName, lat, long);
        console.log("Lat: + " + lat + " Long: " + long + " and name: " + newLocationName);
        this.locationService.add(newLocation);
      }
      this.router.navigate(['report-add-form']);
    }
  }

  isInvalid() {
    if(!this.markerAdded || !this.form.valid) {
      return true;
    } else {
      return false
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
      this.markerAdded = true;
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
