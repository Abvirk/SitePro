webpackJsonp([13],{

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Change_Password; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Change_Password = (function () {
    function Change_Password(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Change_Password.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Change_PasswordPage');
    };
    Change_Password = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\change-password\change-password.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Change Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="background">\n\n    <div class="margin">\n\n\n\n  <ion-item>\n\n    <ion-label> <ion-icon ios="ios-key" md="md-key"></ion-icon></ion-label>\n\n    <ion-input type="password" placeholder="Password"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label> <ion-icon ios="ios-key" md="md-key"></ion-icon></ion-label>\n\n    <ion-input type="password" placeholder="Confirm Password"></ion-input>\n\n  </ion-item>\n\n\n\n  <div class="buttons">\n\n    <button ion-button block color="danger" (click)="tabspages()">Change Password</button>\n\n\n\n  </div>\n\n  </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\change-password\change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Change_Password);
    return Change_Password;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ComplaintsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComplaintsPage = (function () {
    function ComplaintsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ComplaintsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComplaintsPage');
    };
    ComplaintsPage.prototype.complaints = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    ComplaintsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-complaints',template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\complaints\complaints.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>Share Your  Complaint</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="problem_form">\n\n  <br>\n\n  <div class="  background">\n\n    <div class="margin">\n\n  <ion-item>\n\n    <ion-input placeholder="Complaint Title" clearInput></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-textarea placeholder="Explain Your Complaint"></ion-textarea>\n\n  </ion-item>\n\n\n\n\n\n  <br>\n\n  <div >\n\n\n\n    <button ion-button block color="danger"  (click)="complaints()">Complaint</button>\n\n  </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\complaints\complaints.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ComplaintsPage);
    return ComplaintsPage;
}());

//# sourceMappingURL=complaints.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Payment_Method; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_success_order_success__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PaymentMethodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Payment_Method = (function () {
    function Payment_Method(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Payment_Method.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentMethodPage');
    };
    Payment_Method.prototype.order_success = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__order_success_order_success__["a" /* Order_Success */]);
    };
    Payment_Method = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment-method',template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\payment-method\payment-method.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>Payment Method</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content  class="margin-top" id="payment_method" padding>\n\n  <div class="  background">\n\n    <div class="margin">\n\n      <h2>CHECKOUT</h2>\n\n       <h1>\n\n        <ion-icon ios="ios-card" md="md-card"></ion-icon></h1>\n\n<br>\n\n      <ion-item>\n\n        <ion-label> <ion-icon ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n\n        <ion-input type="text" placeholder="Card Holder Name"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label> <ion-icon ios="ios-card" md="md-card"></ion-icon></ion-label>\n\n        <ion-input type="number" placeholder="Card Number"></ion-input>\n\n      </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label> <ion-icon ios="ios-calendar-outline" md="md-calendar-outline "></ion-icon></ion-label>\n\n          <ion-input type="date" placeholder=""></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label> <ion-icon ios="ios-card-outline" md="md-card-outline"></ion-icon></ion-label>\n\n          <ion-input type="number" placeholder="CVC"></ion-input>\n\n        </ion-item>\n\n       <br>\n\n  <div padding>\n\n  <button ion-button block color="danger" (click)="order_success()" >$65</button>\n\n  </div>\n\n</div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\payment-method\payment-method.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Payment_Method);
    return Payment_Method;
}());

//# sourceMappingURL=payment-method.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order_Success; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the OrderSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Order_Success = (function () {
    function Order_Success(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Order_Success.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderSuccessPage');
    };
    Order_Success.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    Order_Success = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-success',template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\order-success\order-success.html"*/'\n\n\n\n<ion-content padding>\n\n  <h1>\n\n    <ion-icon ios="ios-checkmark-circle-outline" md="md-checkmark-circle"></ion-icon>\n\n  </h1>\n\n<h5>ORDER  PLACED  SUCCESSFULLY ! </h5>\n\n  <p class="thanks"> THANKS  FOR  YOUR ORDER</p>\n\n<br>\n\n  <p class="back" (click)="back()">BACK</p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\order-success\order-success.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Order_Success);
    return Order_Success;
}());

