import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';
import { ReportListComponent } from './report-list/report-list.component';
import { RectangleContainerComponent } from './rectangle-container/rectangle-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    ReportListComponent,
    RectangleContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
