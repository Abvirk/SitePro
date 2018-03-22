import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {FeedbackPage} from "../feedback/feedback";
import {ComplaintsPage} from "../complaints/complaints";
import {Update_Profile} from "../update-profile/update-profile";
import {Change_Password} from "../change-password/change-password";

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
  update_profile(){
    this.navCtrl.push(Update_Profile);
  }
  change_password(){
    this.navCtrl.push(Change_Password);
  }


}
