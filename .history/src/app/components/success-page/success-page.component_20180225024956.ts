import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements AfterViewInit {

  constructor(
    private location: Location
  ) { }

  AfterViewInit() {
  }



}
