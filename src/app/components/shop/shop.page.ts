import { Component } from '@angular/core';
import {ShopService} from '../../services/shop/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: 'shop.page.html',
  styleUrls: ['shop.page.scss']
})
export class ShopPage {

  constructor(private shopService: ShopService) {}

}