//# sourceMappingURL=order-success.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order_Detail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Order_Detail = (function () {
    function Order_Detail(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lat = 29.385472;
        this.lng = 71.716398;
    }
    Order_Detail.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderDetailPage');
    };
    Order_Detail.prototype.accept = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    Order_Detail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-detail',template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\order-detail\order-detail.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>Order Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <img src="././assets/imgs/piping.jpg" >\n\n  <div class="margin background">\n\n    <div class="margin">\n\n      <h1>PIPING</h1>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-8 class="estimate">\n\n        Pipe Repairing\n\n      </ion-col>\n\n      <ion-col class="text-align">\n\n        $65/ft\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <p class="margin-left-right">\n\n    There is  a  problem  in  water pipe, there is  a water leakage from joint .\n\n  </p>\n\n    </div>\n\n\n\n      <agm-map [latitude]="lat" [longitude]="lng">\n\n        <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>\n\n      </agm-map>\n\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\order-detail\order-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Order_Detail);
    return Order_Detail;
}());

//# sourceMappingURL=order-detail.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback_feedback__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complaints_complaints__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_profile_update_profile__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__change_password_change_password__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { FirebaseAuth } from 'angularfire2/auth';
var SettingsPage = (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage.prototype.feedback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__feedback_feedback__["a" /* FeedbackPage */]);
    };
    SettingsPage.prototype.complaint = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__complaints_complaints__["a" /* ComplaintsPage */]);
    };
    SettingsPage.prototype.update_profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__update_profile_update_profile__["a" /* Update_Profile */]);
    };
    SettingsPage.prototype.change_password = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__change_password_change_password__["a" /* Change_Password */]);
    };
    SettingsPage.prototype.Logout = function () {
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n  <ion-list-header class="settings_header">\n\n   <ion-icon ios="ios-cog" md="md-cog"></ion-icon> Settings\n\n  </ion-list-header>\n\n\n\n    <button ion-item (click)="update_profile()">\n\n      <ion-avatar item-start>\n\n        <img src="././assets/imgs/12.jpg" >\n\n      </ion-avatar>\n\n      Profile\n\n    </button>\n\n\n\n  <button ion-item (click)="feedback()">\n\n    <ion-icon ios="ios-send" md="md-send"></ion-icon>Feeback\n\n</button>\n\n  <button ion-item (click)="change_password()">\n\n    <ion-icon ios="ios-key" md="md-key"></ion-icon> Change Password\n\n</button>\n\n  <button ion-item (click)="complaint()">\n\n    <ion-icon ios="ios-paper" md="md-paper" ></ion-icon> Register A Complaint\n\n</button>\n\n  <button ion-item>\n\n    <ion-icon ios="ios-log-out" md="md-log-out" (click)="Logout()"></ion-icon> Logout\n\n  </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackPage = (function () {
    function FeedbackPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbackPage');
    };
    FeedbackPage.prototype.feedback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\feedback\feedback.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Feedback</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="feedback">\n\n  <div class="margin-top">\n\n    <div class="  background">\n\n      <div class="margin">\n\n\n\n      <ion-textarea type="text" placeholder="Type your  Views Here"></ion-textarea>\n\n\n\n    <br>\n\n    <div >\n\n      <button ion-button block color="danger"  (click)="feedback()">Feedback</button>\n\n    </div>\n\n  </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\feedback\feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Update_Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UpdateProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Update_Profile = (function () {
    function Update_Profile(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Update_Profile.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Update_Profile');
    };
    Update_Profile.prototype.tabspages = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    Update_Profile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-profile',template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\update-profile\update-profile.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Update Profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="background">\n\n    <div class="margin">\n\n  <ion-item >\n\n    <ion-avatar >\n\n\n\n      <img src="././assets/imgs/12.jpg" >\n\n    </ion-avatar>\n\n\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label> <ion-icon ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n\n    <ion-input type="text" value="Shama Hyder"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label> <ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n\n    <ion-input type="email" value="shama.hyder11@gmail.com"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label> <ion-icon ios="ios-call" md="md-call"></ion-icon></ion-label>\n\n    <ion-input type="text" value="+92-345-806868-2"></ion-input>\n\n  </ion-item>\n\n<br>\n\n  <div class="buttons" padding>\n\n    <button ion-button block color="danger" (click)="tabspages()">Update Profile</button>\n\n\n\n  </div>\n\n  </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\update-profile\update-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Update_Profile);
    return Update_Profile;
}());

//# sourceMappingURL=update-profile.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Forget_Password; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Forget_Password = (function () {
    function Forget_Password(navCtrl, navParams, afAuth, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.toast = toast;
    }
    Forget_Password.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetPasswordPage');
    };
    Forget_Password.prototype.ResetPassword = function () {
        var _this = this;
        this.afAuth.auth.sendPasswordResetEmail(this.email)
            .then(function (res) {
            var toast = _this.toast.create({
                message: 'Password reset link is sent to you email.',
                duration: 3000
            });
            toast.present();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* Login */]);
        }, function (err) {
            var toast = _this.toast.create({
                message: err.message,
                duration: 3000
            });
            toast.present();
        });
    };
    Forget_Password = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-forget-password',template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\forget-password\forget-password.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Reset Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="forget_password">\n\n  <div class=" background">\n\n    <div class="margin">\n\n  <ion-item>\n\n    <ion-label> <ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n\n    <ion-input type="email" [(ngModel)]="email" placeholder="Enter Your Email"></ion-input>\n\n  </ion-item>\n\n    <br>\n\n    <div padding>\n\n  <button ion-button block color="danger"  (click)="ResetPassword()">Reset</button>\n\n  </div>\n\n  </div>\n\n    </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\forget-password\forget-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ToastController */]])
    ], Forget_Password);
    return Forget_Password;
}());

