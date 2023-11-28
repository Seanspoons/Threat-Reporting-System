import { Pipe, PipeTransform } from '@angular/core';
import { NuisanceReport } from '../models/nuisance-report';

@Pipe({
  name: 'countReports'
})
export class CountReportsPipe implements PipeTransform {

  transform(reports:NuisanceReport[]): unknown {
    return reports.length;
  }

}
