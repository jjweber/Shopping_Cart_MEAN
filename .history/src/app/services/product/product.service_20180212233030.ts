import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
const Product = '';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

const express = require('express');
const router = express.Router();

@Injectable()
export class ProductService {

  private _getUrl = '/api/products';

  constructor(private _http: Http) { }

  getProducts() {
    console.log('Fuck You Stupid Asshole');
    Product.find({})
    .exec(function(err, products) {
        if(err) {
        console.log('Error retrieving products');
        } else {
        res.json(products);
        }
    })
    //return this._http.get(this._getUrl)
    //  .map((response: Response) => response.json());
  }

}
