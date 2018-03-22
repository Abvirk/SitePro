webpackJsonp([13],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Change_Password; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-change-password',template:/*ion-inline-start:"D:\services\src\pages\change-password\change-password.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Change Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div class="background">\n    <div class="margin">\n\n  <ion-item>\n    <ion-label> <ion-icon ios="ios-key" md="md-key"></ion-icon></ion-label>\n    <ion-input type="password" placeholder="Password"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label> <ion-icon ios="ios-key" md="md-key"></ion-icon></ion-label>\n    <ion-input type="password" placeholder="Confirm Password"></ion-input>\n  </ion-item>\n\n  <div class="buttons">\n    <button ion-button block color="danger" (click)="tabspages()">Change Password</button>\n\n  </div>\n  </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\change-password\change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Change_Password);
    return Change_Password;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(25);
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
            selector: 'page-complaints',template:/*ion-inline-start:"D:\services\src\pages\complaints\complaints.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Share Your  Complaint</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="problem_form">\n  <br>\n  <div class="  background">\n    <div class="margin">\n  <ion-item>\n    <ion-input placeholder="Complaint Title" clearInput></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-textarea placeholder="Explain Your Complaint"></ion-textarea>\n  </ion-item>\n\n\n  <br>\n  <div >\n\n    <button ion-button block color="danger"  (click)="complaints()">Complaint</button>\n  </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\complaints\complaints.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ComplaintsPage);
    return ComplaintsPage;
}());

//# sourceMappingURL=complaints.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Payment_Method; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_success_order_success__ = __webpack_require__(105);
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
            selector: 'page-payment-method',template:/*ion-inline-start:"D:\services\src\pages\payment-method\payment-method.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Payment Method</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  class="margin-top" id="payment_method" padding>\n  <div class="  background">\n    <div class="margin">\n      <h2>CHECKOUT</h2>\n       <h1>\n        <ion-icon ios="ios-card" md="md-card"></ion-icon></h1>\n<br>\n      <ion-item>\n        <ion-label> <ion-icon ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n        <ion-input type="text" placeholder="Card Holder Name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label> <ion-icon ios="ios-card" md="md-card"></ion-icon></ion-label>\n        <ion-input type="number" placeholder="Card Number"></ion-input>\n      </ion-item>\n\n        <ion-item>\n          <ion-label> <ion-icon ios="ios-calendar-outline" md="md-calendar-outline "></ion-icon></ion-label>\n          <ion-input type="date" placeholder=""></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label> <ion-icon ios="ios-card-outline" md="md-card-outline"></ion-icon></ion-label>\n          <ion-input type="number" placeholder="CVC"></ion-input>\n        </ion-item>\n       <br>\n  <div padding>\n  <button ion-button block color="danger" (click)="order_success()" >$65</button>\n  </div>\n</div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\payment-method\payment-method.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Payment_Method);
    return Payment_Method;
}());

//# sourceMappingURL=payment-method.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order_Success; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(25);
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
            selector: 'page-order-success',template:/*ion-inline-start:"D:\services\src\pages\order-success\order-success.html"*/'\n\n<ion-content padding>\n  <h1>\n    <ion-icon ios="ios-checkmark-circle-outline" md="md-checkmark-circle"></ion-icon>\n  </h1>\n<h5>ORDER  PLACED  SUCCESSFULLY ! </h5>\n  <p class="thanks"> THANKS  FOR  YOUR ORDER</p>\n<br>\n  <p class="back" (click)="back()">BACK</p>\n\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\order-success\order-success.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Order_Success);
    return Order_Success;
}());

