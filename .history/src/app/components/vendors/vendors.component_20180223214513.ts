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

  imagePath: String;
  title: String;
  description: String;
  price: Number;

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
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts()
      .subscribe(Data => {
        this.products = Data;
        console.log(this.products);
      });
    console.log(this.products);
  }

  onSelectObject(item: any) {
    this.selectedProduct = item;
    console.log(this.selectedProduct);
  }



  updateProduct(product: Product) {
    console.log("Click!!");
    this.selectedProduct.imagePath = (<HTMLInputElement>document.getElementById('imagePath')).value;
    this.selectedProduct.title = (<HTMLInputElement>document.getElementById('title')).value;
    this.selectedProduct.description = (<HTMLInputElement>document.getElementById('description')).value;
    this.selectedProduct.price = (<HTMLInputElement>document.getElementById('price')).value;

    // Pushing the savedProduct to my productStore array.
    console.log('Pushing up edited product of: ', this.selectedProduct);

    // Calling addVideo from savedMediaService and passing it my productStore array.
    this._productService.editProduct(this.selectedProduct)
      .subscribe(resSelectedProduct => {
        this.selectedProduct = resSelectedProduct;
        // refresh products
        this.getProducts();
    });
  }


  removeProduct(item: any) {
    console.log('Click!!', item._id);
    // Calling the removeProduct function from productService and passing item
    this._productService.deleteItem(item)
      .subscribe(deleteResp => {
        console.log('Delete Resp: ', deleteResp);
        // refresh products
        this.getProducts();
      });
  }
}
