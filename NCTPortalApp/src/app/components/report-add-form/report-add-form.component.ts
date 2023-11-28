import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { NuisanceReport } from 'src/app/models/nuisance-report';
import { Person } from 'src/app/models/person';
import { ReportServiceService } from 'src/app/services/report-service.service';

@Component({
  selector: 'app-report-add-form',
  templateUrl: './report-add-form.component.html',
  styleUrls: ['./report-add-form.component.css']
})
export class ReportAddFormComponent {

  form: FormGroup;

  constructor(private reportService: ReportServiceService) { 
    let formControls = {
      reporter: new FormControl('', [Validators.required, Validators.minLength(4)]),
      phoneNumber: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      status: new FormControl()
    }
    this.form = new FormGroup(formControls)
  }


  onSubmit() {
    if (this.form.valid) {
      let newReporter = new Person(this.form.get('reporter')!.value, this.form.get('phoneNumber')!.value);
      let newReport = new NuisanceReport(newReporter, this.form.get('location')!.value);
  
      this.reportService.add(newReport);
  
      //this.form.reset();
    }
  }

}
