import { Component, OnInit } from '@angular/core';
var csrf = require('csurf')
var csrfProtection = csrf({ cookie: true })
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
