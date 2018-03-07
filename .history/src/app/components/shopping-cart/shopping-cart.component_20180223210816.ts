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

  cartItems: any = [];
  priceTotal = 0;

  ngOnInit() {

    this.getProducts();


  }

  getProducts() {
    this._shoppingCartService.getItems()
      .subscribe(Data => {
        this.products = Data;
        console.log(this.products);
      });
    console.log(this.products);
  }

  getTotal() {
    for (var item of this.cartItems) {
      console.log(item);
    }
  }

  removeProduct(item: any) {
    console.log('Click!!', item._id);
    // Calling the removeProduct function from productService and passing item
    this._shoppingCartService.deleteItem(item)
      .subscribe(deleteResp => {
        console.log('Delete Resp: ', deleteResp);
        // refresh products
        this.getProducts();
      });
  }

}
