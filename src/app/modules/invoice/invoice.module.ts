import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceContainerComponent } from './invoice-container/invoice-container.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';


@NgModule({
  declarations: [
    InvoiceContainerComponent,
    CreateInvoiceComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ],
  exports :[
    CreateInvoiceComponent
  ]
})
export class InvoiceModule { }
