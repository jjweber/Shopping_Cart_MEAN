import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
const Product = '../models/product';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {

  private _getUrl = 'home/api/products';

  constructor(private http:HttpClient) { }

  getProducts() {
    console.log('Fuck You Stupid Asshole');
    return this.http.get('local/api/products');
    //return this.http.get(this._getUrl)
    //.map((response: Response) => response.json());
  }

}
