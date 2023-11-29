import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-rectangle-container',
  templateUrl: './rectangle-container.component.html',
  styleUrls: ['./rectangle-container.component.css']
})
export class RectangleContainerComponent implements OnInit {

  buttonText = "View Report Map";

  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  toggleMap(): void {
    this.buttonText = this.appComponent.toggleMap();
  }
}
