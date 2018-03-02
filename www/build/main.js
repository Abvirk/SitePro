webpackJsonp([6],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Forget_Password; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(28);
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
 * Generated class for the ForgetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Forget_Password = (function () {
    function Forget_Password(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Forget_Password.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetPasswordPage');
    };
    Forget_Password.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* Signup */]);
    };
    Forget_Password = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forget-password',template:/*ion-inline-start:"D:\services\src\pages\forget-password\forget-password.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Reset Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="forget_password">\n  <div class="margin-top">\n  <ion-item>\n    <ion-label> <ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n    <ion-input type="email" placeholder="Enter Your Email"></ion-input>\n  </ion-item>\n    <br>\n  <button ion-button block color="danger"  (click)="signup()">Reset</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\forget-password\forget-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Forget_Password);
    return Forget_Password;
}());

//# sourceMappingURL=forget-password.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Payment_Method; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(28);
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
    Payment_Method.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* Signup */]);
    };
    Payment_Method = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment-method',template:/*ion-inline-start:"D:\services\src\pages\payment-method\payment-method.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Payment Method</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  id="payment_method" padding>\n<div class="margin-top">\n  <ion-item>\n    <ion-label> <ion-icon ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n    <ion-input type="text" placeholder="Card Holder Name"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label> <ion-icon ios="ios-card" md="md-card"></ion-icon></ion-label>\n    <ion-input type="number" placeholder="Card Number"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label> <ion-icon ios="ios-calendar-outline" md="md-calendar-outline "></ion-icon></ion-label>\n    <ion-input type="date" placeholder=""></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label> <ion-icon ios="ios-card-outline" md="md-card-outline"></ion-icon></ion-label>\n    <ion-input type="number" placeholder="CVC"></ion-input>\n  </ion-item>\n  <br><br>\n  <button ion-button block color="danger" (click)="signup()" >$65</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\payment-method\payment-method.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Payment_Method);
    return Payment_Method;
}());

//# sourceMappingURL=payment-method.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order_Detail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(28);
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
 * Generated class for the OrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Order_Detail = (function () {
    function Order_Detail(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Order_Detail.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderDetailPage');
    };
    Order_Detail.prototype.accept = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* Signup */]);
    };
    Order_Detail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-detail',template:/*ion-inline-start:"D:\services\src\pages\order-detail\order-detail.html"*/'<!--\n  Generated template for the OrderDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Order Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n  <img src="../assets/imgs/piping.jpg" >\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-8 class="estimate">\n        Pipe Repairing\n      </ion-col>\n      <ion-col class="text-align">\n        $65/ft\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <p class="margin-left-right">\n    There is  a  problem  in  water pipe, there is  a water leakage from joint .\n  </p>\n\n  <br><br>\n  <div class="padding">\n    <button padding ion-button block color="danger"  (click)="accept()">Accept</button>\n    <button padding ion-button block color="danger"  outline  > Reject</button>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\services\src\pages\order-detail\order-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Order_Detail);
    return Order_Detail;
}());

