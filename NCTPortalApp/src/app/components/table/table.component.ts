import { Component, Input, OnInit } from '@angular/core';
import { NuisanceReport } from 'src/app/models/nuisance-report';
import { ReportServiceService } from 'src/app/services/report-service.service';
import { Router } from '@angular/router';
import { RouteStateService } from 'src/app/services/route-state.service';
import { MoreInfoComponent } from '../more-info/more-info.component';
import { LoginService } from 'src/app/services/login.service';
import { MatLegacyDialog as MatDialog, MatLegacyDialogConfig as MatDialogConfig } from '@angular/material/legacy-dialog';
import { MoreInfoErrorComponent } from 'src/app/components/more-info-error/more-info-error.component';
import { MapErrorComponent } from '../map-error/map-error.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  reports: NuisanceReport[];
  buttonText = "View Report Map";

  constructor(
      private reportService: ReportServiceService,
      private routeService: RouteStateService,
      private loginService: LoginService,
      private router: Router,
      private dialog: MatDialog
      ) {
    this.reports = [];
    this.reportService.get();
  }

  ngOnInit(): void {

    if(this.reportService.justDeleted) {
      this.reportService.get();
      this.reportService.justDeleted = false;
    }

    this.reports = this.reportService.reports;
  }

  sortByBaddieName():void {
    this.reports = this.reportService.sortBaddie();
  }

  sortByLocation(): void {
    this.reports = this.reportService.sortLocation();
  }

  sortByTime(): void {
    this.reports = this.reportService.sortTime();
  }

  sortByStatus(): void {
    this.reports = this.reportService.sortStatus();
  }

  onReportMenu(reportID: string) {
    if(this.routeService.isOnTable) {
      this.loginService.wasOnTable = true;
    } else if(this.routeService.isOnTableMap) {
      this.loginService.wasOnTableMap = true;
    } else if(this.routeService.isOnTableMoreInfo) {
      this.loginService.wasOnTableMoreInfo = true;
    }

    this.router.navigate(['/verification']);
    this.loginService.reportID = reportID;
  }

  onMoreInfo(reportID: string) {
    const foundReport = this.reportService.reports.find(report => report.id === reportID);
    if(foundReport) {
      this.reportService.report = foundReport;
      if(this.routeService.isOnTableMoreInfo) {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        const dialogRef = this.dialog.open(MoreInfoErrorComponent, dialogConfig);
      } else {
        this.router.navigate(['/table-more-info']);
      } 
    }
  }
  
  checkButtonState(): boolean {
    if(this.routeService.isOnTableMap) {
      return true;
    } else {
      return false;
    }
  }

  onMap() {
    if(this.routeService.isOnTableMap) {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      const dialogRef = this.dialog.open(MapErrorComponent, dialogConfig);
    } else {
      this.router.navigate(['/table-map']);
    }
  }

}
