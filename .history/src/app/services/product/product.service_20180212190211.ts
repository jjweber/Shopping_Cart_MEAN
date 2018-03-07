import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../../../server/models/product';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

  private _getUrl = '/index/products';

  constructor(private _http: Http) { }

  getProducts() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

}
