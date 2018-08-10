import { Service } from './../../models/service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Problem_Form } from '../problem-form/problem-form'

@Component({
  selector: 'page-home',
  templateUrl: 'service-detail.html'
})
export class Service_Detail {
  service: Service
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.service = navParams.get('item');
  }

  problem_forms() {
    this.navCtrl.push(Problem_Form);
  }

}
