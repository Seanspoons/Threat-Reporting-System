import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportAddFormComponent } from './components/report-add-form/report-add-form.component';
import { TwoComponentsComponent } from './components/two-components/two-components.component';
import { TwoComponentsMoreInfoComponent } from './components/two-components-more-info/two-components-more-info.component';
import { AddFormMapComponent } from './components/add-form-map/add-form-map.component';
import { VerificationComponent } from './components/verification/verification.component';
import { EditReportComponent } from './components/edit-report/edit-report.component';
import { InformationComponent } from './components/information/information.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'report-add-form', component: ReportAddFormComponent },
  { path: 'table-map', component: TwoComponentsComponent},
  { path: 'table-more-info', component: TwoComponentsMoreInfoComponent},
  { path: 'add-form-map', component: AddFormMapComponent},
  { path: 'verification', component: VerificationComponent},
  { path: 'edit-report', component: EditReportComponent},
  { path: 'information', component: InformationComponent},
  { path: '', redirectTo: '/table', pathMatch: 'full' }, // Default route
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
