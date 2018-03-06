import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-home',
  templateUrl: 'problem-form.html'
})
export class Problem_Form {

  constructor(public navCtrl: NavController) {

  }


  signup(){
    this.navCtrl.push(TabsPage);

  }

}
