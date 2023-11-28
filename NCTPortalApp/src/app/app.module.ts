import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RectangleContainerComponent } from './components/rectangle-container/rectangle-container.component';
import { TableComponent } from './components/table/table.component';
import { ColorsDirective } from './directives/colors.directive';
import { CountReportsPipe } from './pipes/count-reports.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { ReportAddFormComponent } from './components/report-add-form/report-add-form.component';
import { MapComponent } from './components/map/map.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RectangleContainerComponent,
    TableComponent,
    ColorsDirective,
    CountReportsPipe,
    SearchPipe,
    ReportAddFormComponent,
    MapComponent,
    MoreInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
