import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
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

  constructor(private reportService: ReportServiceService, private appComponent: AppComponent) {
    this.query='';
    this.reports = [];
    this.reportService.get();
  }

  ngOnInit(): void {
    this.reports = this.reportService.reports;
  }

  onReportDelete(reportID: string) {
    // Need to authenticate first
    // For now just allow delete from button click
    this.reportService.delete(reportID);
  }

  onMoreInfo(reportID: string) {
    if(this.appComponent.showMoreInfo) {
      // Error more info already open
    } else {
      this.appComponent.toggleMoreInfo();
    }
  }

}
