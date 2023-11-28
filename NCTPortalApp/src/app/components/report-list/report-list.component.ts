import { Component, OnInit } from '@angular/core';
import { NuisanceReport } from 'src/app/models/nuisance-report';
import { ReportServiceService } from 'src/app/services/report-service.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  reports: NuisanceReport[];
  //reports;
  query: string;

  constructor(private reportService: ReportServiceService) {
    // call to the backend
    this.query='';
    this.reports = [];
  }

  ngOnInit(): void { // Will be getting from the database
    this.reports = this.reportService.get();
  }

  onReportDelete(event:{reportID:string}) {
    let deleteReportID = event.reportID;
    //this.reports = this.reports.filter((r:{id:string})=> r.id != deleteReportID)
    //console.log(`report ${event.reportID} just got deleted`);
    this.reports = this.reportService.delete(deleteReportID);
  }
}
