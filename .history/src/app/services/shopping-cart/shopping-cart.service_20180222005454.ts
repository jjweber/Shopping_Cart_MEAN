import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Product } from './../../product';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShoppingCartService {

  private _getUrl = '/api/videos';
  private _postUrl = '/api/video';
  private _deleteUrl = '/api/video/:id';

  constructor() { }

  

}
