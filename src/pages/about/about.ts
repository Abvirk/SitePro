import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Payments} from '../payments/payments';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  accept(){
    this.navCtrl.push(Payments);
  }

}
