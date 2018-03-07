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

}

  SaveProduct(product: Product) {
    console.log("Click!!");
    this.savedProduct.name = (<HTMLInputElement>document.getElementById('namefield')).value;
    this.savedProduct.username = (<HTMLInputElement>document.getElementById('usernamefield')).value;
    this.savedProduct.email = (<HTMLInputElement>document.getElementById('emailfield')).value;
    this.savedProduct.password = (<HTMLInputElement>document.getElementById('passwordfield')).value;
    this.savedProduct.password2 = (<HTMLInputElement>document.getElementById('passwordfield2')).value;

    // Pushing the selectedVideo to my videoStore array.
    console.log('Pushing up saved video of: ', this.savedUser);

    // Calling addVideo from savedMediaService and passing it my videoStore array.
    this.saveUserService.addUser(this.savedUser)
      .subscribe(resNewUser => {
        this.savedUser = resNewUser;
});
  }




}
