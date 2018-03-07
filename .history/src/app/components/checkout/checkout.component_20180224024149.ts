import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { CartItem } from './../../cart-Item';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(
    private _shoppingCartService: ShoppingCartService,
    private location: Location
  ) { }

  name: String;
  address: String;
  card-name: String;
  card-number: Number;
  card-expiry-month: Number;
  card-number: Number;
  card-number: Number;


  savedProduct: any = {
    imagePath: '',
    title: '',
    description: '',
    price: ''
  };

  selectedProduct: any = {};
  productStore: any = [];

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

}
