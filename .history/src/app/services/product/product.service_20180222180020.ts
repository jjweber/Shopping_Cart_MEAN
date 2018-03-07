import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './../../product';
const mongoose = require('mongoose');

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

  private _getUrl = '/api/products';
  private _postUrl = '/api/product-save';
  private _deleteUrl = '/api/product-remove/:id';

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

  // Function that is passed the selected item to remove from localStorage.
  removeProduct(item, function(req, res) {
    console.log('Deleting a product');
    Product.findByIdAndRemove(req.params._id, function(err, deletedProduct) {
        if(err) {
        res.send('Error deleting product');
        } else {
        res.json(deletedProduct);
        }
    });
  }
}
