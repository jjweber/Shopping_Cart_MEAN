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

  onFormSubmit() {

  }

  updateBill(): void {
    this.billService.updateBill(this.bill)
      .subscribe(
        resp => {
          this.router.navigate(['/bills/manage']);
        },
        error =>  this.errorMessage = <any>error
      );

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