//# sourceMappingURL=order-detail.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forget_password_forget_password__ = __webpack_require__(100);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Login = (function () {
    function Login(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    Login.prototype.login = function () {
    };
    Login.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* Signup */]);
    };
    Login.prototype.forgetpassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forget_password_forget_password__["a" /* Forget_Password */]);
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\services\src\pages\login\login.html"*/'\n<ion-content padding id="login">\n  <div class="image1">\n  <img src="../assets/imgs/icon.png">\n  </div>\n\n  <div padding id="margin-top">\n\n        <ion-item>\n          <ion-label> <ion-icon ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n          <ion-input type="text" placeholder="Username"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label> <ion-icon ios="ios-key" md="md-key"></ion-icon></ion-label>\n          <ion-input type="password" placeholder="Password"></ion-input>\n        </ion-item>\n\n\n\n      <div class="buttons">\n        <button ion-button block color="danger"  (click)="signup()">Login</button>\n        <button ion-button block color="danger" outline (click)="forgetpassword()">Forget Password</button>\n        <button ion-button block color="danger"  outline (click)="signup()" >Signup</button>\n\n      </div>\n\n\n  </div>\n    <div class="image2">\n        <img src="../assets/icon/icon2.png">\n    </div>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/forget-password/forget-password.module": [
		283,
		5
	],
	"../pages/login/login.module": [
		288,
		4
	],
	"../pages/order-detail/order-detail.module": [
		284,
		3
	],
	"../pages/payment-method/payment-method.module": [
		285,
		2
	],
	"../pages/rating/rating.module": [
		286,
		1
	],
	"../pages/signup/signup.module": [
		287,
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(160);
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
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\services\src\pages\tabs\tabs.html"*/'<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" tabTitle="Services" tabIcon="pulse"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Proposal" tabIcon="chatboxes"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Orders" tabIcon="filing"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Sttings" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\services\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payments_payments__ = __webpack_require__(158);
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
            selector: 'page-about',template:/*ion-inline-start:"D:\services\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>\n      Proposal\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <img src="../assets/imgs/piping.jpg" >\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-8 class="estimate">\n       Pipe Fitting\n      </ion-col>\n      <ion-col class="text-align">\n        $65/ft\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <p class="margin-left-right">\n    Yes, we  have  checked your  product image, we  will fix your  product  in  above  mentioned  price.\n    If you  are  agree then  click on  accept button.\n  </p>\n<br><br>\n  <div class="padding">\n  <button padding ion-button block color="danger"  (click)="accept()">Accept</button>\n  <button padding ion-button block color="danger"  outline  > Reject</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Payments; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_method_payment_method__ = __webpack_require__(101);
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
            selector: 'page-about',template:/*ion-inline-start:"D:\services\src\pages\payments\payments.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Payments</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n  <img src="../assets/imgs/piping.jpg" >\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-8 class="estimate">\n        Pipe Fitting\n      </ion-col>\n      <ion-col class="text-align">\n        $65/ft\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <p class="margin-left-right">\n    Thanks  for  accepting our  proposal  &  our worker will  reach at your location  in  15 minutes.\n    He will  fix your  product. And  you  have  to  pay  $ 65 for job.\n  </p>\n\n  <br><br>\n  <div class="padding">\n  <button ion-button padding block color="danger"  (click)="payment_method()">Payment</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\payments\payments.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Payments);
    return Payments;
}());

//# sourceMappingURL=payments.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_detail_order_detail__ = __webpack_require__(102);
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
            selector: 'page-contact',template:/*ion-inline-start:"D:\services\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>\n      Orders\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="orders">\n  <h3> Available Orders  </h3>\n  <ion-list>\n    <ion-item (click)="orderdetail()">\n      <ion-thumbnail item-start >\n        <img src="../assets/imgs/piping.jpg" >\n      </ion-thumbnail>\n      <h2 class="color1" >Pipe Repairing </h2>\n      <p class="p1" text-wrap text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n      <h2  class="color1"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="../assets/imgs/wiring.jpg"/>\n      </ion-thumbnail>\n      <h2 class="color2">Wiring</h2>\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n      <h2 class="color2"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="../assets/imgs/tailor.jpg">\n      </ion-thumbnail>\n      <h2 class="color3">Tailor</h2>\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n      <h2 class="color3"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="../assets/imgs/carpenter.jpg">\n      </ion-thumbnail>\n      <h2 class="color4">Carpenter</h2>\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n      <h2 class="color4"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n    </ion-item> <ion-item>\n      <ion-thumbnail item-start>\n        <img src="../assets/imgs/piping.jpg" >\n      </ion-thumbnail>\n      <h2 class="color5">Piping</h2>\n    <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n    <h2 class="color5"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="../assets/imgs/wiring.jpg"/>\n      </ion-thumbnail>\n      <h2 class="color6">Wiring</h2>\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n      <h2 class="color6"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="../assets/imgs/tailor.jpg">\n      </ion-thumbnail>\n      <h2 class="color3">Tailor</h2>\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n      <h2 class="color3"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="../assets/imgs/carpenter.jpg">\n      </ion-thumbnail>\n      <h2 class="color4">Carpenter</h2>\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n      <h2 class="color4"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_detail_service_detail__ = __webpack_require__(161);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.servicesdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__service_detail_service_detail__["a" /* Service_Detail */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\services\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Services</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n  <ion-content class="card-background-page">\n\n    <ion-card (click)="servicesdetail()">\n\n      <img src="../assets/imgs/piping.jpg" >\n      <div class="card-title color1"><h1>Piping</h1></div>\n\n    </ion-card>\n\n    <ion-card>\n      <img src="../assets/imgs/wiring.jpg"/>\n      <div class="card-title color3"><h1>Wiring</h1></div>\n\n    </ion-card>\n\n    <ion-card>\n      <img src="../assets/imgs/tailor.jpg">\n      <div class="card-title color4"><h1>Tailor</h1></div>\n\n    </ion-card>\n\n    <ion-card>\n      <img src="../assets/imgs/carpenter.jpg">\n      <div class="card-title color5"><h1>Carpenter</h1></div>\n\n    </ion-card>\n\n  </ion-content>\n'/*ion-inline-end:"D:\services\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service_Detail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__problem_form_problem_form__ = __webpack_require__(162);
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
    function Service_Detail(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Service_Detail.prototype.problem_forms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__problem_form_problem_form__["a" /* Problem_Form */]);
    };
    Service_Detail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\services\src\pages\service-detail\service-detail.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Service Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content id="service_detail">\n  <img src="../assets/imgs/piping.jpg" >\n  <div class="margin-left">\n  <h1>Piping</h1>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-8 class="estimate">\n          Estimated Price\n        </ion-col>\n        <ion-col class="text-align">\n          $65\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-8 class="estimate">\n          Estimated Time\n        </ion-col>\n        <ion-col class="text-align">\n          <ion-icon ios="ios-clock-outline" md="md-clock-outline"></ion-icon> 1 Hour\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n      <h3 >We  can  fix </h3>\n        <p class="font-size">Wiring Pipes <br> Sentary Pipes<br>Sui Gas Pipes<br>  New Pipe Fitting\n        </p>\n    <div class="padding">\n    <button ion-button block color="danger"  (click)="problem_forms()">Place an  Order</button>\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\service-detail\service-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Service_Detail);
    return Service_Detail;
}());

