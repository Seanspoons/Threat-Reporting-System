import { Component, Input, OnInit } from '@angular/core';
import { NuisanceReport } from 'src/app/models/nuisance-report';
import { ReportServiceService } from 'src/app/services/report-service.service';
import { RectangleContainerComponent } from '../rectangle-container/rectangle-container.component';
import { Router } from '@angular/router';
import { RouteStateService } from 'src/app/services/route-state.service';
import { MoreInfoComponent } from '../more-info/more-info.component';
import { LoginService } from 'src/app/services/login.service';
import { SizingService } from 'src/app/services/sizing.service';

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
      private sizingService: SizingService,
      private router: Router
      ) {
    this.query='';
    this.reports = [];
    this.reportService.get();
  }

  ngOnInit(): void {
    this.reports = this.reportService.reports;
    let parentHeight = this.sizingService.contentContainerHeight;
    const scrollTableDiv = document.getElementById('scrollTableDiv');

    if(scrollTableDiv) {
      let newHeight = 0.5*parentHeight;
      scrollTableDiv.style.height = `${newHeight}px`;
    }

    this.sizingService.windowResized.subscribe(() => {
      let newParentHeight = this.sizingService.contentContainerHeight;
      if(scrollTableDiv) {
        let newHeight = 0.5*newParentHeight;
        scrollTableDiv.style.height = `${newHeight}px`;
      }
    });
  }

  getScrollParentHeight(): number {
    const scrollTableDiv = document.getElementById('scrollTableDiv');

    if(scrollTableDiv) {
      console.log("scroll table div is good");
      const scrollTableParent = scrollTableDiv.parentElement;

      if(scrollTableParent) {
        console.log("scroll table div's parent is good");
        const heightInPixels = scrollTableParent.offsetHeight;
        return heightInPixels;
      }
    }
    return 0;
  }

  sortByBaddieName():void {
    console.log("Sorting by baddie name");
    /*
    var baddieArray = this.reportService.sortBaddie();
    for(let i = 0; i < baddieArray.length; i++) {
      console.log("Name #" + i + ": " + baddieArray[i].baddieName);
    }
    */
    this.reports = this.reportService.sortBaddie();
  }

  sortByLocation(): void {
    console.log("Sorting by location");
    /*
    var locationArray = this.reportService.sortLocation();
    for(let i = 0; i < locationArray.length; i++) {
      console.log("Name #" + i + ": " + locationArray[i].location.location);
    }
    */
    this.reports = this.reportService.sortLocation();
  }

  sortByTime(): void {
    console.log("Sorting by time");
    /*
    var timeArray = this.reportService.sortTime();
    for(let i = 0; i < timeArray.length; i++) {
      console.log("Name #" + i + ": " + timeArray[i].baddieName);
    }
    */
    this.reports = this.reportService.sortTime();
  }

  sortByStatus(): void {
    console.log("Sorting by status");
    /*
    var statusArray = this.reportService.sortStatus();
    for(let i = 0; i < statusArray.length; i++) {
      console.log("Name #" + i + ": " + statusArray[i].status);
    }
    */
    this.reports = this.reportService.sortStatus();
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
      if(this.routeService.isOnRectangleMoreInfo || this.routeService.isOnThreeComponents) {
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
