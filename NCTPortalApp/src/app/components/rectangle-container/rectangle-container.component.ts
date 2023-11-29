import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { RouteStateService } from 'src/app/services/route-state.service';

@Component({
  selector: 'app-rectangle-container',
  templateUrl: './rectangle-container.component.html',
  styleUrls: ['./rectangle-container.component.css']
})
export class RectangleContainerComponent implements OnInit {

  buttonText = "View Report Map";

  constructor(private appComponent: AppComponent, private routeService: RouteStateService, private router: Router) { }

  ngOnInit(): void {
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
