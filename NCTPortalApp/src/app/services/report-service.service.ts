import { Injectable } from '@angular/core';
import { NuisanceReport } from '../models/nuisance-report';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {
  reports: NuisanceReport[];

  constructor() {
    let report1 = new NuisanceReport(new Person("John", "604-817-8817"), "Port Coquitlam");
    let report2 = new NuisanceReport(new Person("Alexandra", "778-457-4545"), "Coquitlam");
    let report3 = new NuisanceReport(new Person("Darren", "604-125-5432"), "New Westminster");
    this.reports = [report1, report2, report3];
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