//# sourceMappingURL=order-success.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order_Detail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(25);
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
        this.start = 'chicago, il';
        this.end = 'chicago, il';
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
    }
    Order_Detail.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderDetailPage');
        // this.initMap();
    };
    // initMap() {
    //   this.map = new google.maps.Map(this.mapElement.nativeElement, {
    //     zoom: 7,
    //     center: {lat: 41.85, lng: -87.65}
    //   });
    //
    //   this.directionsDisplay.setMap(this.map);
    // }
    //
    // calculateAndDisplayRoute() {
    //   this.directionsService.route({
    //     origin: this.start,
    //     destination: this.end,
    //     travelMode: 'DRIVING'
    //   }, (response, status) => {
    //     if (status === 'OK') {
    //       this.directionsDisplay.setDirections(response);
    //     } else {
    //       window.alert('Directions request failed due to ' + status);
    //     }
    //   });
    // }
    Order_Detail.prototype.accept = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], Order_Detail.prototype, "mapElement", void 0);
    Order_Detail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-detail',template:/*ion-inline-start:"D:\services\src\pages\order-detail\order-detail.html"*/'<!--\n  Generated template for the OrderDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Order Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img src="../www/assets/imgs/piping.jpg" >\n  <div class="margin background">\n    <div class="margin">\n      <h1>PIPING</h1>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-8 class="estimate">\n        Pipe Repairing\n      </ion-col>\n      <ion-col class="text-align">\n        $65/ft\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <p class="margin-left-right">\n    There is  a  problem  in  water pipe, there is  a water leakage from joint .\n  </p>\n\n    </div>\n\n    <div class="maps">\n      <img src="../www/assets/imgs/map.jpg" >\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\services\src\pages\order-detail\order-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Order_Detail);
    return Order_Detail;
}());

//# sourceMappingURL=order-detail.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback_feedback__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complaints_complaints__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_profile_update_profile__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__change_password_change_password__ = __webpack_require__(102);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\services\src\pages\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <ion-list-header class="settings_header">\n   <ion-icon ios="ios-cog" md="md-cog"></ion-icon> Settings\n  </ion-list-header>\n\n    <button ion-item (click)="update_profile()">\n      <ion-avatar item-start>\n        <img src="../assets/imgs/2434.jpg" >\n      </ion-avatar>\n      Profile\n    </button>\n\n  <button ion-item (click)="feedback()">\n    <ion-icon ios="ios-send" md="md-send"></ion-icon>Feeback\n</button>\n  <button ion-item (click)="change_password()">\n    <ion-icon ios="ios-key" md="md-key"></ion-icon> Change Password\n</button>\n  <button ion-item (click)="complaint()">\n    <ion-icon ios="ios-paper" md="md-paper" ></ion-icon> Register A Complaint\n</button>\n  <button ion-item>\n    <ion-icon ios="ios-log-out" md="md-log-out"></ion-icon> Logout\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(25);
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
            selector: 'page-feedback',template:/*ion-inline-start:"D:\services\src\pages\feedback\feedback.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Feedback</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="feedback">\n  <div class="margin-top">\n    <div class="  background">\n      <div class="margin">\n\n      <ion-textarea type="text" placeholder="Type your  Views Here"></ion-textarea>\n\n    <br>\n    <div >\n      <button ion-button block color="danger"  (click)="feedback()">Feedback</button>\n    </div>\n  </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\feedback\feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Update_Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(25);
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
            selector: 'page-update-profile',template:/*ion-inline-start:"D:\services\src\pages\update-profile\update-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Update Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div class="background">\n    <div class="margin">\n  <ion-item >\n    <ion-avatar >\n      <img src="../www/assets/imgs/2434.jpg" >\n    </ion-avatar>\n\n  </ion-item>\n  <ion-item>\n    <ion-label> <ion-icon ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n    <ion-input type="text" value="Shama Hyder"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label> <ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n    <ion-input type="email" value="shama.hyder11@gmail.com"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label> <ion-icon ios="ios-call" md="md-call"></ion-icon></ion-label>\n    <ion-input type="text" value="+92-345-806868-2"></ion-input>\n  </ion-item>\n<br>\n  <div class="buttons" padding>\n    <button ion-button block color="danger" (click)="tabspages()">Update Profile</button>\n\n  </div>\n  </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\update-profile\update-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Update_Profile);
    return Update_Profile;
}());

//# sourceMappingURL=update-profile.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Forget_Password; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(51);
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
            selector: 'page-forget-password',template:/*ion-inline-start:"D:\services\src\pages\forget-password\forget-password.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Reset Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="forget_password">\n  <div class=" background">\n    <div class="margin">\n  <ion-item>\n    <ion-label> <ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n    <ion-input type="email" placeholder="Enter Your Email"></ion-input>\n  </ion-item>\n    <br>\n    <div padding>\n  <button ion-button block color="danger"  (click)="signup()">Reset</button>\n  </div>\n  </div>\n    </div>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\forget-password\forget-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Forget_Password);
    return Forget_Password;
}());

//# sourceMappingURL=forget-password.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashscreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(112);
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
            selector: 'page-splashscreen',template:/*ion-inline-start:"D:\services\src\pages\splashscreen\splashscreen.html"*/'<!--\n  Generated template for the SplashscreenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n  <img src="../www/assets/imgs/splash.gif" >\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\splashscreen\splashscreen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SplashscreenPage);
    return SplashscreenPage;
}());

