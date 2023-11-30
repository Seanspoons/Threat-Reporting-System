import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { MapLocation } from 'src/app/models/map-location';
import { NuisanceReport } from 'src/app/models/nuisance-report';
import { Person } from 'src/app/models/person';
import { LocationService } from 'src/app/services/location.service';
import { ReportServiceService } from 'src/app/services/report-service.service';
import { RouteStateService } from 'src/app/services/route-state.service';

@Component({
  selector: 'app-report-add-form',
  templateUrl: './report-add-form.component.html',
  styleUrls: ['./report-add-form.component.css']
})
export class ReportAddFormComponent implements OnInit {

  form: FormGroup;
  locations: MapLocation[];

  constructor(private reportService: ReportServiceService, private routeService: RouteStateService, private router: Router, private locationService: LocationService) {
    this.locationService.get();
    this.locations = [];
    let formControls = {
      reporter: new FormControl('', [Validators.required, Validators.minLength(4)]),
      phoneNumber: new FormControl('', Validators.required),
      baddieName: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      imgURL: new FormControl(''),
      description: new FormControl('')
    }
    this.form = new FormGroup(formControls)
  }

  ngOnInit(): void {
    this.locations = this.locationService.locations;
  }

  checkAddStatus(): boolean {
    if(this.routeService.isOnAddFormMap || !this.locationService.firstAdd) {
      return true;
    } else {
      return false;
    }
  }


  onSubmit() {
    if (this.form.valid) {
      let targetLocation = this.form.get('location')!.value;
      const foundLocation = this.locations.find(location => location.location === targetLocation);

      let newLocation = new MapLocation(foundLocation!.location, foundLocation!.lat, foundLocation!.long);
      let newReporter = new Person(this.form.get('reporter')!.value, this.form.get('phoneNumber')!.value);
      let newReport = new NuisanceReport(newReporter, this.form.get('baddieName')!.value , newLocation, this.form.get('imgURL')!.value, this.form.get('description')!.value);
  
      console.log("adding report");
      this.reportService.add(newReport);
      this.locationService.firstAdd = true;
    }
  }

  onAddNewLocation() {
    if(this.routeService.isOnAddFormMap) {
      // Error map is already open
      // Tell user to use the open map
    } else {
      this.router.navigate(['add-form-map']);
      this.locationService.addingMarker = true;
    }
  }
}
