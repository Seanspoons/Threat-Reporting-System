import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RectangleContainerComponent } from './components/rectangle-container/rectangle-container.component';
import { ReportAddFormComponent } from './components/report-add-form/report-add-form.component';
import { TwoComponentsComponent } from './components/two-components/two-components.component';
import { ThreeComponentsComponent } from './components/three-components/three-components.component';
import { TwoComponentsMoreInfoComponent } from './components/two-components-more-info/two-components-more-info.component';
import { AddFormMapComponent } from './components/add-form-map/add-form-map.component';

const routes: Routes = [
  { path: 'rectangle-container', component: RectangleContainerComponent },
  { path: 'report-add-form', component: ReportAddFormComponent },
  { path: 'rectangle-map', component: TwoComponentsComponent},
  { path: 'rectangle-more-info', component: TwoComponentsMoreInfoComponent},
  { path: 'add-form-map', component: AddFormMapComponent},
  { path: 'three-components', component: ThreeComponentsComponent},
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
