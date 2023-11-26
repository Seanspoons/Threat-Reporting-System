import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NuisanceReport } from 'src/app/models/nuisance-report';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  @Input() report: any;
  @Output() delete = new EventEmitter();

  constructor() {
    //this.report = new NuisanceReport(new Person("John", "604-817-8817"), "Port Coquitlam");
  }

  onDelete(event:any, reportID:string) {
    event["reportID"] = reportID;
    this.delete.emit(event);
  }

}
