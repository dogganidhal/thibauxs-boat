import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BoatsPage } from './boats.page';

import { BoatsPageRoutingModule } from './boats-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: BoatsPage}]),
    BoatsPageRoutingModule,
  ],
  exports: [
    BoatsPage
  ],
  declarations: [BoatsPage]
})
export class BoatsModule {}
