import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopPage } from './shop.page';
import {ProductComponent} from '../product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ShopPage,
  },
  {
    path: 'product/:id',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopPageRoutingModule {}
