import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { CartItem } from './../../cart-Item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private _shoppingCartService: ShoppingCartService,
    private location: Location
  ) { }

  cartItems: any = [];
  priceTotal = 0;

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    this._shoppingCartService.getItems()
    .subscribe(Data => {
      this.cartItems = Data;
      console.log(this.cartItems);

      this.getTotal();
      console.log(this.priceTotal);
    });
  }

  getTotal() {
    for (var item of this.cartItems) {
      this.priceTotal += item.price;
    }
  }

  removeItem(item: any) {
    console.log('Click!!', item._id);
    // Calling the removeProduct function from productService and passing item
    this._shoppingCartService.removeCartItem(item)
      .subscribe(deleteResp => {
        console.log('Delete Resp: ', deleteResp);
        // refresh products
        this.getCartItems();
      });
  }

}
