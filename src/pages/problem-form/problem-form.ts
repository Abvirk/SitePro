import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Signup } from '../signup/signup';
@Component({
  selector: 'page-home',
  templateUrl: 'problem-form.html'
})
export class Problem_Form {

  constructor(public navCtrl: NavController) {

  }


  signup(){
    this.navCtrl.push(Signup);

  }

}
