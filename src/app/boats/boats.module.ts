import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BoatsPage } from './boats.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BoatsPageRoutingModule } from './boats-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: BoatsPage }]),
    BoatsPageRoutingModule,
  ],
  declarations: [BoatsPage]
})
export class BoatsPageModule {}
