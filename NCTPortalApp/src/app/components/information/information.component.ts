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
    
    if(this.informationService.wasOnTable) {
      this.informationService.wasOnTable = false;
      this.router.navigate(['/table']);
    } else if(this.informationService.wasOnTableMap) {
      this.informationService.wasOnTableMap = false;
      this.router.navigate(['/table-map']);
    } else if(this.informationService.wasOnTableMoreInfo) {
      this.informationService.wasOnTableMoreInfo = false;
      this.router.navigate(['/table-more-info']);
    }
    
  }

}
