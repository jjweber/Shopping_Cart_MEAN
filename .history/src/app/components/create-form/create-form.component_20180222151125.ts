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
    this._productService.getProducts()
    .subscribe(Data => {
      this.products = Data;
      console.log(this.products);
    });
    console.log(this.products);
  }

  Save() {
    console.log("Click!!");
  }

  SaveProduct (product: any) {

    // Pushing the selectedVideo to my productStore array.
    console.log('Pushing up saved product of: ', this.selectedItem);

    // Calling saveProduct from productService and passing it my productStore array.
    this._productService.saveProduct(this.selectedItem)
      .subscribe(resNewProduct => {
        this.productStore.push(resNewProduct);
        this.selectedItem = resNewProduct;
      });
}

}
