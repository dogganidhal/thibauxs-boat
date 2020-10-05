import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'shop',
        loadChildren: () => import('../shop/shop.module').then(m => m.ShopPageModule)
      },
      // {
      //   path: 'restaurants',
      //   loadChildren: () => import('../restaurants/restaurants.module').then(m => m.RestaurantsModule)
      // },
      // {
      //   path: 'recipes',
      //   loadChildren: () => import('../recipes/recipes.module').then(m => m.RecipesModule)
      // },
      // {
      //   path: 'boats',
      //   loadChildren: () => import('../boats/boats.module').then(m => m.BoatsModule)
      // },
      {
        path: 'explore',
        loadChildren: () => import('../explore/explore.module').then(m => m.ExplorePageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'more',
        loadChildren: () => import('../more/more.module').then(m => m.MorePageModule)
      },
      {
        path: '',
        redirectTo: 'shop',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
