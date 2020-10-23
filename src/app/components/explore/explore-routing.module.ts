import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorePage } from './explore.page';
import {RecipesPage} from '../recipes/recipes.page';
import {RecipeDetailsComponent} from '../recipe-details/recipe-details.component';
import {RestaurantsPage} from '../restaurants/restaurants.page';
import {BoatsPage} from '../boats/boats.page';

const routes: Routes = [
  {
    path: '',
    component: ExplorePage,
    children: [
      {
        path: 'recipe/:id',
        component: RecipeDetailsComponent
      },
      {
        path: 'restaurant',
        component: RestaurantsPage,
      },
      {
        path: 'boat',
        component: BoatsPage,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorePageRoutingModule {}
