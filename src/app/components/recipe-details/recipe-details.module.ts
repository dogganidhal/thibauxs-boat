import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeDetailsComponent } from './recipe-details.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    RecipeDetailsComponent
  ],
  declarations: [RecipeDetailsComponent]
})
export class RecipeDetailsModule {}
