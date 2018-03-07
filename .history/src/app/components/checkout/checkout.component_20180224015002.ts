import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

}
