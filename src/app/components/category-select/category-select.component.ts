import {Component, EventEmitter, Output} from '@angular/core';
import {ShopService} from '../../domain/service/shop/shop.service';
import ProductCategory from '../../domain/model/ProductCategory';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss'],
})
export class CategorySelectComponent {

  categories: ProductCategory[] = [];
  selectedCategories: string[] = [];

  @Output()
  categorySelected = new EventEmitter<string[]>();

  constructor(private shopService: ShopService) {
    this.shopService
      .productCategoryList()
      .subscribe(({ data }) => {
        this.categories = data || [];
      });
  }

  toggleSelected(id: string) {
    if (this.selectedCategories.includes(id)) {
      const index = this.selectedCategories.indexOf(id);
      this.selectedCategories = [
        ...this.selectedCategories.slice(0, index),
        ...this.selectedCategories.slice(index + 1)
      ];
    } else {
      this.selectedCategories = [...this.selectedCategories, id];
    }
    this.categorySelected.emit(this.selectedCategories);
  }

}
