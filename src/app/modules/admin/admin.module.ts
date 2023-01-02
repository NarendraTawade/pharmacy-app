import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BuyerComponent } from './buyer/buyer.component';
import { ProductComponent } from './product/product.component';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BuyerComponent,
    ProductComponent,
    AdminContainerComponent,
    AddProductModalComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AdminModule { }
