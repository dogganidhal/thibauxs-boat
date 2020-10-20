import Product from './Product';


export default interface CartItem {
  readonly product: Product;
  readonly quantity: number;
}
