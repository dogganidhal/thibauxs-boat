import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategorySelectComponent } from './category-select.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    CategorySelectComponent
  ],
  declarations: [CategorySelectComponent]
})
export class CategorySelectModule {}
