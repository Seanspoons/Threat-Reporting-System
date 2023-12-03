import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ReportServiceService } from 'src/app/services/report-service.service';
import { RouteStateService } from 'src/app/services/route-state.service';
import { SizingService } from 'src/app/services/sizing.service';

@Component({
  selector: 'app-rectangle-container',
  templateUrl: './rectangle-container.component.html',
  styleUrls: ['./rectangle-container.component.css']
})
export class RectangleContainerComponent implements OnInit {

  buttonText = "View Report Map";

  constructor(
      private appComponent: AppComponent,
      private routeService: RouteStateService,
      private reportService: ReportServiceService,
      private sizingService: SizingService,
      private router: Router, 
      ) { }

  ngOnInit(): void {
    if(this.reportService.justDeleted) {
      this.reportService.get();
      this.reportService.justDeleted = false;
    }

    const contentContainer = document.getElementById('contentContainer');
    if(contentContainer) {
      let containerHeight = contentContainer.offsetHeight;
      this.sizingService.contentContainerHeight = containerHeight;
    }

    this.sizingService.windowResized.subscribe(() => {
      if(contentContainer) {
        let containerHeight = contentContainer.offsetHeight;
        this.sizingService.contentContainerHeight = containerHeight;
      }
    });
  }

  checkButtonState(): boolean {
    if(this.routeService.isOnRectangleMap || this.routeService.isOnThreeComponents) {
      return true;
    } else {
      return false;
    }
  }

  onMap() {
    if(this.routeService.isOnRectangleMap) {
      console.log("Error Map is already open");
      // Error: map is already open
    } else {
      if(this.routeService.isOnRectangleMoreInfo) {
        this.router.navigate(['/three-components']);
      } else if(this.routeService.isOnRectangleContainer) {
        this.router.navigate(['/rectangle-map']);
      }
    }
  }
}
