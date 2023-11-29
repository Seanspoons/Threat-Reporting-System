import { ChangeDetectorRef, Injectable, OnInit } from '@angular/core';
import { NuisanceReport } from '../models/nuisance-report';
import { Person } from '../models/person';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService{

  reports: NuisanceReport[];
  firstLoad: boolean;

  constructor(private http: HttpClient) {
    this.reports = [];
    this.firstLoad = true;
  }

  get() { // I think it is going through this everytime there is an addition too. Which ends up creating too many elements in the table. Possibly look at how I might be pushing onto array in the add already
    if(this.firstLoad) {
      this.http.get('https://272.selfip.net/apps/22m6j5mz3y/collections/reports/documents/')
      .subscribe((data)=>{
        var rows = <Array<any>>data;
        for(let i = 0; i < rows.length; i++) {
          this.reports.push(new NuisanceReport(new Person(rows[i].data.reporter.name, rows[i].data.reporter.phoneNumber), rows[i].data.baddieName, rows[i].data.location, rows[i].data.imgURL, rows[i].data.description));
          this.firstLoad = false;
        }
      })
    } else {
      
    }
    
  }

  add(newReport: NuisanceReport) {
    this.http.post<NuisanceReport>('https://272.selfip.net/apps/22m6j5mz3y/collections/reports/documents/', {
      "key": newReport.id,
      "data": newReport
    }).subscribe(
      (data: any) => {
        this.reports.push(newReport);
      }
    );
  }

  delete(deleteReportID: string) {
    console.log("Here is the id for deletion: " + deleteReportID);
    const url = `https://272.selfip.net/apps/22m6j5mz3y/collections/reports/documents//${deleteReportID}`;
    this.http.delete(url).subscribe(
      (data: any) => {
        this.reports = this.reports.filter(r=> r.id !== deleteReportID);
        // Need to detect changes
      }
    );
  }

}