//# sourceMappingURL=forget-password.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dataservices_user_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var Signup = (function () {
    function Signup(navCtrl, navParams, afAuth, toast, ufService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.toast = toast;
        this.ufService = ufService;
        this.userSignUp = {};
        this.userProfile = {};
    }
    Signup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    Signup.prototype.Signup = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //  alert('signup');
                    return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.Email, user.Password)
                            .then(function (res) {
                            _this.userProfile.UserId = res.user.uid;
                            _this.userProfile.UserName = user.UserName;
                            _this.userProfile.Picture = 'person.png';
                            _this.userProfile.Phone = user.Phone;
                            _this.userProfile.Address = 'test';
                            var tc = _this.toast.create({
                                message: "User created.",
                                duration: 3000
                            });
                            tc.present();
                            _this.ufService.addUserProfile(_this.userProfile);
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* Login */]);
                        }, function (err) {
                            var tc = _this.toast.create({
                                message: err.message,
                                duration: 3000
                            });
                            tc.present();
                        })];
                    case 1:
                        //  alert('signup');
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Signup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\signup\signup.html"*/'<ion-content padding id="signup">\n\n  <div class="image1">\n\n    <img src="././assets/icon/icon.png">\n\n  </div>\n\n\n\n  <div padding id="margin-top">\n\n\n\n    <ion-item>\n\n      <ion-label>\n\n        <ion-icon ios="ios-contact" md="md-contact"></ion-icon>\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="Full Name" [(ngModel)]="userSignUp.UserName"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>\n\n        <ion-icon ios="ios-mail" md="md-mail"></ion-icon>\n\n      </ion-label>\n\n      <ion-input type="email" placeholder="Email" [(ngModel)]="userSignUp.Email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>\n\n        <ion-icon ios="ios-key" md="md-key"></ion-icon>\n\n      </ion-label>\n\n      <ion-input type="password" placeholder="Password" [(ngModel)]="userSignUp.Password"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>\n\n        <ion-icon ios="ios-call" md="md-call"></ion-icon>\n\n      </ion-label>\n\n      <ion-input type="number" placeholder="Number" [(ngModel)]="userSignUp.Phone"></ion-input>\n\n    </ion-item>\n\n\n\n    <!--\n\n      <ion-item>\n\n        <ion-label> Gender</ion-label>\n\n        <ion-select [(ngModel)]="gender">\n\n          <ion-option value="male">Male</ion-option>\n\n          <ion-option value="female">Female</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    -->\n\n    <br>\n\n\n\n    <div class="buttons">\n\n      <button ion-button block color="danger" (click)="Signup(userSignUp)">Signup</button>\n\n    </div>\n\n  </div>\n\n  <br>\n\n  <!--<div class="image2">-->\n\n  <!--<img src="././assets/icon/icon2.png">-->\n\n  <!--</div>-->\n\n</ion-content>'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__dataservices_user_service__["a" /* UserService */]])
    ], Signup);
    return Signup;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashscreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SplashscreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplashscreenPage = (function () {
    function SplashscreenPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
        }, 2500);
    }
    SplashscreenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplashscreenPage');
    };
    SplashscreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splashscreen',template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\splashscreen\splashscreen.html"*/'<!--\n\n  Generated template for the SplashscreenPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content padding>\n\n  <img src="././assets/imgs/splash.gif" >\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\splashscreen\splashscreen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SplashscreenPage);
    return SplashscreenPage;
}());

