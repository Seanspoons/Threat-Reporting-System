import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { NuisanceReport } from 'src/app/models/nuisance-report';

@Component({
  selector: 'app-report-add-form',
  templateUrl: './report-add-form.component.html',
  styleUrls: ['./report-add-form.component.css']
})
export class ReportAddFormComponent {

  form: FormGroup;

  constructor() { 
    let formControls = {
      reporter: new FormControl('', [Validators.required, Validators.minLength(4), this.forbiddenReporterValidator as ValidatorFn]),
      status: new FormControl()
    }
    this.form = new FormGroup(formControls)
  }

  forbiddenReporterValidator(control: FormControl) {
    var invalid_reporters = ['stupid','freak','hell','idiot'];
    if(invalid_reporters.includes(control.value.trim())) {
      return {report_error: "Your reporter name cannot be " + control.value.trim() }
    } else {
      return null;
    }
  }

  onSubmit(newReport: NuisanceReport) {
    console.log(newReport);
  }

}
