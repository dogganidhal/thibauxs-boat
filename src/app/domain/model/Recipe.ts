import {Time} from '@angular/common';


export interface Recipe {
  readonly id: string;
  readonly name: string;
  readonly assetUrl: string;
  readonly preparationTime: Time;
  readonly items: RecipeItem[];
}


export interface RecipeItem {
  readonly id: string;
  readonly name: string;
  readonly quantity: number;
  readonly unit: string;
}
