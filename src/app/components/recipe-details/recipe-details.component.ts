import {Component} from '@angular/core';
import {ExploreService} from '../../domain/service/explore/explore.service';
import {Recipe} from '../../domain/model/Recipe';
import GraphQLResponse from '../../domain/model/GraphQLResponse';
import {Time} from '@angular/common';
import {CartService} from '../../domain/service/cart/cart.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: 'recipe-details.component.html',
  styleUrls: ['recipe-details.component.scss']
})
export class RecipeDetailsComponent {

  error?: any = undefined;
  recipe?: Recipe;
  loading = true;

  constructor(
    private exploreService: ExploreService,
    activatedRoute: ActivatedRoute
  ) {
    console.log('RECIPE DETAILS');
    activatedRoute
      .params
      .subscribe(params => {
        const recipeId = params.id;
        this.exploreService
          .recipeById(recipeId)
          .subscribe(({ loading, error, data }: GraphQLResponse<Recipe>) => {
            this.error = error;
            this.loading = loading;
            this.recipe = data;
          });
      });
  }

  formatPreparationTime(time: Time): string {
    const [hours, minutes] = time.toString().split(':');
    // tslint:disable-next-line:radix
    return `${Number.parseInt(hours) > 0 ? hours + ' heures' : ''} ${minutes} minutes`;
  }

}
