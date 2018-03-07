import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../../services/validation/validate.service';
import { AuthenticationService } from './../../../services/authentication/authentication.service';
import { SaveUserService } from './../../../services/user/save-user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private saveUserService: SaveUserService,
    private validateService: ValidateService,
    private authService: AuthenticationService,
    private router: Router,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    if (!this.validateService.validateLogin(user)) {
      this._flashMessagesService.show('Please fill out all fields!', { cssClass: 'alert-danger', timeout: 6000 });
    } else {
      // Login user
      this.authService.authenticateUser(user)
      .subscribe(data => {
        if (data.success === false) {
          console.log('Its false');
          this._flashMessagesService.show('User not found!', { cssClass: 'alert-danger', timeout: 6000 });
        } else {
          this.router.navigate(['/home']);
        }
      });
    }
  }

}
