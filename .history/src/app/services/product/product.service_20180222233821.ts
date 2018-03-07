import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './../../product';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

  private _getUrl = '/api/products';
  private _postUrl = '/api/product-save';
  private _updateUrl = '/api/update-product';
  private _deleteUrl = '/api/product-remove';

  constructor(private _http: Http) { }

  getProducts() {
    console.log('I am in the getProducts function.');
    return this._http.get('api/products')
    .map((response: Response) => response.json());
  }

  saveProduct(product: Product) {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(product), options)
      .map((response: Response) => response.json());
  }

  editProduct(item: any) {
    console.log(item._id);
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this._http.post(this._updateUrl, JSON.stringify(item), options)
      .map((response: Response) => response.json());
  }

  // Function that is passed the selected item to remove from localStorage.
  removeProduct(product: Product) {
    return this._http.get('/api/remove/'+product._id).subscribe(data => {
      product. = data;
    });
  }
}
