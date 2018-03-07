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

  constructor(private _http: Http) { }

  getProducts() {
    console.log(object);
    //return this._http.get(this._getUrl)
    //  .map((response: Response) => response.json());
  }

}
