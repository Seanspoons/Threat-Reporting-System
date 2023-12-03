import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-submit-confirmation',
  templateUrl: './submit-confirmation.component.html',
  styleUrls: ['./submit-confirmation.component.css']
})
export class SubmitConfirmationComponent {

  constructor(
    public dialogRef: MatDialogRef<SubmitConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  confirmSubmit(): void {
    this.dialogRef.close(true);
  }

  cancelSubmit(): void {
    this.dialogRef.close(false);
  }

}
