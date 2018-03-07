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

  imagePath: String;
  title: String;
  description: String;
  price: Number;

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
    this._productService.saveProduct(this.savedProduct)
      .subscribe(resNewProduct => {
        this.savedProduct = resNewProduct;
});
  }




}
