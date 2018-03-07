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

  ngOnInit() {
    this._productService.getVideos()
    .subscribe(resVideoData => {
      this.media = resVideoData;
      console.log(this.media);
    });
  }

}
