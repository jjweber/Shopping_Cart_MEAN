import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
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
    savedProduct: any = {
      imagePath: '',
      title: '',
      description: '',
      price: ''
    }

    // Required feilds
    if (!this.validateService.validateRegister(user)) {
      this._flashMessagesService.show('Please fill out all feilds!', { cssClass: 'alert-danger', timeout: 6000 });
    } else {
      // Register user
      this.authService.registerUser(user)
      .subscribe(data => {
        if (data) {
          this._flashMessagesService.show('You are now registered and can login!', { cssClass: 'alert-success', timeout: 6000 });
          this.router.navigate(['/login']);
        } else {
          this._flashMessagesService.show('Something went wrong!', { cssClass: 'alert-danger', timeout: 6000 });
          this.router.navigate(['/signup']);
        }
      });
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      this._flashMessagesService.show('Please use a valid email format', { cssClass: 'alert-danger', timeout: 6000 });
    } else {
      this._flashMessagesService.show('Email format is correct!', { cssClass: 'alert-success' });
    }

}

  SaveProduct(product: Product) {
    console.log("Click!!");

  }




}
