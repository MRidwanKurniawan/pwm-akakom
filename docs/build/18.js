webpackJsonp([18],{

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardScanPageModule", function() { return CreditCardScanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__credit_card_scan__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreditCardScanPageModule = (function () {
    function CreditCardScanPageModule() {
    }
    CreditCardScanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__credit_card_scan__["a" /* CreditCardScanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__credit_card_scan__["a" /* CreditCardScanPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__credit_card_scan__["a" /* CreditCardScanPage */]
            ]
        })
    ], CreditCardScanPageModule);
    return CreditCardScanPageModule;
}());

//# sourceMappingURL=credit-card-scan.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditCardScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_card_io__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreditCardScanPage = (function () {
    function CreditCardScanPage(navCtrl, cardIO) {
        this.navCtrl = navCtrl;
        this.cardIO = cardIO;
        this.cardImage = 'assets/img/misc/credit-card.png';
        this.card = {
            cardType: '',
            cardNumber: '',
            redactedCardNumber: '',
            expiryMonth: null,
            expiryYear: null,
            cvv: '',
            postalCode: ''
        };
        // Just to animate the fab
        this.fabGone = false;
    }
    CreditCardScanPage.prototype.ionViewDidLoad = function () {
        console.log('Hello CreditCardScan Page');
    };
    CreditCardScanPage.prototype.scanCard = function () {
        var _this = this;
        this.cardIO.canScan()
            .then(function (res) {
            if (res) {
                var options = {
                    scanExpiry: true,
                    hideCardIOLogo: true,
                    scanInstructions: 'Please position your card inside the frame',
                    keepApplicationTheme: true,
                    requireCCV: true,
                    requireExpiry: true,
                    requirePostalCode: false
                };
                _this.cardIO.scan(options).then(function (response) {
                    console.log('Scan complete');
                    var cardType = response.cardType, cardNumber = response.cardNumber, redactedCardNumber = response.redactedCardNumber, expiryMonth = response.expiryMonth, expiryYear = response.expiryYear, cvv = response.cvv, postalCode = response.postalCode;
                    _this.card = {
                        cardType: cardType,
                        cardNumber: cardNumber,
                        redactedCardNumber: redactedCardNumber,
                        expiryMonth: expiryMonth,
                        expiryYear: expiryYear,
                        cvv: cvv,
                        postalCode: postalCode
                    };
                });
            }
        });
    };
    CreditCardScanPage.prototype.ionViewWillEnter = function () {
        this.fabGone = false;
    };
    CreditCardScanPage.prototype.ionViewWillLeave = function () {
        this.fabGone = true;
    };
    CreditCardScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-credit-card-scan',template:/*ion-inline-start:"E:\pwm\akakomapps\src\pages\ionic-native\credit-card-scan\credit-card-scan.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Credit Card Scan</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <p>NOTE: THIS ONLY WORKS ON MOBILE!</p>\n\n  <div>\n\n    <img [src]="cardImage" />\n\n    <ion-fab right class="pop-in" [ngClass]="{\'pop-out\': fabGone}" style="top: 23rem;">\n\n      <button ion-fab mini (click)="scanCard()" color="dark"><ion-icon name="camera"></ion-icon></button>\n\n    </ion-fab>\n\n  </div>\n\n  <div>\n\n    <ion-item>\n\n      <ion-label>Card Type</ion-label>\n\n      <ion-input type="text" [(ngModel)]="card.cardType"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Card Number</ion-label>\n\n      <ion-input type="text" [(ngModel)]="card.cardNumber"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Expiry Month</ion-label>\n\n      <ion-input type="text" [(ngModel)]="card.expiryMonth"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Expiry Year</ion-label>\n\n      <ion-input type="text" [(ngModel)]="card.expiryYear"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>CVV</ion-label>\n\n      <ion-input type="text" [(ngModel)]="card.cvv"></ion-input>\n\n    </ion-item>\n\n  </div>\n\n</ion-content>\n\n\n\n`/*ion-inline-end:"E:\pwm\akakomapps\src\pages\ionic-native\credit-card-scan\credit-card-scan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_card_io__["a" /* CardIO */]])
    ], CreditCardScanPage);
    return CreditCardScanPage;
}());

//# sourceMappingURL=credit-card-scan.js.map

/***/ })

});
//# sourceMappingURL=18.js.map