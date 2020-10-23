import {Component} from '@angular/core';
import {ShopService} from '../../domain/service/shop/shop.service';
import Product from '../../domain/model/Product';
import {ActivatedRoute} from '@angular/router';
import GraphQLResponse from '../../domain/model/GraphQLResponse';
import {CartService} from '../../domain/service/cart/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {

  product?: Product = undefined;
  error?: any = undefined;
  loading = true;
  quantity = 1;
  quantityRange = [
    ...Array(10)
      .keys()
  ].map(key => key + 1);

  slideOptions = {
    initialSlide: 0,
    speed: 400
  };

  quantitySelectOptions = {
    header: 'Quantité',
    message: 'Veuillez séléctionner la quantité que vous souhaitez commander',
    translucent: true
  };

  constructor(
    private shopService: ShopService,
    private cartService: CartService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute
      .params
      .subscribe(params => {
        const productId = params.id;
        this.shopService
          .productById(productId)
          .subscribe(({ loading, error, data }: GraphQLResponse<Product>) => {
            this.product = data;
            this.loading = loading;
            this.error = error;
          });
      });
  }

  selectQuantity(quantity: number) {
    this.quantity = quantity;
  }

  addToCart() {
    this.cartService.addToCart(this.product, this.quantity);
  }

}
