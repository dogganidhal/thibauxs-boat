import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShopPage } from './shop.page';

import { ShopPageRoutingModule } from './shop-routing.module';
import {NbInputModule} from '@nebular/theme';
import {CategorySelectModule} from '../category-select/category-select.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ShopPageRoutingModule,
    NbInputModule,
    ReactiveFormsModule,
    CategorySelectModule
  ],
  declarations: [ShopPage]
})
export class ShopPageModule {}
