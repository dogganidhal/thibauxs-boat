import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CartRoutingModule
  ],
  declarations: [CartComponent]
})
export class CartModule {}
