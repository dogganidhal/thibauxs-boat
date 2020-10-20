import {Component, Input} from '@angular/core';
import {ShopService} from '../../domain/service/shop/shop.service';
import Product from '../../domain/model/Product';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import ProductCategory from '../../domain/model/ProductCategory';
import GraphQLResponse from '../../domain/model/GraphQLResponse';


@Component({
  selector: 'app-shop',
  templateUrl: 'shop.page.html',
  styleUrls: ['shop.page.scss']
})
export class ShopPage {

  searchFormControl = new FormControl();

  loading = true;
  error: any;
  products: Product[] = [];

  categoriesFilter: string[] = [];

  private static truncate(str: string, maxLength: number): string {
    if (str.length <= maxLength) {
      return str;
    }
    return str.slice(0, maxLength) + '...';
  }

  constructor(private shopService: ShopService) {
    this.shopService
      .productList()
      .subscribe(this.update.bind(this));
    this.searchFormControl
      .valueChanges
      .pipe(debounceTime(200))
      .subscribe(searchQuery => this.shopService
        .filterProducts(searchQuery, this.categoriesFilter)
        .subscribe(this.update.bind(this))
      );
  }

  onCategoriesSelected(categoryIds: string[]) {
    this.categoriesFilter = categoryIds;
    this.shopService
      .filterProducts(this.searchFormControl.value, categoryIds)
      .subscribe(this.update.bind(this));
  }

  private update({ loading, error, data }: GraphQLResponse<Product[]>) {
    this.loading = loading;
    this.error = error;
    this.products = data || [];
  }

  truncateDescription(str: string): string {
    return ShopPage.truncate(str, 128);
  }

}
