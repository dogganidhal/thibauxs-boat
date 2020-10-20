import { Component } from '@angular/core';
import {CartService} from '../../domain/service/cart/cart.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  cartItemCount = 0;

  constructor(private cartService: CartService) {
    cartService
      .items
      .subscribe(items => this.cartItemCount = items.length);
  }

}
