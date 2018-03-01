import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Service_Detail} from '../service-detail/service-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  servicesdetail(){
    this.navCtrl.push(Service_Detail);
  }

}
