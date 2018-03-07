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
  private _postUrl = '/api/product/:id';
  private _deleteUrl = '/api/removeItem';

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

  /******************************/
/* POST Update Student Route. */
/******************************/
router.post('/update-product/:id', function(req, res, next) {
  var productId = req.params.id;
  console.log('The product to be updated is: ', productId);
  Product.findById(productId)
  .exec(function(err, product) {
      if(err) {
        console.log('Error removing the student');
      } else {
        product.studentName = req.body.name;
        product.studentPercent = req.body.percentage;

        product.save(function(err, updatedproduct) {
          if(err) {
            console.log('Error updating product');
          } else {
            res.redirect(req.baseUrl + '/');
          }
        });
        console.log(req.body.name, req.body.percentage);
      }
      console.log(product);
  });
});

  deleteProduct(product: Product) {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this._http.post('/api/removeItem', JSON.stringify(product), options)
      .map((response: Response) => response.json());
  }
}
