import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipesPage } from './recipes.page';

import {RecipeDetailsModule} from '../recipe-details/recipe-details.module';
import {RouterModule} from '@angular/router';
import {RecipesPageRoutingModule} from './recipes-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RecipesPageRoutingModule,
    RecipeDetailsModule,
    RouterModule
  ],
  exports: [
    RecipesPage
  ],
  declarations: [RecipesPage]
})
export class RecipesModule {}
