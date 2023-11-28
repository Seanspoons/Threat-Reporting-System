import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReportComponent } from './components/report/report.component';
import { ReportListComponent } from './components/report-list/report-list.component';
import { RectangleContainerComponent } from './components/rectangle-container/rectangle-container.component';
import { TableComponent } from './components/table/table.component';
import { ColorsDirective } from './directives/colors.directive';
import { CountReportsPipe } from './pipes/count-reports.pipe';

import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    ReportListComponent,
    RectangleContainerComponent,
    TableComponent,
    ColorsDirective,
    CountReportsPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
