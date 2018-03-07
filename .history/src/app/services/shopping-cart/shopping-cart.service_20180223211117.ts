import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CartItem } from './../../cart-Item';
import { Product } from './../../product';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShoppingCartService {

  private _getUrl = '/api/cartItems';
  private _postUrl = '/api/saveToCart';
  private _deleteUrl = '/api/product/:id';

  constructor(
    private _http: Http,
  ) { }

  getItems() {
    console.log('I am in the getItems function.');
    return this._http.get(this._getUrl)
    .map((response: Response) => response.json());
  }

  purchaseProduct(cartItem: CartItem) {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(cartItem), options)
      .map((response: Response) => response.json());
  }

  removeCartItem(product: Product) {
    console.log(item);
    return this._http.delete(this._deleteUrl + item._id, JSON.stringify(item))
      .map((response: Response) => response.json());
  }

}