//# sourceMappingURL=splashscreen.js.map

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 211;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(db) {
        this.db = db;
        this.userProfileList = this.db.list("Profiles");
    }
    UserService.prototype.getUserProfiles = function () {
        return this.userProfileList;
    };
    UserService.prototype.addUserProfile = function (profile) {
        this.userProfileList.push(profile);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServiceListService = (function () {
    function ServiceListService(db) {
        this.db = db;
        this.serviceListRef = this.db.list("Services");
        //this.serviceListRef = this.db.list<Service>("Services");
    }
    ServiceListService.prototype.getServiceList = function () {
        return this.serviceListRef;
    };
    ServiceListService.prototype.addService = function (service) {
        return this.serviceListRef.push(service);
    };
    ServiceListService.prototype.updateNote = function (service) {
        // return this.serviceListRef.update(service.Values, service);
    };
    ServiceListService.prototype.removeNote = function (service) {
        //return this.serviceListRef.remove(service.Value1);
    };
    ServiceListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ServiceListService);
    return ServiceListService;
}());

//# sourceMappingURL=service-list.service.js.map

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/change-password/change-password.module": [
		524,
		12
	],
	"../pages/complaints/complaints.module": [
		525,
		11
	],
	"../pages/feedback/feedback.module": [
		526,
		10
	],
	"../pages/forget-password/forget-password.module": [
		527,
		9
	],
	"../pages/login/login.module": [
		528,
		8
	],
	"../pages/order-detail/order-detail.module": [
		529,
		7
	],
	"../pages/order-success/order-success.module": [
		530,
		6
	],
	"../pages/payment-method/payment-method.module": [
		531,
		5
	],
	"../pages/rating/rating.module": [
		532,
		4
	],
	"../pages/settings/settings.module": [
		533,
		3
	],
	"../pages/signup/signup.module": [
		534,
		2
	],
	"../pages/splashscreen/splashscreen.module": [
		535,
		1
	],
	"../pages/update-profile/update-profile.module": [
		536,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 263;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payments_payments__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.accept = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payments_payments__["a" /* Payments */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n\n    <ion-title>\n\n      Proposal\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n  <img src="././assets/imgs/piping.jpg" >\n\n<div class="margin background">\n\n  <div class="margin">\n\n    <h1>PIPING</h1>\n\n\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-8 class="estimate">\n\n       Pipe Fitting\n\n      </ion-col>\n\n      <ion-col class="text-align">\n\n        $65/ft\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <p class="margin-left-right">\n\n    Yes, we  have  checked your  product image, we  will fix your  product  in  above  mentioned  price.\n\n    If you  are  agree then  click on  accept button.\n\n  </p>\n\n<br>\n\n  <div  padding>\n\n  <button padding ion-button block color="danger"  (click)="accept()">Accept</button>\n\n  <button padding ion-button block color="danger"  outline  > Reject</button>\n\n  </div>\n\n\n\n  </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Payments; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_method_payment_method__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Payments = (function () {
    function Payments(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Payments.prototype.payment_method = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_method_payment_method__["a" /* Payment_Method */]);
    };
    Payments = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\payments\payments.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>Payments</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n\n\n  <img src="././assets/imgs/piping.jpg" >\n\n  <div class="margin background">\n\n    <div class="margin">\n\n      <h1>PIPING</h1>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-8 class="estimate">\n\n        Pipe Fitting\n\n      </ion-col>\n\n      <ion-col class="text-align">\n\n        $65/ft\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <p class="margin-left-right">\n\n    Thanks  for  accepting our  proposal  &  our worker will  reach at your location  in  15 minutes.\n\n    He will  fix your  product. And  you  have  to  pay  $ 65 for job.\n\n  </p>\n\n\n\n  <div  padding>\n\n  <button ion-button padding block color="danger"  (click)="payment_method()">Payment</button>\n\n  </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\payments\payments.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Payments);
    return Payments;
}());

