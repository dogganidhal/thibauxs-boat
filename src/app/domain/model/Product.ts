import ProductCategory from './ProductCategory';
import User from './User';
import Asset from './Asset';


export default interface Product {
  readonly id: string;
  readonly name: string;
  readonly comment: string;
  readonly discount?: number;
  readonly onSale: boolean;
  readonly available: boolean;
  readonly price: number;
  readonly unit: string;
  readonly category: ProductCategory;
  readonly owner: User;
  readonly assets: Asset[];
}
