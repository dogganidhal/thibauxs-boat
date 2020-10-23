import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExplorePage } from './explore.page';
import {ExplorePageRoutingModule} from './explore-routing.module';
import {RecipesModule} from '../recipes/recipes.module';
import {RestaurantsModule} from '../restaurants/restaurants.module';
import {BoatsModule} from '../boats/boats.module';
import {RecipeDetailsModule} from '../recipe-details/recipe-details.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExplorePageRoutingModule,
    RecipeDetailsModule,
    RecipesModule,
    RestaurantsModule,
    BoatsModule
  ],
  declarations: [ExplorePage],
  exports: [ExplorePage]
})
export class ExplorePageModule {}
