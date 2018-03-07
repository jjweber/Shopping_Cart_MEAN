import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ShoppingCartService } from '../../services/product/product.service';
import { CartItem } from './../../cart-Item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private _productService: ProductService
  ) { }

  cartItem: any = [];


  ngOnInit() {
    this._productService.getProducts()
    .subscribe(Data => {
      this.cartItem = Data;
      console.log(this.cartItem);
    });
    console.log(this.cartItem);
  }

}