//# sourceMappingURL=payments.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_detail_order_detail__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage.prototype.orderdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__order_detail_order_detail__["a" /* Order_Detail */]);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n\n    <ion-title>\n\n      Orders\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content id="orders">\n\n  <h3> Available Orders  </h3>\n\n  <ion-list>\n\n    <ion-item (click)="orderdetail()">\n\n      <ion-thumbnail item-start >\n\n        <img src="././assets/imgs/piping.jpg" >\n\n      </ion-thumbnail>\n\n      <h2 class="color1" >Pipe Repairing </h2>\n\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n\n      <h2  class="color1"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="././assets/imgs/wiring.jpg"/>\n\n      </ion-thumbnail>\n\n      <h2 class="color2">Wiring</h2>\n\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n\n      <h2 class="color2"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="././assets/imgs/tailor.jpg">\n\n      </ion-thumbnail>\n\n      <h2 class="color3">Tailor</h2>\n\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n\n      <h2 class="color3"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="././assets/imgs/carpenter.jpg">\n\n      </ion-thumbnail>\n\n      <h2 class="color4">Carpenter</h2>\n\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n\n      <h2 class="color4"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n\n\n    </ion-item> <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="././assets/imgs/piping.jpg" >\n\n      </ion-thumbnail>\n\n      <h2 class="color5">Piping</h2>\n\n    <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n\n    <h2 class="color5"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="././assets/imgs/wiring.jpg"/>\n\n      </ion-thumbnail>\n\n      <h2 class="color6">Wiring</h2>\n\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n\n      <h2 class="color6"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="././assets/imgs/tailor.jpg">\n\n      </ion-thumbnail>\n\n      <h2 class="color3">Tailor</h2>\n\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n\n      <h2 class="color3"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="././assets/imgs/carpenter.jpg">\n\n      </ion-thumbnail>\n\n      <h2 class="color4">Carpenter</h2>\n\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n\n      <h2 class="color4"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dataservices_service_list_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_detail_service_detail__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, serviceListService) {
        this.navCtrl = navCtrl;
        this.serviceListService = serviceListService;
        this.serviceList = serviceListService.getServiceList().snapshotChanges().map(function (data) {
            return data.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        console.log(this.serviceList);
        console.log('home');
    }
    HomePage.prototype.servicesdetail = function (service) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__service_detail_service_detail__["a" /* Service_Detail */], {
            item: service
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n\n    <ion-title>Services</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n  <ion-content class="card-background-page">\n\n<div>\n\n    <ion-card *ngFor="let service of serviceList | async" (click)="servicesdetail(service)">\n\n\n\n        <img src="././assets/imgs/{{ service.Image }}" >\n\n      <div class="card-title {{ service.Class }}">\n\n        <h1> {{ service.ServiceName }}</h1>\n\n      </div>\n\n\n\n    </ion-card>\n\n</div>\n\n  </ion-content>\n\n'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__dataservices_service_list_service__["a" /* ServiceListService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service_Detail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__problem_form_problem_form__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Service_Detail = (function () {
    function Service_Detail(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = navParams.get('item');
    }
    Service_Detail.prototype.problem_forms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__problem_form_problem_form__["a" /* Problem_Form */]);
    };
    Service_Detail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\service-detail\service-detail.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>Service Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content id="service_detail" *ngIf="service">\n\n  <img src="././assets/imgs/{{ service.Image }}" >\n\n  <div class="margin background">\n\n    <div class="margin">\n\n       <div class="margin-left">\n\n         <h1>{{service.ServiceName}}</h1>\n\n\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-8 class="estimate">\n\n          Estimated Price\n\n        </ion-col>\n\n        <ion-col class="text-align">\n\n          ${{service.Price}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-7 class="estimate">\n\n          Estimated Time\n\n        </ion-col>\n\n        <ion-col class="text-align">\n\n          <ion-icon ios="ios-clock-outline" md="md-clock"></ion-icon>{{service.Time}}\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n\n\n      <h3 >We  can  fix </h3>\n\n        <p class="font-size">{{service.Description}}\n\n        </p>\n\n\n\n\n\n  </div>\n\n      <div  padding>\n\n        <button ion-button block color="danger"  (click)="problem_forms()">Place an  Order</button>\n\n      </div>\n\n\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\service-detail\service-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Service_Detail);
    return Service_Detail;
}());

