import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RouteStateService } from './services/route-state.service';
import { InformationComponent } from './components/information/information.component';
import { InformationService } from './services/information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Night Crusade Titans Portal';

  constructor(private router: Router, private routeStateService: RouteStateService, private informationService: InformationService) {}

  onInformation(): void {
    if(this.routeStateService.isOnRectangleContainer) {
      this.informationService.wasOnRectangleContainer = true;
    } else if(this.routeStateService.isOnRectangleMap) {
      this.informationService.wasOnRectangleMap = true;
    } else if(this.routeStateService.isOnRectangleMoreInfo) {
      this.informationService.wasOnRectangleMoreInfo = true;
    } else if(this.routeStateService.isOnThreeComponents) {
      this.informationService.wasOnThreeComponents = true;
    }
    this.router.navigate(['/information']);
  }

  onMainPage(): boolean {
    if(this.routeStateService.isOnRectangleContainer ||
      this.routeStateService.isOnRectangleMap ||
      this.routeStateService.isOnRectangleMoreInfo ||
      this.routeStateService.isOnThreeComponents
      ) {
        return true;
      } else {
        return false;
      }
  }
}
