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

  onFormSubmit() {
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

}

  SaveProduct(product: Product) {
    console.log("Click!!");
    this.savedProduct.imagePath = (<HTMLInputElement>document.getElementById('imagePath')).value;
    this.savedProduct.title = (<HTMLInputElement>document.getElementById('title')).value;
    this.savedProduct.description = (<HTMLInputElement>document.getElementById('description')).value;
    this.savedProduct.price = (<HTMLInputElement>document.getElementById('price')).value;

    // Pushing the selectedVideo to my videoStore array.
    console.log('Pushing up saved product of: ', this.savedProduct);

    // Calling addVideo from savedMediaService and passing it my videoStore array.
    this._productService.addUser(this.savedProduct)
      .subscribe(resNewProduct => {
        this.savedProduct = resNewProduct;
});
  }




}
