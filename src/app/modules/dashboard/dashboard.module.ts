import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { LoginComponent } from 'src/app/components/login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardContainerComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
