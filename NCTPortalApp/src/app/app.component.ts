import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Night Crusade Titans Portal';
  isOnMainRouteValue: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkRoute();
    // Subscribe to router events
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkRoute();
      });
  }

  checkRoute() {
    this.isOnMainRouteValue = this.router.url === '/rectangle-container';
  }

  isOnMainRoute(): boolean {
    return this.isOnMainRouteValue;
  }
}
