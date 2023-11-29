import { Component, Input, OnInit } from '@angular/core';
import { NuisanceReport } from 'src/app/models/nuisance-report';
import { ReportServiceService } from 'src/app/services/report-service.service';
import { RectangleContainerComponent } from '../rectangle-container/rectangle-container.component';
import { Router } from '@angular/router';
import { RouteStateService } from 'src/app/services/route-state.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  reports: NuisanceReport[];
  query: string;

  constructor(private reportService: ReportServiceService, private routeService: RouteStateService, private router: Router, private rectangleContainer: RectangleContainerComponent) {
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
