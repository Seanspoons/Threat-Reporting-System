import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { RouteStateService } from 'src/app/services/route-state.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private routeService: RouteStateService, private router: Router) { }

  ngOnInit(): void {
    var mymap = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mymap);
  }

  onCloseMap() {
    if(this.routeService.isOnThreeComponents) {
      this.router.navigate(['/rectangle-more-info']);
    } else {
      this.router.navigate(['rectangle-container']);
    }
  }

}
