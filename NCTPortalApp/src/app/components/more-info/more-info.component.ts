import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuisanceReport } from 'src/app/models/nuisance-report';
import { ReportServiceService } from 'src/app/services/report-service.service';
import { RouteStateService } from 'src/app/services/route-state.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  public report!: NuisanceReport;

  constructor(private reportService: ReportServiceService, private routeService: RouteStateService, private router: Router) {}

  ngOnInit(): void {
    this.report = this.reportService.report;
  }

  onCloseMoreInfo(): void {
    if(this.routeService.isOnThreeComponents) {
      this.router.navigate(['/rectangle-map']);
    } else {
      this.router.navigate(['rectangle-container']);
    }
  }

}
