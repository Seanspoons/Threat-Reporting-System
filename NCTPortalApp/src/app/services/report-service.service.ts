import { ChangeDetectorRef, Injectable, OnInit } from '@angular/core';
import { NuisanceReport } from '../models/nuisance-report';
import { Person } from '../models/person';
import { HttpClient } from '@angular/common/http';
import { LocationService } from './location.service';
import { MapLocation } from '../models/map-location';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService{

  reports: NuisanceReport[];
  locations: any[];
  public report!: NuisanceReport;
  firstLoad = true;
  justDeleted = false;
  justEdited = false;

  constructor(private http: HttpClient, private locationService: LocationService, private router: Router) {
    this.reports = [];
    this.locations = [];
  }

  get() {
    if(this.firstLoad && this.reports.length !== 1) {
      this.http.get('https://272.selfip.net/apps/22m6j5mz3y/collections/reports/documents/')
      .subscribe((data)=>{
        var rows = <Array<any>>data;
        for(let i = 0; i < rows.length; i++) {
          let newReport = new NuisanceReport(new Person(rows[i].data.reporter.name, rows[i].data.reporter.phoneNumber), rows[i].data.baddieName, rows[i].data.location, rows[i].data.imgURL, rows[i].data.description);
          newReport.id = rows[i].data.id;
          newReport.date = rows[i].data.date;
          newReport.status = rows[i].data.status;
          this.reports.push(newReport);
          this.getLocations();
          this.firstLoad = false;
        }
      })
    } else {
      
    } 
  }
  
  deleteAdd(editReportID: string, newReportObject: NuisanceReport) {
    const url = `https://272.selfip.net/apps/22m6j5mz3y/collections/reports/documents//${editReportID}`;
    this.http.delete(url).subscribe(
      (data: any) => {
        this.reports = this.reports.filter(r=> r.id !== editReportID);
        this.getLocations();
        if(!this.justEdited) {
          this.justDeleted = true;
          this.router.navigate(['/rectangle-container']);
        } else {
          this.add(newReportObject);
        }
      }
    );
  }

  edit(editReportID: string, newReportObject: NuisanceReport) { 
    // Have to use delete and re-add as "Put" is not allowed in reports collection
    this.justEdited = true;
    this.deleteAdd(editReportID, newReportObject);
  }

  add(newReport: NuisanceReport) {
    this.http.post<NuisanceReport>('https://272.selfip.net/apps/22m6j5mz3y/collections/reports/documents/', {
      "key": newReport.id,
      "data": newReport
    }).subscribe(
      (data: any) => {
        this.reports.push(newReport);
        this.getLocations();
        if(!this.justEdited) {
          this.firstLoad = false;
        } else { // Maybe don't need this?
          this.justEdited = false;
        }
      }
    );
  }

  delete(deleteReportID: string) {
    console.log("Delete called with this id: " + deleteReportID);
    const url = `https://272.selfip.net/apps/22m6j5mz3y/collections/reports/documents//${deleteReportID}`;
    this.http.delete(url).subscribe(
      (data: any) => {
        this.reports = this.reports.filter(r=> r.id !== deleteReportID);
        this.getLocations();
        this.justDeleted = true;
        if(!this.justEdited) {
          this.router.navigate(['/rectangle-container']);
        } else {
          this.justEdited = false;
        }
      }
    );
  }

  getLocations() {
    const locationCount: { [key: string]: { lat: number, long: number, count: number } } = {};
  
    this.reports.forEach(report => {
      const locationKey = report.location.location;
      if (!locationCount[locationKey]) {
        locationCount[locationKey] = { lat: report.location.lat, long: report.location.long, count: 1 };
      } else {
        locationCount[locationKey].count++;
      }
    });
  
    const newLocations: MapLocation[] = [];
  
    for (const locationKey in locationCount) {
      if (locationCount.hasOwnProperty(locationKey)) {
        const uniqueLocation = new MapLocation(
          locationKey,
          locationCount[locationKey].lat,
          locationCount[locationKey].long
        );
        uniqueLocation.reportCount = locationCount[locationKey].count;
  
        newLocations.push(uniqueLocation);
      }
    }
  
    this.locations = newLocations;
    return newLocations;
  }
  
}
