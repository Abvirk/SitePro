import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Order_Detail} from "../order-detail/order-detail";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  orderdetail(){
    this.navCtrl.push(Order_Detail);
  }
}
