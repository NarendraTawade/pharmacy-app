import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : '',
    component : DashboardContainerComponent,
    children : [
      {
        path : '',
        component : HomeComponent
      },
      {
        path : 'home',
        component : HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
