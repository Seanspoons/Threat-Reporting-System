import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportAddFormComponent } from './components/report-add-form/report-add-form.component';
import { MapComponent } from './components/map/map.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TwoComponentsComponent } from './components/two-components/two-components.component';
import { TwoComponentsMoreInfoComponent } from './components/two-components-more-info/two-components-more-info.component';
import { AddFormMapComponent } from './components/add-form-map/add-form-map.component';
import { VerificationComponent } from './components/verification/verification.component';
import { EditReportComponent } from './components/edit-report/edit-report.component';
import { InformationComponent } from './components/information/information.component';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { SubmitConfirmationComponent } from './components/submit-confirmation/submit-confirmation.component';
import { MoreInfoErrorComponent } from './components/more-info-error/more-info-error.component';
import { MapErrorComponent } from './components/map-error/map-error.component';
import { DuplicateErrorComponent } from './components/duplicate-error/duplicate-error.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ReportAddFormComponent,
    MapComponent,
    MoreInfoComponent,
    TwoComponentsComponent,
    TwoComponentsMoreInfoComponent,
    AddFormMapComponent,
    VerificationComponent,
    EditReportComponent,
    InformationComponent,
    DeleteConfirmationComponent,
    SubmitConfirmationComponent,
    MoreInfoErrorComponent,
    MapErrorComponent,
    DuplicateErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
