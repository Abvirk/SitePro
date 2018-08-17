import { Login } from './../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Signup } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class Forget_Password {
  email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth: AngularFireAuth, private toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPasswordPage');
  }

  ResetPassword() {
    this.afAuth.auth.sendPasswordResetEmail(this.email)
      .then(res => {
        let toast = this.toast.create({
          message: 'Password reset link is sent to you email.',
          duration: 3000
        });
        toast.present();
        this.navCtrl.push(Login);
      }, err => {
        let toast = this.toast.create({
          message: err.message,
          duration: 3000
        });
        toast.present();
      });

  }


}
