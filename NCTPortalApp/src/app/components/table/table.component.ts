import { Component, Input, OnInit } from '@angular/core';
import { NuisanceReport } from 'src/app/models/nuisance-report';
import { ReportServiceService } from 'src/app/services/report-service.service';
import { RectangleContainerComponent } from '../rectangle-container/rectangle-container.component';
import { Router } from '@angular/router';
import { RouteStateService } from 'src/app/services/route-state.service';
import { MoreInfoComponent } from '../more-info/more-info.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  reports: NuisanceReport[];
  query: string;

  constructor(
      private reportService: ReportServiceService,
      private routeService: RouteStateService,
      private loginService: LoginService,
      private router: Router
      ) {
    this.query='';
    this.reports = [];
    this.reportService.get();
  }

  ngOnInit(): void {
    this.reports = this.reportService.reports;
  }

  onReportMenu(reportID: string) {
    if(this.routeService.isOnRectangleContainer) {
      this.loginService.wasOnRectangleContainer = true;
    } else if(this.routeService.isOnRectangleMap) {
      this.loginService.wasOnRectangleMap = true;
    } else if(this.routeService.isOnRectangleMoreInfo) {
      this.loginService.wasOnRectangleMoreInfo = true;
    } else if(this.routeService.isOnThreeComponents) {
      this.loginService.wasOnThreeComponents = true;
    }

    this.router.navigate(['/verification']);
    this.loginService.reportID = reportID;
  }

  onMoreInfo(reportID: string) {
    const foundReport = this.reportService.reports.find(report => report.id === reportID);
    if(foundReport) {
      this.reportService.report = foundReport;
      if(this.routeService.isOnRectangleMoreInfo) {
        console.log("Error: More Info is already open");
        // Error already open
      } else {
        if(this.routeService.isOnRectangleMap) {
          this.router.navigate(['/three-components']);
        } else if(this.routeService.isOnRectangleContainer) {
          this.router.navigate(['/rectangle-more-info']);
        }
      } 
    }
     
  }

}
