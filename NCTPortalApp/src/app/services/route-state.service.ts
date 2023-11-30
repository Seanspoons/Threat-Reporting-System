import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteStateService {

  private routerSubscription: Subscription;
  public isOnRectangleMap = false;
  public isOnRectangleMoreInfo = false;
  public isOnRectangleContainer = true;
  public isOnThreeComponents = false;
  public isOnAddForm = false;

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateRouteFlags(event.url);
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  private updateRouteFlags(url: string): void {
    this.isOnRectangleContainer = url.includes('/rectangle-container');
    this.isOnRectangleMap = url.includes('/rectangle-map');
    this.isOnRectangleMoreInfo = url.includes('/rectangle-more-info');
    this.isOnThreeComponents = url.includes('three-components');
    this.isOnAddForm = url.includes('report-add-form');
  }
}
