import { UserService } from './../dataservices/user.service';
import { ServiceListService } from './../dataservices/service-list.service';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { NgModule, ErrorHandler  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// ................
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { Forget_Password } from '../pages/forget-password/forget-password';

import { Payments } from '../pages/payments/payments';
import { SplashscreenPage } from '../pages/splashscreen/splashscreen';
import { Payment_Method } from '../pages/payment-method/payment-method';
import { Order_Detail } from '../pages/order-detail/order-detail';

import { Rating } from '../pages/rating/rating';
import { Service_Detail } from '../pages/service-detail/service-detail';
import { Problem_Form } from '../pages/problem-form/problem-form';
import { SettingsPage } from '../pages/settings/settings';
import { FeedbackPage } from '../pages/feedback/feedback';
import { Update_Profile } from '../pages/update-profile/update-profile';
import { ComplaintsPage } from '../pages/complaints/complaints';
import { Change_Password } from '../pages/change-password/change-password';
import { Order_Success } from '../pages/order-success/order-success';



// ................
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    // ...............
    Login,
    Signup,
    Update_Profile,
    Service_Detail,
    Problem_Form,
    Order_Detail,
    Payments,
    Change_Password,
    Payment_Method,
    Forget_Password,
    Order_Success,
    Rating,
    SplashscreenPage,
    // ...............

    ContactPage,
    SettingsPage,
    FeedbackPage,
    HomePage,
    ComplaintsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3PyCuZuPZCmuU7Wkh1h1w4LBSo6Md3t8'})

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // ...............
    Login,
    Signup,
    Forget_Password,
    Service_Detail,
    Problem_Form,
    Order_Detail,
    Payments,
    Payment_Method,
    Rating,
    // ...............
    AboutPage,
    Order_Success,
    ContactPage,
    SettingsPage,
    FeedbackPage,
    ComplaintsPage,
    SplashscreenPage,
    Update_Profile,
    Change_Password,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    GoogleMaps,
    AgmCoreModule,
    ServiceListService,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]

})


export class AppModule {}
