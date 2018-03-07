import { Injectable } from '@angular/core';

@Injectable()
export class CheckoutService {

  constructor() { }
  stripe = Stripe('pk_test_XXXXX');
}
