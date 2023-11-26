import { NuisanceReport } from "../models/nuisance-report";

interface ReportServices {
    add(report:NuisanceReport): void;
    delete(id:string): void;
    //divide(): void;
    /*
    nameSortGrey(): void;
    nameSortChestnut(): void;
    nameSortWhite(): void;
    nameSortBlack(): void;
    */
    //showAll(): void;
}