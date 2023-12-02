import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.css']
})
export class EditReportComponent implements OnInit {

  form: FormGroup;

  constructor() { 
    let formControls = {
      password: new FormControl('', [Validators.required]),
    }
    this.form = new FormGroup(formControls)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

}
