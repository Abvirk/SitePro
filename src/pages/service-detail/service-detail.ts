import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Problem_Form } from '../problem-form/problem-form'

@Component({
  selector: 'page-home',
  templateUrl: 'service-detail.html'
})
export class Service_Detail {

  constructor(public navCtrl: NavController) {

  }

  problem_forms(){
    this.navCtrl.push(Problem_Form);
  }

}
