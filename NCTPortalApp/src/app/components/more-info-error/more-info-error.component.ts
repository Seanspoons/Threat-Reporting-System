import { Component, Inject, OnInit } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-more-info-error',
  templateUrl: './more-info-error.component.html',
  styleUrls: ['./more-info-error.component.css']
})
export class MoreInfoErrorComponent {

  constructor(
    public dialogRef: MatDialogRef<MoreInfoErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  confirmClose(): void {
    this.dialogRef.close();
  }

}
