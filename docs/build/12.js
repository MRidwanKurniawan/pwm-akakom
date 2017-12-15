webpackJsonp([12],{

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBackgroundPageModule", function() { return CardBackgroundPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_background__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardBackgroundPageModule = (function () {
    function CardBackgroundPageModule() {
    }
    CardBackgroundPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__card_background__["a" /* CardBackgroundPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__card_background__["a" /* CardBackgroundPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__card_background__["a" /* CardBackgroundPage */]
            ]
        })
    ], CardBackgroundPageModule);
    return CardBackgroundPageModule;
}());

//# sourceMappingURL=card-background.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardBackgroundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardBackgroundPage = (function () {
    function CardBackgroundPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cards = [
            {
                imageUrl: 'assets/img/card/card-saopaolo.png',
                title: 'São Paulo',
                subtitle: '41 Listings'
            },
            {
                imageUrl: 'assets/img/card/card-amsterdam.png',
                title: 'Amsterdam',
                subtitle: '64 Listings'
            },
            {
                imageUrl: 'assets/img/card/card-sf.png',
                title: 'San Francisco',
                subtitle: '72 Listings'
            },
            {
                imageUrl: 'assets/img/card/card-madison.png',
                title: 'Madison',
                subtitle: '28 Listings'
            }
        ];
    }
    CardBackgroundPage.prototype.cardTapped = function (card) {
        alert(card.title + ' was tapped.');
    };
    CardBackgroundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-card-background',template:/*ion-inline-start:"E:\pwm\akakomapps\src\pages\ionic-official-components\card\card-background\card-background.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Card Background List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor="let card of cards" (click)="cardTapped(card)">\n\n    <img [src]="card.imageUrl" />\n\n    <div class="card-title">{{card.title}}</div>\n\n    <div class="card-subtitle">{{card.subtitle}}</div>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n`/*ion-inline-end:"E:\pwm\akakomapps\src\pages\ionic-official-components\card\card-background\card-background.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], CardBackgroundPage);
    return CardBackgroundPage;
}());

//# sourceMappingURL=card-background.js.map

/***/ })

});
//# sourceMappingURL=12.js.map