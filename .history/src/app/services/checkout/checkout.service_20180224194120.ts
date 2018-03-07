import { Injectable } from '@angular/core';

@Injectable()
export class CheckoutService {

  constructor() { }

  purchaseProduct(payment: any) {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(cartItem), options)
      .map((response: Response) => response.json());
  }
}
