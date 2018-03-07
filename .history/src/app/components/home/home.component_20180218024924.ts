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
  selectedItem: any = {};

  ngOnInit() {
    this._productService.getProducts()
    .subscribe(Data => {
      this.products = Data;
      console.log(this.products);
    });

    const productChunks = [];
    const chunkSize = 3;
    for (let index = 0; index < this.products.length; index += chunkSize) {
      productChunks.push(this.products.s[index]);

    }
  }

  onSelectObject(item: any) {
    this.selectedItem = item;
    console.log(this.selectedItem);
  }

  removeContent(content: any) {
    // Calling addVideo from savedMediaService and passing it my videoStore array.
    // this._savedMediaService.deleteVideo(this.selectedContent);

  }

}
