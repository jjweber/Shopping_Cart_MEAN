import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from './../../product';

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

  }

  Save() {
    console.log("Click!!");
  }

  SaveProduct (product: any, req) {

    const newProduct = new Product();
    newProduct.imagePath = req.body.imagePath,
    newProduct.title = req.body.title,
    newProduct.description = req.body.description,
    newProduct.price = req.body.price
    // Calling saveProduct from productService and passing it my productStore array.
    this._productService.saveProduct(newProduct)
      .subscribe(resNewProduct => {
        this.productStore.push(newProduct);
      });

    // Pushing the selectedVideo to my productStore array.
    console.log('Pushing up saved product of: ', newProduct);

}

}
