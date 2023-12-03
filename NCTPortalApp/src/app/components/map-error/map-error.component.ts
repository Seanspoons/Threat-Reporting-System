import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
