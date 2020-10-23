import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import Query from '../../gql/Query';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import GraphQLResponse from '../../model/GraphQLResponse';
import {FullRestaurant, LightRestaurant} from '../../model/Restaurant';
import {Recipe} from '../../model/Recipe';


@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(private apollo: Apollo) { }

  listRestaurants(): Observable<GraphQLResponse<LightRestaurant[]>> {
    return this.apollo
      .watchQuery<{ restaurants: LightRestaurant[] }>({
        query: Query.Restaurants.listRestaurants
      })
      .valueChanges
      .pipe(map(response => {
        return {
          loading: response.loading,
          error: response.error,
          data: response.data.restaurants
        };
      }));
  }

  restaurantById(id: string): Observable<GraphQLResponse<FullRestaurant>> {
    return this.apollo
      .watchQuery<{ products: FullRestaurant[] }>({
        query: Query.Restaurants.restaurantById(id)
      })
      .valueChanges
      .pipe(map(response => {
        return {
          loading: response.loading,
          error: response.error,
          data: response.data.products[0]
        };
      }));
  }

  listRecipes(): Observable<GraphQLResponse<Recipe[]>> {
    return this.apollo
      .watchQuery<{ recipes: Recipe[] }>({
        query: Query.Recipes.listRecipes
      })
      .valueChanges
      .pipe(map(response => {
        return {
          loading: response.loading,
          error: response.error,
          data: response.data.recipes
        };
      }));
  }

  recipeById(id: string): Observable<GraphQLResponse<Recipe>> {
    return this.apollo
      .watchQuery<{ recipes: Recipe[] }>({
        query: Query.Recipes.recipeById(id)
      })
      .valueChanges
      .pipe(map(response => {
        return {
          loading: response.loading,
          error: response.error,
          data: response.data.recipes[0]
        };
      }));
  }

}
