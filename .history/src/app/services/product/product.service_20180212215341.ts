import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';



// const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');


@Injectable()
export class ProductService {

  private _getUrl = '/api/products';

  constructor(private _http: Http) { }

  getProducts() {
    Product.find({})
    .exec(function(err, products) {
        if(err) {
        console.log('Error retrieving products');
        } else {
        res.json(products);
        }
    })
  }

}
