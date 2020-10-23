import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import Product from '../../model/Product';
import Query from '../../gql/Query';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import GraphQLResponse from '../../model/GraphQLResponse';
import ProductCategory from '../../model/ProductCategory';
import CartItem from '../../model/CartItem';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private static LOCAL_STORAGE_KEY = 'cart';

  private subject: BehaviorSubject<CartItem[]>;

  items: Observable<CartItem[]>;

  constructor() {
    const persistedCart = CartService.readCartFromLocalStorage();
    this.subject  = new BehaviorSubject<CartItem[]>(persistedCart);
    this.items = this.subject.asObservable();
  }

  private static readCartFromLocalStorage(): CartItem[] {
    const cartJson = localStorage.getItem(CartService.LOCAL_STORAGE_KEY);
    if (cartJson) {
      return JSON.parse(cartJson);
    }
    return [];
  }

  private updateCart(items: CartItem[]) {
    this.subject.next(items);
    localStorage.setItem(CartService.LOCAL_STORAGE_KEY, JSON.stringify(items));
  }

  addToCart(product: Product, quantity: number = 1) {
    const currentItems = this.subject.getValue();
    let newItems = [...currentItems];
    const existingItem = currentItems
      .find(item => item.product.id === product.id );
    if (existingItem) {
      const existingItemIndex = newItems.indexOf(existingItem);
      newItems = [
        ...newItems.slice(0, existingItemIndex),
        {
          ...existingItem,
          quantity: existingItem.quantity + quantity
        },
        ...newItems.slice(existingItemIndex + 1)
      ];
    } else {
      newItems = [
        ...newItems,
        {
          quantity,
          product
        }
      ];
    }
    this.updateCart(newItems);
  }

  incrementProduct(id: string) {
    const currentItems = this.subject.getValue();
    const itemIndex = currentItems.findIndex(item => item.product.id === id);
    let newItems = [...currentItems];
    if (itemIndex > -1) {
      const item = newItems[itemIndex];
      newItems = [
        ...newItems.slice(0, itemIndex),
        {
          product: item.product,
          quantity: item.quantity + 1
        },
        ...newItems.slice(itemIndex + 1)
      ];
      this.updateCart(newItems);
    }
  }

  decrementProduct(id: string) {
    const currentItems = this.subject.getValue();
    const itemIndex = currentItems.findIndex(item => item.product.id === id);
    let newItems = [...currentItems];
    if (itemIndex > -1) {
      const item = newItems[itemIndex];
      if (item.quantity === 1) {
        newItems = [
          ...newItems.slice(0, itemIndex),
          ...newItems.slice(itemIndex + 1)
        ];
      } else {
        newItems = [
          ...newItems.slice(0, itemIndex),
          {
            product: item.product,
            quantity: item.quantity - 1
          },
          ...newItems.slice(itemIndex + 1)
        ];
      }
      this.updateCart(newItems);
    }
  }

  reset() {
    this.updateCart([]);
  }
}
