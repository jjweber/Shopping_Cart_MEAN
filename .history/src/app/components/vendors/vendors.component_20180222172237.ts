import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ProductService } from '../../services/product/product.service';
import { Product } from './../../product';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  constructor(
    private _productService: ProductService
  ) { }

  products: any = [];
  selectedItem: any = {
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
    console.log(this.products);
  }


  removeProduct(item: any) {
    console.log('Click!!', item._id);
    // Calling the removeFavorite function from favoritesService and passing it the article to remove from localStorage.
    this._productService.removeFavorite(this.indexOfArticleViewed);



  }
}
