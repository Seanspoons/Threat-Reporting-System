import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformationService } from 'src/app/services/information.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor(private router: Router, private informationService: InformationService) { }

  ngOnInit(): void {
  }

  onBack(): void {
    
    if(this.informationService.wasOnRectangleContainer) {
      this.informationService.wasOnRectangleContainer = false;
      this.router.navigate(['/rectangle-container']);
    } else if(this.informationService.wasOnRectangleMap) {
      this.informationService.wasOnRectangleMap = false;
      this.router.navigate(['/rectangle-map']);
    } else if(this.informationService.wasOnRectangleMoreInfo) {
      this.informationService.wasOnRectangleMoreInfo = false;
      this.router.navigate(['/rectangle-more-info']);
    } else if(this.informationService.wasOnThreeComponents) {
      this.informationService.wasOnThreeComponents = false;
      this.router.navigate(['/three-components']);
    }
    
  }

}
