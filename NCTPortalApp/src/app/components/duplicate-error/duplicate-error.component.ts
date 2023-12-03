import { Component, Inject, OnInit } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-duplicate-error',
  templateUrl: './duplicate-error.component.html',
  styleUrls: ['./duplicate-error.component.css']
})
export class DuplicateErrorComponent {

  constructor(
    public dialogRef: MatDialogRef<DuplicateErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  confirmClose(): void {
    this.dialogRef.close();
  }

}
