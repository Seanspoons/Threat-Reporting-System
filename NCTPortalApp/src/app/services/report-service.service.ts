import { Injectable, OnInit } from '@angular/core';
import { NuisanceReport } from '../models/nuisance-report';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService implements OnInit {

  reports: NuisanceReport[];

  constructor() {
    this.reports = [new NuisanceReport(new Person("John", "604-506-0871"), "Bad Wolf", "Metrotown", "Nothing")];
  }

  ngOnInit(): void {
    // read from database and update reports =
  }

  get() {
    return this.reports;
  }

  add(newReport: NuisanceReport) {
    this.reports.push(newReport);

    console.log(this.reports);
  }

  delete(deleteReportID: string) {
    this.reports = this.reports.filter(r=> r.id !== deleteReportID);
    return this.reports;
  }

}
