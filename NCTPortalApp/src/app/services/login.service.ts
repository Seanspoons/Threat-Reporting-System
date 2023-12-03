import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReportServiceService } from './report-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  reportID: string;
  correctPassword = "fcab0453879a2b2281bc5073e3f5fe54";
  wasOnTable = false;
  wasOnTableMap = false;
  wasOnTableMoreInfo = false;
  wasOnThreeComponents = false;
  correctPasswordBoolean = false;

  constructor(private http: HttpClient, private router: Router, private reportService: ReportServiceService) { 
    this.reportID = "";
  }

  verifyPassword(enteredPassword: string) {
    this.http.get(`https://api.hashify.net/hash/md5/hex?value=${enteredPassword}`)
      .subscribe(
        (response: any) => {
          const hashedPassword = response.Digest;

          if (hashedPassword !== this.correctPassword) {
            this.correctPasswordBoolean = false
          } else {
            const foundReport = this.reportService.reports.find(report => report.id === this.reportID);
            if(foundReport) {
              this.reportService.report = foundReport;
              this.router.navigate(['/edit-report']);
            }
          }
        }
      );
  }
}
