import {Component} from '@angular/core';
import {ShopService} from '../../domain/service/shop/shop.service';
import Product from '../../domain/model/Product';
import {ActivatedRoute} from '@angular/router';
import GraphQLResponse from '../../domain/model/GraphQLResponse';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {

  product?: Product = undefined;
  error?: any = undefined;
  loading = true;

  slideOptions = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private shopService: ShopService, activatedRoute: ActivatedRoute) {
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

}
