

export interface RestaurantMenu {
  readonly id: string;
  readonly items: RestaurantMenuItem[];
}


export interface RestaurantMenuItem {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly assetUrl: string;
}
