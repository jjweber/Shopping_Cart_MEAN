import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { ValidateService } from '../../services/validation/validate.service';
import { Product } from './../../product';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  constructor(
    private _productService: ProductService,
    private _flashMessagesService: FlashMessagesService,
    private _validateService: ValidateService,
    private router: Router
  ) { }

  savedProduct: any = {
    imagePath: '',
    title: '',
    description: '',
    price: ''
  };
  productStore: any = [];

  ngOnInit() {

  }

  onRegisterSubmit() {
    const product = {
      imagePath: '',
      title: '',
      description: '',
      price: ''
    };

    // Required feilds
    if (!this._validateService.validateRegister(product)) {
      this._flashMessagesService.show('Please fill out all feilds!', { cssClass: 'alert-danger', timeout: 6000 });
    } else {
      this._flashMessagesService.show('Everything looks good!', { cssClass: 'alert-success' });
    }

    // Validate Email
    if (!this._validateService.validateEmail(product.email)) {
      this._flashMessagesService.show('Please use a valid email format', { cssClass: 'alert-danger', timeout: 6000 });
    } else {
      this._flashMessagesService.show('Email format is correct!', { cssClass: 'alert-success' });
    }

}

  SaveProduct(product: Product) {
    console.log("Click!!");

  }




}
