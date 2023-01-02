import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { BuyerComponent } from './buyer/buyer.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: AdminContainerComponent,
    children: [
      {
        path: '',
        component: ProductComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'buyer-board',
        component: BuyerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
