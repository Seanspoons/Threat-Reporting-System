import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RectangleContainerComponent } from './components/rectangle-container/rectangle-container.component';
import { ReportAddFormComponent } from './components/report-add-form/report-add-form.component';

const routes: Routes = [
  { path: 'rectangle-container', component: RectangleContainerComponent },
  { path: 'report-add-form', component: ReportAddFormComponent },
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
