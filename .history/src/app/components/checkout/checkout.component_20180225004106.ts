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
    private cd: ChangeDetectorRef,
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

  checkoutInfo = [];

  elements: any;

  ngAfterViewInit() {
    const style = {
      base: {
        lineHeight: '24px',
        fontFamily: 'monospace',
        fontSmoothing: 'antialiased',
        fontSize: '19px',
        '::placeholder': {
          color: 'purple'
        }
      }
    }

    this.card = elements.create('card');
    this.card.mount(this.cardInfo.nativeElement);

    this.card.addEventListener('change', this.cardHandler);
    this.getCartItems();
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  async onSubmit(form: NgForm) {
    const name = (<HTMLInputElement>document.getElementById('name')).value;
    const address = (<HTMLInputElement>document.getElementById('address')).value;
    const additionalData = {
      name: name ? name : undefined,
      address: address :
    };
    let { token, error } = await stripe.createToken(this.card);
    if (error) {
      console.log('Something is wrong:', error);
    } else {
      console.log('Success!', token);
      // ...send the token to the your backend to process the charge

      this.checkoutInfo = [this.priceTotal, name, address, token];
      console.log('Checkout Array!', this.checkoutInfo);

      // Calling addVideo from savedMediaService and passing it my videoStore array.
      this._checkoutService.makePurchase(this.checkoutInfo)
      .subscribe(resNewVideo => {
        this.productStore.push(resNewVideo);
        this.checkoutInfo = resNewVideo;
        location.reload();
      });
    }
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
