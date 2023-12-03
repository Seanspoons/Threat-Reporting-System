import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteStateService {

  private routerSubscription: Subscription;
  public isOnTableMap = false;
  public isOnTableMoreInfo = false;
  public isOnTable = true;
  public isOnAddForm = false;
  public isOnAddFormMap = false;

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
    this.isOnTable = url.includes('/table');
    this.isOnTableMap = url.includes('/table-map');
    this.isOnTableMoreInfo = url.includes('/table-more-info');
    this.isOnAddForm = url.includes('report-add-form');
    this.isOnAddFormMap = url.includes('add-form-map');
  }
}
