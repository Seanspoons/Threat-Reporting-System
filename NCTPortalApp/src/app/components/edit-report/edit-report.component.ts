import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NuisanceReport } from 'src/app/models/nuisance-report';
import { LoginService } from 'src/app/services/login.service';
import { ReportServiceService } from 'src/app/services/report-service.service';

@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.css']
})
export class EditReportComponent implements OnInit {

  form: FormGroup;
  public report!: NuisanceReport;

  constructor(private loginService: LoginService, private router: Router, private reportService: ReportServiceService) { 
    let formControls = {
      password: new FormControl('', [Validators.required]),
    }
    this.form = new FormGroup(formControls)
  }

  ngOnInit(): void {
    this.report = this.reportService.report;
  }

  changeStatus(currentStatus: boolean) { 
    const newReportObject = new NuisanceReport(this.report.reporter, this.report.baddieName, this.report.location, this.report.imgURL, this.report.description);
    newReportObject.id = this.report.id;
    newReportObject.date = this.report.date;
    if(currentStatus === true) {
      let newStatus = false;
      this.report.status = newStatus;
      newReportObject.status = newStatus;
      this.reportService.edit(this.report.id, newReportObject);
    } else {
      let newStatus = true;
      this.report.status = newStatus;
      newReportObject.status = newStatus;
      this.reportService.edit(this.report.id, newReportObject);
    }
  }

  confirmDelete() {
    // Are you sure you want to delete
    // This will permanently delete the report
    // This will take you to the main menu
    this.reportService.delete(this.report.id);
  }

  onSubmit() {
    // Should probably ask user to confirm they want to take action
    if(this.loginService.wasOnRectangleContainer) {
      this.router.navigate(['/rectangle-container']);
    } else if(this.loginService.wasOnRectangleMap) {
      this.router.navigate(['/rectangle-map']);
    } else if(this.loginService.wasOnRectangleMoreInfo) {
      this.router.navigate(['/rectangle-more-info']);
    } else if(this.loginService.wasOnThreeComponents) {
      this.router.navigate(['/three-components']);
    }
  }

}
