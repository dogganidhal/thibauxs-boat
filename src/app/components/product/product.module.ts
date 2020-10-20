import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';
import {ProductRoutingModule} from './products-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ],
  exports: [
    ProductComponent
  ],
  declarations: [ProductComponent]
})
export class ProductModule {}
