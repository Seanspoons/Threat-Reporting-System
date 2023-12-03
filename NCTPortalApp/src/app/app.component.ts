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
    if(this.routeStateService.isOnTable) {
      this.informationService.wasOnTable = true;
    } else if(this.routeStateService.isOnTableMap) {
      this.informationService.wasOnTableMap = true;
    } else if(this.routeStateService.isOnTableMoreInfo) {
      this.informationService.wasOnTableMoreInfo = true;
    }
    this.router.navigate(['/information']);
  }

  onMainPage(): boolean {
    if(this.routeStateService.isOnTable ||
      this.routeStateService.isOnTableMap ||
      this.routeStateService.isOnTableMoreInfo
      ) {
        return true;
      } else {
        return false;
      }
  }
}
