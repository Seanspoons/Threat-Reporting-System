import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  wasOnTable = false;
  wasOnTableMap = false;
  wasOnTableMoreInfo = false;

  constructor() { }
}
