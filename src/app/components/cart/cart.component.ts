import {Component, OnInit} from '@angular/core';
import {CartService} from '../../domain/service/cart/cart.service';
import CartItem from '../../domain/model/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  items: CartItem[] = [];

  get totalPrice(): string {
    return this.items
      .reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
      }, 0)
      .toFixed(2);
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService
      .items
      .subscribe(items => this.items = items);
  }

  resetCart() {
    this.cartService.reset();
  }

  increment(item: CartItem) {
    this.cartService.incrementProduct(item.product.id);
  }

  decrement(item: CartItem) {
    this.cartService.decrementProduct(item.product.id);
  }

}
