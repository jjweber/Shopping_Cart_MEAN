import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../../services/validation/validate.service';
import { AuthenticationService } from './../../../services/authentication/authentication.service';
import { SaveUserService } from './../../../services/user/save-user.service';

import { User } from '../../../user';

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
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    };

    // Required feilds
    if (!this.validateService.validateRegister(user)) {
      this._flashMessagesService.show('Please fill out all feilds!', { cssClass: 'alert-danger', timeout: 6000 });
    } else {
      // Register user
      this.authService.registerUser(user)
      .subscribe(data => {
        if (data) {
          this._flashMessagesService.show('You are now registered and can login!', { cssClass: 'alert-success', timeout: 6000 });
          this.router.navigate(['/login']);
        } else {
          this._flashMessagesService.show('Something went wrong!', { cssClass: 'alert-danger', timeout: 6000 });
          this.router.navigate(['/signup']);
        }
      });
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      this._flashMessagesService.show('Please use a valid email format', { cssClass: 'alert-danger', timeout: 6000 });
    } else {
      this._flashMessagesService.show('Email format is correct!', { cssClass: 'alert-success' });
    }

  }

  SaveUser () {
    this.savedUser.name = (<HTMLInputElement>document.getElementById('name')).value;
    this.savedUser.username = (<HTMLInputElement>document.getElementById('username')).value;
    this.savedUser.email = (<HTMLInputElement>document.getElementById('email')).value;
    this.savedUser.password = (<HTMLInputElement>document.getElementById('password')).value;

    // Pushing the selectedVideo to my videoStore array.
    console.log('Pushing up saved user of: ', this.savedUser);

    // Calling addVideo from savedMediaService and passing it my videoStore array.
    this.saveUserService.addUser(this.savedUser)
      .subscribe(resNewUser => {
        this.savedUser = resNewUser;
      });
  }
}
