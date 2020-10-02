import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RestaurantsPage } from './restaurants.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RestaurantsPageRoutingModule } from './restaurants-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RestaurantsPageRoutingModule
  ],
  declarations: [RestaurantsPage]
})
export class RestaurantsPageModule {}
