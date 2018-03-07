import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
    private _shoppingCartService: ShoppingCartService,
    private location: Location
  ) { }

  products: any = [];
  selectedItem: any = {
    imagePath: '',
    title: '',
    description: '',
    price: ''
  };
  productStore: any = [];

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
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

  SaveItemToCart(item: any) {

    this.selectedItem = item;

    // Pushing the selectedVideo to my videoStore array.
    console.log('Pushing up cart item of: ', this.selectedItem);

    // Calling addVideo from savedMediaService and passing it my videoStore array.
    this._shoppingCartService.purchaseProduct(this.selectedItem)
      .subscribe(resNewVideo => {
        this.productStore.push(resNewVideo);
        this.selectedItem = resNewVideo;
        location.reload();

        this.getProducts();
    });

  }

  SaveItemToCartFromModal(item: any) {
    // Pushing the selectedVideo to my videoStore array.
    console.log('Pushing up cart item of: ', this.selectedItem);

    // Calling addVideo from savedMediaService and passing it my videoStore array.
    this._shoppingCartService.purchaseProduct(this.selectedItem)
      .subscribe(resNewVideo => {
        this.productStore.push(resNewVideo);
        this.selectedItem = resNewVideo;
        this.getProducts();
    });

  }
}
