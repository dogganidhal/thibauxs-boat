import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    ProductComponent
  ],
  declarations: [ProductComponent]
})
export class ProductModule {}
