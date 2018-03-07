import { Component, OnInit } from '@angular/core';
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
    private _shoppingCartService: ShoppingCartService
  ) { }

  cartItem: any = [];


  ngOnInit() {
    this._shoppingCartService.getItems()
    .subscribe(Data => {
      this.cartItem = Data;
      console.log(this.cartItem);
    });
    console.log(this.cartItem);
  }

}
