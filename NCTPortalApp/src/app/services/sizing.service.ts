import { EventEmitter, Injectable } from '@angular/core';
import { RectangleContainerComponent } from '../components/rectangle-container/rectangle-container.component';

@Injectable({
  providedIn: 'root'
})
export class SizingService {

  contentContainerHeight: number;
  windowResized: EventEmitter<void> = new EventEmitter<void>();

  constructor() { 
    this.contentContainerHeight = 0;
    this.setupWindowResizeListener();
  }

  setupWindowResizeListener(): void {
    window.addEventListener('resize', () => {
      this.windowResized.emit();
    });
  }
}
