import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import Product from '../../model/Product';
import Query from '../../gql/Query';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import GraphQLResponse from '../../model/GraphQLResponse';
import ProductCategory from '../../model/ProductCategory';
import CartItem from '../../model/CartItem';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemsSubject: Subject<CartItem[]> = new Subject<CartItem[]>();
  private currentItems: CartItem[] = [];

  get items(): Observable<CartItem[]> {
    return this.itemsSubject.asObservable();
  }

  constructor() {
    const cartJson = localStorage.getItem('cart');
    if (cartJson) {
      this.currentItems = JSON.parse(cartJson);
      this.itemsSubject.next(this.currentItems);
      this.itemsSubject.next(this.currentItems);
      console.log({persistedCart: this.currentItems});
    }
  }

  addToCart(product: Product) {
    let newItems = [...this.currentItems];
    const existingItem = this.currentItems
      .find(item => item.product.id === product.id );
    if (existingItem) {
      const existingItemIndex = newItems.indexOf(existingItem);
      newItems = [
        ...newItems.slice(0, existingItemIndex),
        {
          ...existingItem,
          quantity: existingItem.quantity + 1
        },
        ...newItems.slice(existingItemIndex + 1)
      ];
    } else {
      newItems = [
        ...newItems,
        {
          quantity: 1,
          product
        }
      ];
    }
    this.currentItems = newItems;
    this.itemsSubject.next(newItems);
    localStorage.setItem('cart', JSON.stringify(newItems));
  }

}
