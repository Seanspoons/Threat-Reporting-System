import { Component, Input, OnInit } from '@angular/core';
import { NuisanceReport } from 'src/app/models/nuisance-report';
import { ReportServiceService } from 'src/app/services/report-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  reports: NuisanceReport[];
  query: string;

  constructor(private reportService: ReportServiceService) {
    this.query='';
    this.reports = [];
  }

  ngOnInit(): void {
    this.reportService.get();
    this.reports = this.reportService.reports;
  }

  onReportDelete(event:{reportID:string}) {
    let deleteReportID = event.reportID;
    this.reportService.delete(deleteReportID);
  }

}
