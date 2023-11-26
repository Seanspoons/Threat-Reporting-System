import { Component, OnInit } from '@angular/core';
import { NuisanceReport } from 'src/app/models/nuisance-report';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent {

  //reports: NuisanceReport[];
  reports;
  query: string;

  constructor() {
    this.query='';
    let report1 = new NuisanceReport(new Person("John", "604-817-8817"), "Port Coquitlam");
    let report2 = new NuisanceReport(new Person("Alexandra", "778-457-4545"), "Coquitlam");
    let report3 = new NuisanceReport(new Person("Darren", "604-125-5432"), "New Westminster");
    this.reports = [report1, report2, report3];
  }

  onReportDelete(event:{reportID:string}) {
    let deleteReportID = event.reportID;
    this.reports = this.reports.filter((r:{id:string})=> r.id != deleteReportID)
  }
}