//# sourceMappingURL=service-detail.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Problem_Form; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Problem_Form = (function () {
    function Problem_Form(navCtrl, camera) {
        this.navCtrl = navCtrl;
        this.camera = camera;
    }
    Problem_Form.prototype.ngOnInit = function () {
        this.photos = [];
    };
    Problem_Form.prototype.takephoto = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this
            .camera
            .getPicture(options)
            .then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
        }, function (err) {
            // Handle error
        });
    };
    Problem_Form.prototype.uploadphoto = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            mediaType: this.camera.MediaType.PICTURE
        };
        this
            .camera
            .getPicture(options)
            .then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.photos.push(_this.base64Image);
        }, function (err) {
            // Handle error
        });
    };
    Problem_Form.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    Problem_Form = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\problem-form\problem-form.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>Share Your  Problem</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="problem_form">\n\n<br>\n\n  <div class="background">\n\n    <div class="margin">\n\n  <ion-item>\n\n    <ion-input placeholder="Product Name" clearInput></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-textarea placeholder="Share  your  Problem"></ion-textarea>\n\n  </ion-item>\n\n\n\n      <img [src]="photo">\n\n\n\n\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6 class="takephoto">\n\n            <div (click)="takephoto()"><ion-icon name="camera"></ion-icon >Take Photo</div>\n\n          </ion-col>\n\n          <ion-col col-6 class="upload_photo">\n\n            <div (click)="uploadphoto()"><ion-icon name="md-cloud-upload"></ion-icon>Upload Photo</div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n  <div padding>\n\n\n\n  <button ion-button block color="danger"  (click)="signup()">Send</button>\n\n  </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\problem-form\problem-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], Problem_Form);
    return Problem_Form;
}());

//# sourceMappingURL=problem-form.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Rating = (function () {
    function Rating(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Rating.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RatingPage');
    };
    Rating = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rating',template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\rating\rating.html"*/'<!--\n\n  Generated template for the RatingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>rating</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\rating\rating.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Rating);
    return Rating;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(445);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\tabs\tabs.html"*/'<ion-tabs color="dark">\n\n  <ion-tab [root]="tab1Root" tabTitle="Services" tabIcon="pulse"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Proposal" tabIcon="chatboxes"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Orders" tabIcon="filing"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dataservices_user_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataservices_service_list_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_credentials__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_forget_password_forget_password__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_payments_payments__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_splashscreen_splashscreen__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_payment_method_payment_method__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_order_detail_order_detail__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_rating_rating__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_service_detail_service_detail__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_problem_form_problem_form__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_settings_settings__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_feedback_feedback__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_update_profile_update_profile__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_complaints_complaints__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_change_password_change_password__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_order_success_order_success__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_about_about__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_contact_contact__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_home_home__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_tabs_tabs__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_status_bar__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_splash_screen__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// ................
















