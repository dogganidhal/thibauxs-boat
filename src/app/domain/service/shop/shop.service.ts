import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import Product from '../../model/Product';
import Query from '../../gql/Query';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import GraphQLResponse from '../../model/GraphQLResponse';
import ProductCategory from '../../model/ProductCategory';


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private apollo: Apollo) { }

  productList(): Observable<GraphQLResponse<Product[]>> {
    return this.apollo
      .watchQuery<{ products: Product[] }>({
        query: Query.listProducts
      })
      .valueChanges
      .pipe(map(response => {
        return {
          loading: response.loading,
          error: response.error,
          data: response.data.products
        };
      }));
  }

  productCategoryList(): Observable<GraphQLResponse<ProductCategory[]>> {
    return this.apollo
      .watchQuery<{ categories: ProductCategory[] }>({
        query: Query.listProductCategories
      })
      .valueChanges
      .pipe(map(response => {
        return {
          loading: response.loading,
          error: response.error,
          data: response.data.categories
        };
      }));
  }

  filterProducts(query?: string, categoryIds: string[] = []): Observable<GraphQLResponse<Product[]>> {
    return this.apollo
      .watchQuery<{ products: Product[] }>({
        query: Query.filterProducts(categoryIds, query)
      })
      .valueChanges
      .pipe(map(response => {
        return {
          loading: response.loading,
          error: response.error,
          data: response.data.products
        };
      }));
  }

}
