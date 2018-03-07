import { Component, OnInit } from '@angular/core';
var csrf = require('csurf');

var csrfProtection = csrf({ cookie: true });

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const csurfToken = this.csurfToken;
  }

}
