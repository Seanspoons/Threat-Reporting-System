import { Component, Inject, OnInit } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-map-error',
  templateUrl: './map-error.component.html',
  styleUrls: ['./map-error.component.css']
})
export class MapErrorComponent {

  constructor(
    public dialogRef: MatDialogRef<MapErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  confirmClose(): void {
    this.dialogRef.close();
  }

}
