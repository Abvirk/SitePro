import { Login } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FeedbackPage } from "../feedback/feedback";
import { ComplaintsPage } from "../complaints/complaints";
import { Update_Profile } from "../update-profile/update-profile";
import { Change_Password } from "../change-password/change-password";
//import { FirebaseAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {

  }

  feedback() {
    this.navCtrl.push(FeedbackPage);
  }
  complaint() {
    this.navCtrl.push(ComplaintsPage);
  }
  update_profile() {
    this.navCtrl.push(Update_Profile);
  }
  change_password() {
    this.navCtrl.push(Change_Password);
  }

  Logout() {
   
  }


}
