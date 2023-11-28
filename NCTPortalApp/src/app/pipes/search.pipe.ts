import { Pipe, PipeTransform } from '@angular/core';
import { NuisanceReport } from '../models/nuisance-report';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(reports:NuisanceReport[], queryString:string): NuisanceReport[] {
    return reports.filter(r=>{
      return r.reporter.name.toLowerCase().includes(queryString.toLowerCase())
    })
  }

}
