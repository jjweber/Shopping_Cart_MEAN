import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CartItem } from './../../cart-Item';
import { Product } from './../../product';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CheckoutService {

  private _postUrl = '/api/checkout';

  constructor(
    
  ) { }

  purchaseProduct(payment: any) {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(cartItem), options)
      .map((response: Response) => response.json());
  }
}
