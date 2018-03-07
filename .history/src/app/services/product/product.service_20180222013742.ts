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
router.post('/update-student/:id', function(req, res, next) {
  var studentId = req.params.id;
  var letterGrade = convertToLetter(req.body.percentage);
  console.log('The student to be removed is: ', studentId);
  Student.findById(studentId)
  .exec(function(err, student) {
      if(err) {
        console.log('Error removing the student');
      } else {
        student.studentName = req.body.name;
        student.studentPercent = req.body.percentage;
        student.studentLetterGrade = letterGrade;

        student.save(function(err, updatedStudent) {
          if(err) {
            console.log('Error updating student');
          } else {
            res.redirect(req.baseUrl + '/');
          }
        });
        console.log(req.body.name, req.body.percentage, letterGrade);
      }
      console.log(student);
  });
});

  deleteProduct(product: Product) {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this._http.post('/api/removeItem', JSON.stringify(product), options)
      .map((response: Response) => response.json());
  }
}
