import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { InvoiceContainerComponent } from './invoice-container/invoice-container.component';

const routes: Routes = [
  {
    path : '',
    component : InvoiceContainerComponent,
    children : [
      {
        path : '',
        component : CreateInvoiceComponent
      },
      {
        path : 'create-invoice',
        component : CreateInvoiceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
