import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { CheckoutService } from '../../services/checkout/checkout.service';

import { CartItem } from './../../cart-Item';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements AfterViewInit, OnDestroy  {
  @ViewChild('cardInfo') cardInfo: ElementRef;

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;
  
  constructor(
    private _shoppingCartService: ShoppingCartService,
    private _checkoutService: CheckoutService,
    private location: Location
  ) { }

  name: String;
  address: String;
  cardName: String;
  cardNumber: Number;
  cardExpiryMonth: Number;
  cardExpiryYear: Number;
  cardCvc: Number;


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

  elements: any;

  ngAfterViewInit() {
    // initalize elements
    this.elements = this._checkoutService.stripe.elements();
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