//# sourceMappingURL=splashscreen.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forget_password_forget_password__ = __webpack_require__(110);
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
            selector: 'page-login',template:/*ion-inline-start:"D:\services\src\pages\login\login.html"*/'\n<ion-content padding id="login">\n  <div class="image1">\n  <img src="../www/assets/imgs/icon.png" align="middle">\n  </div>\n\n  <div padding id="margin-top">\n\n        <ion-item>\n          <ion-label> <ion-icon ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n          <ion-input type="text" placeholder="Username"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label> <ion-icon ios="ios-key" md="md-key"></ion-icon></ion-label>\n          <ion-input type="password" placeholder="Password"></ion-input>\n        </ion-item>\n\n\n\n      <div class="buttons">\n        <button ion-button block color="danger"  (click)="signup()">Login</button>\n        <button ion-button block color="danger" outline (click)="forgetpassword()">Forget Password</button>\n        <button ion-button block color="danger"  outline (click)="signup()" >Signup</button>\n\n      </div>\n\n\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 123:
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
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/change-password/change-password.module": [
		291,
		12
	],
	"../pages/complaints/complaints.module": [
		292,
		11
	],
	"../pages/feedback/feedback.module": [
		293,
		10
	],
	"../pages/forget-password/forget-password.module": [
		294,
		9
	],
	"../pages/login/login.module": [
		303,
		8
	],
	"../pages/order-detail/order-detail.module": [
		295,
		7
	],
	"../pages/order-success/order-success.module": [
		296,
		6
	],
	"../pages/payment-method/payment-method.module": [
		298,
		5
	],
	"../pages/rating/rating.module": [
		297,
		4
	],
	"../pages/settings/settings.module": [
		302,
		3
	],
	"../pages/signup/signup.module": [
		299,
		2
	],
	"../pages/splashscreen/splashscreen.module": [
		300,
		1
	],
	"../pages/update-profile/update-profile.module": [
		301,
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
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payments_payments__ = __webpack_require__(166);
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
            selector: 'page-about',template:/*ion-inline-start:"D:\services\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>\n      Proposal\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <img src="../www/assets/imgs/piping.jpg" >\n<div class="margin background">\n  <div class="margin">\n    <h1>PIPING</h1>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-8 class="estimate">\n       Pipe Fitting\n      </ion-col>\n      <ion-col class="text-align">\n        $65/ft\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <p class="margin-left-right">\n    Yes, we  have  checked your  product image, we  will fix your  product  in  above  mentioned  price.\n    If you  are  agree then  click on  accept button.\n  </p>\n<br>\n  <div  padding>\n  <button padding ion-button block color="danger"  (click)="accept()">Accept</button>\n  <button padding ion-button block color="danger"  outline  > Reject</button>\n  </div>\n\n  </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Payments; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_method_payment_method__ = __webpack_require__(104);
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
            selector: 'page-about',template:/*ion-inline-start:"D:\services\src\pages\payments\payments.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Payments</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n  <img src="../www/assets/imgs/piping.jpg" >\n  <div class="margin background">\n    <div class="margin">\n      <h1>PIPING</h1>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-8 class="estimate">\n        Pipe Fitting\n      </ion-col>\n      <ion-col class="text-align">\n        $65/ft\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <p class="margin-left-right">\n    Thanks  for  accepting our  proposal  &  our worker will  reach at your location  in  15 minutes.\n    He will  fix your  product. And  you  have  to  pay  $ 65 for job.\n  </p>\n\n  <div  padding>\n  <button ion-button padding block color="danger"  (click)="payment_method()">Payment</button>\n  </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\payments\payments.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Payments);
    return Payments;
}());

//# sourceMappingURL=payments.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_detail_order_detail__ = __webpack_require__(106);
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
            selector: 'page-contact',template:/*ion-inline-start:"D:\services\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>\n      Orders\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="orders">\n  <h3> Available Orders  </h3>\n  <ion-list>\n    <ion-item (click)="orderdetail()">\n      <ion-thumbnail item-start >\n        <img src="../www/assets/imgs/piping.jpg" >\n      </ion-thumbnail>\n      <h2 class="color1" >Pipe Repairing </h2>\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n      <h2  class="color1"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="../www/assets/imgs/wiring.jpg"/>\n      </ion-thumbnail>\n      <h2 class="color2">Wiring</h2>\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n      <h2 class="color2"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="../www/assets/imgs/tailor.jpg">\n      </ion-thumbnail>\n      <h2 class="color3">Tailor</h2>\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n      <h2 class="color3"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="../www/assets/imgs/carpenter.jpg">\n      </ion-thumbnail>\n      <h2 class="color4">Carpenter</h2>\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n      <h2 class="color4"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n    </ion-item> <ion-item>\n      <ion-thumbnail item-start>\n        <img src="../www/assets/imgs/piping.jpg" >\n      </ion-thumbnail>\n      <h2 class="color5">Piping</h2>\n    <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n    <h2 class="color5"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="../www/assets/imgs/wiring.jpg"/>\n      </ion-thumbnail>\n      <h2 class="color6">Wiring</h2>\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n      <h2 class="color6"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="../www/assets/imgs/tailor.jpg">\n      </ion-thumbnail>\n      <h2 class="color3">Tailor</h2>\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n      <h2 class="color3"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="../www/assets/imgs/carpenter.jpg">\n      </ion-thumbnail>\n      <h2 class="color4">Carpenter</h2>\n      <p class="p1" text-wrap>There is  a  problem  in  water pipe, there is  a water leakage from joint .</p>\n      <h2 class="color4"><ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>  65</h2>\n\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_detail_service_detail__ = __webpack_require__(169);
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
            selector: 'page-home',template:/*ion-inline-start:"D:\services\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Services</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n  <ion-content class="card-background-page">\n<div>\n    <ion-card (click)="servicesdetail()">\n\n      <img src="../www/assets/imgs/piping.jpg" >\n      <div class="card-title color1"><h1>Piping</h1></div>\n\n    </ion-card>\n\n    <ion-card>\n      <img src="../www/assets/imgs/wiring.jpg"/>\n      <div class="card-title color3"><h1>Wiring</h1></div>\n\n    </ion-card>\n\n    <ion-card>\n      <img src="../www/assets/imgs/tailor.jpg">\n      <div class="card-title color4"><h1>Tailor</h1></div>\n\n    </ion-card>\n\n    <ion-card>\n      <img src="../www/assets/imgs/carpenter.jpg">\n      <div class="card-title color5"><h1>Carpenter</h1></div>\n\n    </ion-card>\n</div>\n  </ion-content>\n'/*ion-inline-end:"D:\services\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service_Detail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__problem_form_problem_form__ = __webpack_require__(170);
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
            selector: 'page-home',template:/*ion-inline-start:"D:\services\src\pages\service-detail\service-detail.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Service Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content id="service_detail">\n  <img src="../www/assets/imgs/piping.jpg" >\n  <div class="margin background">\n    <div class="margin">\n       <div class="margin-left">\n         <h1>PIPING</h1>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-8 class="estimate">\n          Estimated Price\n        </ion-col>\n        <ion-col class="text-align">\n          $65\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-7 class="estimate">\n          Estimated Time\n        </ion-col>\n        <ion-col class="text-align">\n          <ion-icon ios="ios-clock-outline" md="md-clock"></ion-icon> 1 Hour\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n      <h3 >We  can  fix </h3>\n        <p class="font-size">Wiring Pipes <br> Sentary Pipes<br>Sui Gas Pipes<br>  New Pipe Fitting\n        </p>\n\n\n  </div>\n      <div  padding>\n        <button ion-button block color="danger"  (click)="problem_forms()">Place an  Order</button>\n      </div>\n\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\service-detail\service-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Service_Detail);
    return Service_Detail;
}());

//# sourceMappingURL=service-detail.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Problem_Form; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(171);
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
        this.photo = [];
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
            _this.photo.push(_this.base64Image);
        }, function (err) {
            // Handle error
        });
    };
    Problem_Form.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    Problem_Form = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\services\src\pages\problem-form\problem-form.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Share Your  Problem</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="problem_form">\n<br>\n  <div class="background">\n    <div class="margin">\n  <ion-item>\n    <ion-input placeholder="Product Name" clearInput></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-textarea placeholder="Share  your  Problem"></ion-textarea>\n  </ion-item>\n\n  <img  [src]="photo">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6 class="takephoto">\n            <div (click)="takephoto()"><ion-icon name="camera"></ion-icon >Take Photo</div>\n          </ion-col>\n          <ion-col col-6 class="upload_photo">\n            <div><ion-icon name="md-cloud-upload"></ion-icon>Upload Photo</div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n  <div padding>\n\n  <button ion-button block color="danger"  (click)="signup()">Send</button>\n  </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\problem-form\problem-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], Problem_Form);
    return Problem_Form;
}());

//# sourceMappingURL=problem-form.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(239);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_forget_password_forget_password__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_payments_payments__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_splashscreen_splashscreen__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_payment_method_payment_method__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_order_detail_order_detail__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_rating_rating__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_service_detail_service_detail__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_problem_form_problem_form__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_feedback_feedback__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_update_profile_update_profile__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_complaints_complaints__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_change_password_change_password__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_order_success_order_success__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_about_about__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_contact_contact__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_home_home__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_tabs_tabs__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(213);
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
                __WEBPACK_IMPORTED_MODULE_21__pages_about_about__["a" /* AboutPage */],
                // ...............
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_17__pages_update_profile_update_profile__["a" /* Update_Profile */],
                __WEBPACK_IMPORTED_MODULE_13__pages_service_detail_service_detail__["a" /* Service_Detail */],
                __WEBPACK_IMPORTED_MODULE_14__pages_problem_form_problem_form__["a" /* Problem_Form */],
                __WEBPACK_IMPORTED_MODULE_11__pages_order_detail_order_detail__["a" /* Order_Detail */],
                __WEBPACK_IMPORTED_MODULE_8__pages_payments_payments__["a" /* Payments */],
                __WEBPACK_IMPORTED_MODULE_19__pages_change_password_change_password__["a" /* Change_Password */],
                __WEBPACK_IMPORTED_MODULE_10__pages_payment_method_payment_method__["a" /* Payment_Method */],
                __WEBPACK_IMPORTED_MODULE_7__pages_forget_password_forget_password__["a" /* Forget_Password */],
                __WEBPACK_IMPORTED_MODULE_20__pages_order_success_order_success__["a" /* Order_Success */],
                __WEBPACK_IMPORTED_MODULE_12__pages_rating_rating__["a" /* Rating */],
                __WEBPACK_IMPORTED_MODULE_9__pages_splashscreen_splashscreen__["a" /* SplashscreenPage */],
                // ...............
                __WEBPACK_IMPORTED_MODULE_22__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_complaints_complaints__["a" /* ComplaintsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/change-password/change-password.module#Change_PasswordModule', name: 'Change_Password', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/complaints/complaints.module#ComplaintsPageModule', name: 'ComplaintsPage', segment: 'complaints', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forget-password/forget-password.module#Forget_PasswordModule', name: 'Forget_Password', segment: 'forget-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-detail/order-detail.module#OrderDetailPageModule', name: 'Order_Detail', segment: 'order-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-success/order-success.module#Order_SuccessModule', name: 'Order_Success', segment: 'order-success', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rating/rating.module#RatingPageModule', name: 'Rating', segment: 'rating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-method/payment-method.module#PaymentMethodPageModule', name: 'Payment_Method', segment: 'payment-method', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'Signup', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splashscreen/splashscreen.module#SplashscreenPageModule', name: 'SplashscreenPage', segment: 'splashscreen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-profile/update-profile.module#Update_ProfileModule', name: 'Update_Profile', segment: 'update-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                // ...............
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_7__pages_forget_password_forget_password__["a" /* Forget_Password */],
                __WEBPACK_IMPORTED_MODULE_13__pages_service_detail_service_detail__["a" /* Service_Detail */],
                __WEBPACK_IMPORTED_MODULE_14__pages_problem_form_problem_form__["a" /* Problem_Form */],
                __WEBPACK_IMPORTED_MODULE_11__pages_order_detail_order_detail__["a" /* Order_Detail */],
                __WEBPACK_IMPORTED_MODULE_8__pages_payments_payments__["a" /* Payments */],
                __WEBPACK_IMPORTED_MODULE_10__pages_payment_method_payment_method__["a" /* Payment_Method */],
                __WEBPACK_IMPORTED_MODULE_12__pages_rating_rating__["a" /* Rating */],
                // ...............
                __WEBPACK_IMPORTED_MODULE_21__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_order_success_order_success__["a" /* Order_Success */],
                __WEBPACK_IMPORTED_MODULE_22__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_complaints_complaints__["a" /* ComplaintsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_splashscreen_splashscreen__["a" /* SplashscreenPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_update_profile_update_profile__["a" /* Update_Profile */],
                __WEBPACK_IMPORTED_MODULE_19__pages_change_password_change_password__["a" /* Change_Password */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(107);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\services\src\pages\tabs\tabs.html"*/'<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" tabTitle="Services" tabIcon="pulse"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Proposal" tabIcon="chatboxes"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Orders" tabIcon="filing"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\services\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_splashscreen_splashscreen__ = __webpack_require__(111);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\services\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\services\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(25);
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
            selector: 'page-signup',template:/*ion-inline-start:"D:\services\src\pages\signup\signup.html"*/'\n<ion-content padding id="signup">\n<div class="image1">\n  <img src="../assets/icon/icon.png">\n</div>\n\n  <div padding id="margin-top">\n\n    <ion-item>\n      <ion-label> <ion-icon ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label> <ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n      <ion-input type="email" placeholder="Email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label> <ion-icon ios="ios-key" md="md-key"></ion-icon></ion-label>\n      <ion-input type="password" placeholder="Password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label> <ion-icon ios="ios-call" md="md-call"></ion-icon></ion-label>\n      <ion-input type="number" placeholder="Number"></ion-input>\n    </ion-item>\n\n\n      <ion-item>\n        <ion-label> Gender</ion-label>\n        <ion-select [(ngModel)]="gender">\n          <ion-option value="male">Male</ion-option>\n          <ion-option value="female">Female</ion-option>\n        </ion-select>\n      </ion-item>\n<br>\n\n    <div class="buttons">\n      <button ion-button block color="danger" (click)="tabspages()">Signup</button>\n\n    </div>\n  </div>\n  <br>\n<!--<div class="image2">-->\n  <!--<img src="../assets/icon/icon2.png">-->\n<!--</div>-->\n</ion-content>\n'/*ion-inline-end:"D:\services\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Signup);
    return Signup;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map