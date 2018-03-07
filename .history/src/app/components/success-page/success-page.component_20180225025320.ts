import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements AfterViewInit, OnDestroy {

  constructor(
    private location: Location
  ) { }

  AfterViewInit() {
    location.reload();
  }



}
