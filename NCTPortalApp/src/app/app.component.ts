import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Night Crusade Titans Portal';
  showMap = false;
  showMoreInfo = false;
  buttonText = 'View Report Map';

  toggleMap(): string {
    this.showMap = !this.showMap;
    this.buttonText = this.showMap ? 'Close Report Map' : 'View Report Map';
    return this.buttonText;
  }

  toggleMoreInfo(): void {
    this.showMoreInfo = !this.showMoreInfo;
  }
}
