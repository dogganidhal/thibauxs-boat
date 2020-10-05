import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RestaurantsPage } from './restaurants.page';

import { RestaurantsPageRoutingModule } from './restaurants-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RestaurantsPageRoutingModule
  ],
  exports: [
    RestaurantsPage
  ],
  declarations: [RestaurantsPage]
})
export class RestaurantsModule {}
