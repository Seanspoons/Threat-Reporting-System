import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  wasOnRectangleContainer = false;
  wasOnRectangleMap = false;
  wasOnRectangleMoreInfo = false;
  wasOnThreeComponents = false;

  constructor() { }
}
