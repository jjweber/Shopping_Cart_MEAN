import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _productService: ProductService) { }

  products: any = [];

  ngOnInit() {
    this._productService.getProducts()
    .subscribe(Data => {
      this.products = resProductData;
      console.log(this.products);
    });
  }

}
