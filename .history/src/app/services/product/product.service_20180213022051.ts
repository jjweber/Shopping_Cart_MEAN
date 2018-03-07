import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
const Product = '../models/product';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

  private _getUrl = '/api/products';
  resu
  constructor(private http: Http) { }

  getProducts() {
    console.log('Fuck You Stupid Asshole');
    return this.http.get(this._getUrl)
    .map((response: Response) => response.json());
  }

}
