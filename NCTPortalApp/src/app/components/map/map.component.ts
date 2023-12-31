import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatLegacyDialog as MatDialog, MatLegacyDialogConfig as MatDialogConfig } from '@angular/material/legacy-dialog';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { MapLocation } from 'src/app/models/map-location';
import { LocationService } from 'src/app/services/location.service';
import { ReportServiceService } from 'src/app/services/report-service.service';
import { RouteStateService } from 'src/app/services/route-state.service';
import { DuplicateErrorComponent } from '../duplicate-error/duplicate-error.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  form: FormGroup;
  map: L.Map | undefined;
  locations: any[];
  currentNames: any[];
  temporaryMarker: L.Marker | undefined;
  markerAdded = false;

  constructor(private routeService: RouteStateService, private router: Router, private locationService: LocationService, private reportService: ReportServiceService, private dialog: MatDialog) { 
    this.locationService.get();
    this.locations = [];
    this.currentNames = [];
    let formControls = {
      newLocation: new FormControl('', [Validators.required]) // Need to deal with duplicates
    }
    this.form = new FormGroup(formControls)
  }

  isDup(newLocation: string): boolean {
    if(this.currentNames.includes(newLocation)) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit(): void {
    this.locations = this.reportService.locations;
    
    for(const location of this.locations) {
      this.currentNames.push(location.location);
    }

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
    var markerIcon = L.icon({
      iconUrl: '../assets/img/marker-icon.png',
      iconSize: [17,28],
      iconAnchor: [8.5,28],
      popupAnchor: [0,-28]
    });

    if(this.map) {
      this.locations.forEach(location => {
        L.marker([location.lat, location.long], {icon: markerIcon}).addTo(this.map!).bindPopup(`<b>${location.location}</b> <br> ${location.reportCount} nuisance reports`);
      })
    }
  }

  onCloseMap() {
    if(this.routeService.isOnAddFormMap) {
      this.router.navigate(['report-add-form']);
    } else {
      this.router.navigate(['/table']);
    }
  }

  onAddLocation() {
    if (this.form.valid) {
      if(this.isDup(this.form.get('newLocation')!.value)) {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        const dialogRef = this.dialog.open(DuplicateErrorComponent, dialogConfig);
      } else {
        let newLocationName = this.form.get('newLocation')!.value;
        let coords = this.getTemporaryMarkerCoordinates();
        let lat: number;
        let long: number;
        if(coords) {
          lat = coords[0];
          long = coords[1];
          let newLocation = new MapLocation(newLocationName, lat, long);
          this.reportService.locations.push(newLocation);
          this.locationService.addingMarker = false;
        }
        this.locationService.firstAdd = false;
        this.router.navigate(['report-add-form']);
      }
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
    var markerIcon = L.icon({
      iconUrl: '../assets/img/marker-icon.png',
      iconSize: [25,41],
      iconAnchor: [12.5,41],
      popupAnchor: [0,-41]
    });

    if (this.temporaryMarker) {
      this.map?.removeLayer(this.temporaryMarker);
    }

    this.temporaryMarker = L.marker([event.latlng.lat, event.latlng.lng], {icon: markerIcon})
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
