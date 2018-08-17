import { TabsPage } from './../tabs/tabs';
import { Signup } from './../signup/signup';
import { UserAuth } from './../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Forget_Password } from '../forget-password/forget-password';
import { AngularFireAuth } from 'angularfire2/auth';
//import { create } from 'domain';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  user = {} as UserAuth;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth: AngularFireAuth, public toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(user: UserAuth) {
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.Email, user.Password)
      .then(res => {
        this.navCtrl.setRoot(TabsPage);
      }, err => {
        let tc = this.toast.create({
          message: err.message,
          duration: 3000
        });
        tc.present();
      });

  }

  signup() {
    this.navCtrl.push(Signup);
  }


  forgetpassword() {
    this.navCtrl.push(Forget_Password);

  }

}
