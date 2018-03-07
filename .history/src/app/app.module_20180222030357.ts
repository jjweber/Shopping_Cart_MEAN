import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/user/signin/signin.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { CreateFormComponent } from './components/create-form/create-form.component';

import { ValidateService } from './services/validation/validate.service';
import { SaveUserService } from './services/user/save-user.service';
import { ShoppingCartService } from './services/shopping-cart/shopping-cart.service';
import { AuthenticationService } from './services/authentication/authentication.service';
import { ProductService } from './services/product/product.service';
import { FlashMessagesModule } from 'angular2-flash-messages';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'vendors', component: VendorsComponent },
  { path: 'vendors', component: VendorsComponent },
  { path: 'vendors', component: VendorsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'logout', redirectTo: '/signin', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ShoppingCartComponent,
    UserManagementComponent,
    LoginComponent,
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    VendorsComponent,
    EditFormComponent,
    CreateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    ProductService,
    ValidateService,
    SaveUserService,
    AuthenticationService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
