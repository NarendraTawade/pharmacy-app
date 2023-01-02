import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './router-guards/admin-guard.guard';

const routes: Routes = [
  {
    path : '',
    loadChildren : () =>
    import('./modules/dashboard/dashboard.module').then(
      (m) => m.DashboardModule
    )
  },
  {
    path : 'home',
    loadChildren : () =>
    import('./modules/dashboard/dashboard.module').then(
      (m) => m.DashboardModule
    )
  },
  {
    path : 'admin',
    loadChildren : () =>
    import('./modules/admin/admin.module').then(
      (m)=>m.AdminModule
    ),
    canActivate :[AdminGuardGuard]
  },
  {
    path : 'invoice',
    loadChildren : () =>
    import('./modules/invoice/invoice.module').then(
      (m)=>m.InvoiceModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
