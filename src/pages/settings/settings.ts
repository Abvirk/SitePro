import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FeedbackPage} from "../feedback/feedback";
import {ComplaintsPage} from "../complaints/complaints";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {

  }

  feedback(){
    this.navCtrl.push(FeedbackPage);
  }
  complaint(){
    this.navCtrl.push(ComplaintsPage);
  }


}
