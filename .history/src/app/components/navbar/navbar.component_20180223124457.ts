import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from './../../services/authentication/authentication.service';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    public router: Router,
    private _shoppingCartService: ShoppingCartService
  ) { }

  cartItems: any = [];
  cartAmount: any;

  ngOnInit() {
    this._shoppingCartService.getItems()
    .subscribe(Data => {
      this.cartItems = Data;
      console.log(this.cartItems.le);
    });

    this.cartAmount = this.cartItems.length;
    console.log(this.cartAmount);
  }

}
