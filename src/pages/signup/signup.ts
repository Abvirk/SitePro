import { UserService } from './../../dataservices/user.service';
import { Login } from './../login/login';
import { UserSignUp, UserProfile } from './../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

  userSignUp = {} as UserSignUp;
  userProfile = {} as UserProfile;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth: AngularFireAuth, private toast: ToastController, private ufService: UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  async Signup(user: UserSignUp) {
    //  alert('signup');
     await this.afAuth.auth.createUserWithEmailAndPassword(user.Email, user.Password)
      .then(res => {
        this.userProfile.UserId = res.user.uid;
        this.userProfile.UserName = user.UserName;
        this.userProfile.Picture = 'person.png';
        this.userProfile.Phone = user.Phone;
        this.userProfile.Address = 'test';
        let tc = this.toast.create({
          message: `User created.`,
          duration: 3000
        });
        tc.present();
        this.ufService.addUserProfile(this.userProfile);
        this.navCtrl.setRoot(Login);
      }, err => {
        let tc = this.toast.create({
          message: err.message,
          duration: 3000
        });
        tc.present();
      });
  }

}
