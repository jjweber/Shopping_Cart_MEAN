import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../../services/validation/validate.service';
import { AuthenticationService } from './../../../services/authentication/authentication.service';
impo

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

  constructor(
    private saveUserService: SaveUserService,
    private validateService: ValidateService,
    private authService: AuthenticationService,
    private _flashMessagesService: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {

  }
}
