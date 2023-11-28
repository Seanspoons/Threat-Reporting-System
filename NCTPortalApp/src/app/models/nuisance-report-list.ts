import { NuisanceReport } from "./nuisance-report";

export class NuisanceReportList {
  
    reports: NuisanceReport[];
    query: string;


    constructor() {   
        this.reports = [];
        this.query='';
    }
}