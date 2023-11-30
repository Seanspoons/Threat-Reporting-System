import { Component, OnInit } from '@angular/core';
import { NuisanceReport } from 'src/app/models/nuisance-report';
import { ReportServiceService } from 'src/app/services/report-service.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  public report!: NuisanceReport;

  constructor(private reportService: ReportServiceService) {}

  ngOnInit(): void {
    this.report = this.reportService.report;
  }

}
