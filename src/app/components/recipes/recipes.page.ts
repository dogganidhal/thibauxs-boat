import {Component} from '@angular/core';
import {ExploreService} from '../../domain/service/explore/explore.service';
import {Recipe} from '../../domain/model/Recipe';
import GraphQLResponse from '../../domain/model/GraphQLResponse';
import {Time} from '@angular/common';

@Component({
  selector: 'app-recipes',
  templateUrl: 'recipes.page.html',
  styleUrls: ['recipes.page.scss']
})
export class RecipesPage {

  error?: any = undefined;
  recipes: Recipe[] = [];
  loading = true;

  constructor(private exploreService: ExploreService) {
    this.exploreService
      .listRecipes()
      .subscribe(({ loading, error, data }: GraphQLResponse<Recipe[]>) => {
        this.error = error;
        this.loading = loading;
        this.recipes = data;
      });
  }

  formatPreparationTime(time: Time): string {
    const [hours, minutes] = time.toString().split(':');
    // tslint:disable-next-line:radix
    return `${Number.parseInt(hours) > 0 ? hours + ' heures' : ''} ${minutes} minutes`;
  }

}
