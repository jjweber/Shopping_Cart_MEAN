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

  (function() {
    'use strict';
    const stripe = Stripe('pk_test_leOVDvImSlAU4OqzfLUKaWZx');
    const elements = stripe.elements({
      fonts: [
        {
          cssSrc: 'https://fonts.googleapis.com/css?family=Quicksand',
        },
      ],
      // Stripe's examples are localized to specific languages, but if
      // you wish to have Elements automatically detect your user's locale,
      // use `locale: 'auto'` instead.
      locale: auto,
    });
  
    const elementStyles = {
      base: {
        color: '#fff',
        fontWeight: 600,
        fontFamily: 'Quicksand, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
  
        ':focus': {
          color: '#424770',
        },
  
        '::placeholder': {
          color: '#9BACC8',
        },
  
        ':focus::placeholder': {
          color: '#CFD7DF',
        },
      },
      invalid: {
        color: '#fff',
        ':focus': {
          color: '#FA755A',
        },
        '::placeholder': {
          color: '#FFCCA5',
        },
      },
    };
  
    const elementClasses = {
      focus: 'focus',
      empty: 'empty',
      invalid: 'invalid',
    };
  
    const cardNumber = elements.create('cardNumber', {
      style: elementStyles,
      classes: elementClasses,
    });
    cardNumber.mount('#example3-card-number');
  
    const cardExpiry = elements.create('cardExpiry', {
      style: elementStyles,
      classes: elementClasses,
    });
    cardExpiry.mount('#example3-card-expiry');
  
    const cardCvc = elements.create('cardCvc', {
      style: elementStyles,
      classes: elementClasses,
    });
    cardCvc.mount('#example3-card-cvc');
  
    registerElements([cardNumber, cardExpiry, cardCvc], 'example3');
  })();

}
