import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
    
  }

  resetWindow() {
    location.reload();
  }

}
