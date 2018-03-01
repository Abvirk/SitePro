import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Payment_Method } from  '../payment-method/payment-method'

@Component({
  selector: 'page-about',
  templateUrl: 'payments.html'
})
export class Payments {

  constructor(public navCtrl: NavController) {

  }

  payment_method(){
    this.navCtrl.push(Payment_Method);
  }



}
