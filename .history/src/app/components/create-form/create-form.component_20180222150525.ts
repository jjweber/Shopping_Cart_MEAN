import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

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
  productStore: any = [];

  ngOnInit() {
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

  SaveProduct() {
    console.log("Click!!");
  }

}
