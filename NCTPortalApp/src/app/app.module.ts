import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RectangleContainerComponent } from './components/rectangle-container/rectangle-container.component';
import { TableComponent } from './components/table/table.component';
import { CountReportsPipe } from './pipes/count-reports.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { ReportAddFormComponent } from './components/report-add-form/report-add-form.component';
import { MapComponent } from './components/map/map.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ThreeComponentsComponent } from './components/three-components/three-components.component';
import { TwoComponentsComponent } from './components/two-components/two-components.component';
import { TwoComponentsMoreInfoComponent } from './components/two-components-more-info/two-components-more-info.component';

@NgModule({
  declarations: [
    AppComponent,
    RectangleContainerComponent,
    TableComponent,
    CountReportsPipe,
    SearchPipe,
    ReportAddFormComponent,
    MapComponent,
    MoreInfoComponent,
    ThreeComponentsComponent,
    TwoComponentsComponent,
    TwoComponentsMoreInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
