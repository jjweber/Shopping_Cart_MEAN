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

  SaveProduct() {
    console.log("Click!!");
  }

  SaveVideo (video: any) {

    // Pushing the selectedVideo to my videoStore array.
    console.log('Pushing up saved video of: ', this.selectedItem);

    // Calling addVideo from savedMediaService and passing it my videoStore array.
    this._productService.addVideo(this.selectedItem)
      .subscribe(resNewVideo => {
        this.productStore.push(resNewVideo);
        this.selectedVideo = resNewVideo;
      });
}

}
