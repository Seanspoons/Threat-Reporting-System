import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RectangleContainerComponent } from './components/rectangle-container/rectangle-container.component';
import { ReportAddFormComponent } from './components/report-add-form/report-add-form.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  { path: 'rectangle-container', component: RectangleContainerComponent },
  { path: 'report-add-form', component: ReportAddFormComponent },
  { path: 'report-more-info', component: MoreInfoComponent },
  { path: 'map', component: MapComponent },
  { path: '', redirectTo: '/rectangle-container', pathMatch: 'full' }, // Default route
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
