import { CartItem } from './../../../../.history/src/app/cart-Item_20180222194518';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ProductService } from '../../services/product/product.service';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { CartItem } from './../../cart-Item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _productService: ProductService,
    private _shoppingCartService: ShoppingCartService
  ) { }

  imagePath: String;
  title: String;
  description: String;
  price: Number;

  savedItem: any = {
    imagePath: '',
    title: '',
    description: '',
    price: ''
  };

  selectedProduct: any = {};
  productStore: any = [];

  ngOnInit() {
    this._productService.getProducts()
    .subscribe(Data => {
      this.products = Data;
      console.log(this.products);
    });

    const productChunks = [];
    const chunkSize = 3;
    for (let index = 0; index < this.products.length; index++) {
      productChunks.push(this.products[index]);

    }
    console.log(this.products);
  }

  onSelectObject(item: any) {
    this.selectedItem = item;
    console.log(this.selectedItem);
  }


  SaveItemToCart(cartItem: CartItem) {
    console.log("Click!!");
    this.savedProduct.imagePath = (<HTMLInputElement>document.getElementById('imagePath')).value;
    this.savedProduct.title = (<HTMLInputElement>document.getElementById('title')).value;
    this.savedProduct.description = (<HTMLInputElement>document.getElementById('description')).value;
    this.savedProduct.price = (<HTMLInputElement>document.getElementById('price')).value;

    // Pushing the savedProduct to my productStore array.
    console.log('Pushing up saved product of: ', this.savedProduct);

    // Calling addVideo from savedMediaService and passing it my productStore array.
    this._productService.saveProduct(this.savedProduct)
      .subscribe(resNewProduct => {
        this.savedProduct = resNewProduct;
    });
  }
}
