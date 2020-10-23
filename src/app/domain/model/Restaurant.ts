import {Time} from '@angular/common';
import {RestaurantMenu} from './RestaurantMenu';
import User from './User';
import Asset from './Asset';


export interface LightRestaurant {
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly openingHour: Time;
  readonly closingHour: Time;
  readonly assets: Asset[];
}


export interface FullRestaurant extends LightRestaurant{
  readonly menu: RestaurantMenu;
  readonly owner: User;
}