//# sourceMappingURL=service-detail.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Problem_Form; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(28);
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
    function Problem_Form(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Problem_Form.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* Signup */]);
    };
    Problem_Form = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\services\src\pages\problem-form\problem-form.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Share Your  Problem</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="problem_form">\n<br>\n  <ion-item>\n    <ion-input placeholder="Product Name" clearInput></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-textarea placeholder="Share  your  Problem"></ion-textarea>\n  </ion-item>\n\n  <img src="../assets/imgs/piping.jpg" >\n\n<br>\n  <button ion-button block color="danger"  outline ><ion-icon name="camera"></ion-icon>Take Photo</button>\n  <button ion-button block color="danger"  outline  ><ion-icon name="md-cloud-upload"></ion-icon>Upload Photo</button>\n\n  <button ion-button block color="danger"  (click)="signup()">Send</button>\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\problem-form\problem-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Problem_Form);
    return Problem_Form;
}());

//# sourceMappingURL=problem-form.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-rating',template:/*ion-inline-start:"D:\services\src\pages\rating\rating.html"*/'<!--\n  Generated template for the RatingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>rating</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\rating\rating.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Rating);
    return Rating;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_forget_password_forget_password__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_payments_payments__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_payment_method_payment_method__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_order_detail_order_detail__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_rating_rating__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_service_detail_service_detail__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_problem_form_problem_form__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(205);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                // ...............
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_11__pages_service_detail_service_detail__["a" /* Service_Detail */],
                __WEBPACK_IMPORTED_MODULE_12__pages_problem_form_problem_form__["a" /* Problem_Form */],
                __WEBPACK_IMPORTED_MODULE_9__pages_order_detail_order_detail__["a" /* Order_Detail */],
                __WEBPACK_IMPORTED_MODULE_7__pages_payments_payments__["a" /* Payments */],
                __WEBPACK_IMPORTED_MODULE_8__pages_payment_method_payment_method__["a" /* Payment_Method */],
                __WEBPACK_IMPORTED_MODULE_6__pages_forget_password_forget_password__["a" /* Forget_Password */],
                __WEBPACK_IMPORTED_MODULE_10__pages_rating_rating__["a" /* Rating */],
                // ...............
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/forget-password/forget-password.module#Forget_PasswordModule', name: 'Forget_Password', segment: 'forget-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-detail/order-detail.module#OrderDetailPageModule', name: 'Order_Detail', segment: 'order-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-method/payment-method.module#PaymentMethodPageModule', name: 'Payment_Method', segment: 'payment-method', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rating/rating.module#RatingPageModule', name: 'Rating', segment: 'rating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'Signup', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                // ...............
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_6__pages_forget_password_forget_password__["a" /* Forget_Password */],
                __WEBPACK_IMPORTED_MODULE_11__pages_service_detail_service_detail__["a" /* Service_Detail */],
                __WEBPACK_IMPORTED_MODULE_12__pages_problem_form_problem_form__["a" /* Problem_Form */],
                __WEBPACK_IMPORTED_MODULE_9__pages_order_detail_order_detail__["a" /* Order_Detail */],
                __WEBPACK_IMPORTED_MODULE_7__pages_payments_payments__["a" /* Payments */],
                __WEBPACK_IMPORTED_MODULE_8__pages_payment_method_payment_method__["a" /* Payment_Method */],
                __WEBPACK_IMPORTED_MODULE_10__pages_rating_rating__["a" /* Rating */],
                // ...............
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* Login */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\services\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\services\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(156);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Signup = (function () {
    function Signup(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Signup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    Signup.prototype.tabspages = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    Signup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"D:\services\src\pages\signup\signup.html"*/'\n<ion-content padding id="signup">\n<div class="image1">\n  <img src="../assets/icon/icon.png">\n</div>\n\n  <div padding id="margin-top">\n\n    <ion-item>\n      <ion-label> <ion-icon ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label> <ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n      <ion-input type="email" placeholder="Email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label> <ion-icon ios="ios-key" md="md-key"></ion-icon></ion-label>\n      <ion-input type="password" placeholder="Password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label> <ion-icon ios="ios-call" md="md-call"></ion-icon></ion-label>\n      <ion-input type="number" placeholder="Number"></ion-input>\n    </ion-item>\n\n\n      <ion-item>\n        <ion-label> Gender</ion-label>\n        <ion-select [(ngModel)]="gender">\n          <ion-option value="male">Male</ion-option>\n          <ion-option value="female">Female</ion-option>\n        </ion-select>\n      </ion-item>\n<br>\n\n    <div class="buttons">\n      <button ion-button block color="danger" (click)="tabspages()">Signup</button>\n\n    </div>\n\n\n  </div>\n<div class="image2">\n  <img src="../assets/icon/icon2.png">\n</div>\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Signup);
    return Signup;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map