// ................






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_29__pages_about_about__["a" /* AboutPage */],
                // ...............
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_25__pages_update_profile_update_profile__["a" /* Update_Profile */],
                __WEBPACK_IMPORTED_MODULE_21__pages_service_detail_service_detail__["a" /* Service_Detail */],
                __WEBPACK_IMPORTED_MODULE_22__pages_problem_form_problem_form__["a" /* Problem_Form */],
                __WEBPACK_IMPORTED_MODULE_19__pages_order_detail_order_detail__["a" /* Order_Detail */],
                __WEBPACK_IMPORTED_MODULE_16__pages_payments_payments__["a" /* Payments */],
                __WEBPACK_IMPORTED_MODULE_27__pages_change_password_change_password__["a" /* Change_Password */],
                __WEBPACK_IMPORTED_MODULE_18__pages_payment_method_payment_method__["a" /* Payment_Method */],
                __WEBPACK_IMPORTED_MODULE_15__pages_forget_password_forget_password__["a" /* Forget_Password */],
                __WEBPACK_IMPORTED_MODULE_28__pages_order_success_order_success__["a" /* Order_Success */],
                __WEBPACK_IMPORTED_MODULE_20__pages_rating_rating__["a" /* Rating */],
                __WEBPACK_IMPORTED_MODULE_17__pages_splashscreen_splashscreen__["a" /* SplashscreenPage */],
                // ...............
                __WEBPACK_IMPORTED_MODULE_30__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_complaints_complaints__["a" /* ComplaintsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/change-password/change-password.module#Change_PasswordModule', name: 'Change_Password', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/complaints/complaints.module#ComplaintsPageModule', name: 'ComplaintsPage', segment: 'complaints', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forget-password/forget-password.module#Forget_PasswordModule', name: 'Forget_Password', segment: 'forget-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-detail/order-detail.module#OrderDetailPageModule', name: 'Order_Detail', segment: 'order-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-success/order-success.module#Order_SuccessModule', name: 'Order_Success', segment: 'order-success', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-method/payment-method.module#PaymentMethodPageModule', name: 'Payment_Method', segment: 'payment-method', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rating/rating.module#RatingPageModule', name: 'Rating', segment: 'rating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'Signup', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splashscreen/splashscreen.module#SplashscreenPageModule', name: 'SplashscreenPage', segment: 'splashscreen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-profile/update-profile.module#Update_ProfileModule', name: 'Update_Profile', segment: 'update-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_2__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyC3PyCuZuPZCmuU7Wkh1h1w4LBSo6Md3t8'
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                // ...............
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_15__pages_forget_password_forget_password__["a" /* Forget_Password */],
                __WEBPACK_IMPORTED_MODULE_21__pages_service_detail_service_detail__["a" /* Service_Detail */],
                __WEBPACK_IMPORTED_MODULE_22__pages_problem_form_problem_form__["a" /* Problem_Form */],
                __WEBPACK_IMPORTED_MODULE_19__pages_order_detail_order_detail__["a" /* Order_Detail */],
                __WEBPACK_IMPORTED_MODULE_16__pages_payments_payments__["a" /* Payments */],
                __WEBPACK_IMPORTED_MODULE_18__pages_payment_method_payment_method__["a" /* Payment_Method */],
                __WEBPACK_IMPORTED_MODULE_20__pages_rating_rating__["a" /* Rating */],
                // ...............
                __WEBPACK_IMPORTED_MODULE_29__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_order_success_order_success__["a" /* Order_Success */],
                __WEBPACK_IMPORTED_MODULE_30__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_complaints_complaints__["a" /* ComplaintsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_splashscreen_splashscreen__["a" /* SplashscreenPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_update_profile_update_profile__["a" /* Update_Profile */],
                __WEBPACK_IMPORTED_MODULE_27__pages_change_password_change_password__["a" /* Change_Password */],
                __WEBPACK_IMPORTED_MODULE_31__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */],
                __WEBPACK_IMPORTED_MODULE_1__dataservices_service_list_service__["a" /* ServiceListService */],
                __WEBPACK_IMPORTED_MODULE_0__dataservices_user_service__["a" /* UserService */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyD05vV0OQI_imK5xvaWb8_6Wg7o_1BrVWc",
    authDomain: "sitepro-d939d.firebaseapp.com",
    databaseURL: "https://sitepro-d939d.firebaseio.com",
    projectId: "sitepro-d939d",
    storageBucket: "sitepro-d939d.appspot.com",
    messagingSenderId: "943754509089"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_splashscreen_splashscreen__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Login } from '../pages/login/login';
// import { TabsPage } from "../pages/tabs/tabs";

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_splashscreen_splashscreen__["a" /* SplashscreenPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_signup__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forget_password_forget_password__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { create } from 'domain';
var Login = (function () {
    function Login(navCtrl, navParams, afAuth, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.toast = toast;
        this.user = {};
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    Login.prototype.login = function (user) {
        var _this = this;
        var result = this.afAuth.auth.signInWithEmailAndPassword(user.Email, user.Password)
            .then(function (res) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
        }, function (err) {
            var tc = _this.toast.create({
                message: err.message,
                duration: 3000
            });
            tc.present();
        });
    };
    Login.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__signup_signup__["a" /* Signup */]);
    };
    Login.prototype.forgetpassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forget_password_forget_password__["a" /* Forget_Password */]);
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\login\login.html"*/'\n\n<ion-content padding id="login">\n\n  <div class="image1">\n\n  <img src="././assets/icon/icon.png" align="middle">\n\n  </div>\n\n\n\n  <div padding id="margin-top">\n\n\n\n        <ion-item>\n\n          <ion-label> <ion-icon ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n\n          <ion-input type="email" placeholder="email" [(ngModel)]="user.Email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label> <ion-icon ios="ios-key" md="md-key"></ion-icon></ion-label>\n\n          <ion-input type="password" placeholder="Password" [(ngModel)]="user.Password"></ion-input>\n\n        </ion-item>\n\n      <div class="buttons">\n\n        <button ion-button block color="danger"  (click)="login(user)">Login</button>\n\n        <button ion-button block color="danger" outline (click)="forgetpassword()">Forget Password</button>\n\n        <button ion-button block color="danger"  outline (click)="signup()" >Signup</button>\n\n      </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Code\IONIC\SitePro\SitePro-2\SitePro\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ToastController */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[324]);
//# sourceMappingURL=main.js.map