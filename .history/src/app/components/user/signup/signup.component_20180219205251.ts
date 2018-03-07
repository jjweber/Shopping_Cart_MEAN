import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

  errors: any = {};
  savedUser: any = {
    username: '',
    email: '',
    password: ''
  };
  userStore: any = [];
  constructor() { }

  ngOnInit() {
  }

  onRegisterSubmit() {

  }
}
