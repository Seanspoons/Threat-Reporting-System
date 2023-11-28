import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColors]'
})
export class ColorsDirective {
  colors = [
    "steelblue",
    "aliceblue",
    "cornflowerblue",
    "lightblue",
    "lightcyan",
    "lightskyblue",
    "lightsteelblue",
    'white'
  ]
  i=0;

  constructor() { }

  @HostBinding('style.background-color') bgColor:string='white';

  @HostListener('click') changeColor() {
    this.bgColor = this.colors[this.i];
    this.i = ++ this.i % this.colors.length;
  }
}
