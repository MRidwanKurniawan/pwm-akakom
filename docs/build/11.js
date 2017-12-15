webpackJsonp([11],{

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBadgePageModule", function() { return CardBadgePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_badge__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardBadgePageModule = (function () {
    function CardBadgePageModule() {
    }
    CardBadgePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__card_badge__["a" /* CardBadgePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__card_badge__["a" /* CardBadgePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__card_badge__["a" /* CardBadgePage */]
            ]
        })
    ], CardBadgePageModule);
    return CardBadgePageModule;
}());

//# sourceMappingURL=card-badge.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardBadgePage; });
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


var CardBadgePage = (function () {
    function CardBadgePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cards = [
            {
                imageUrl: 'assets/img/card/bjork-live.jpg',
                title: 'Björk',
                description: 'Björk first came to prominence as one of the lead vocalists of the avant pop Icelandic sextet the Sugarcubes.',
                albums: 9,
                followers: '260k'
            },
            {
                imageUrl: 'assets/img/card/badu-live.png',
                title: 'Erykah Badu',
                description: 'American singer-songwriter, record producer, activist, and actress, Badu\'s style is a prime example of neo-soul.',
                albums: 4,
                followers: '120k'
            },
            {
                imageUrl: 'assets/img/card/queen-live.png',
                title: 'Queen',
                description: 'The British rock band formed in London in 1970, and is considered one of the biggest stadium rock bands in the world.',
                albums: 38,
                followers: '30mi'
            },
            {
                imageUrl: 'assets/img/card/rundmc-live.png',
                title: 'Run-D.M.C.',
                description: 'The American hip hop group widely acknowledged as one of the most influential acts in the history of hip hop.',
                albums: 8,
                followers: '80k'
            },
        ];
    }
    CardBadgePage.prototype.cardTapped = function (card) {
        alert(card.title + ' was tapped.');
    };
    CardBadgePage.prototype.followersTapped = function (card) {
        alert(card.title + ' followers tapped.');
    };
    CardBadgePage.prototype.albumsTapped = function (card) {
        alert(card.title + ' albums tapped.');
    };
    CardBadgePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-card-badge',template:/*ion-inline-start:"E:\pwm\akakomapps\src\pages\ionic-official-components\card\card-badge\card-badge.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Card with Badges</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor="let card of cards">\n\n    <img [src]="card.imageUrl" (click)="cardTapped(card)" />\n\n    <ion-card-content>\n\n      <h2 class="card-title">\n\n        {{card.title}}\n\n      </h2>\n\n      <p>\n\n        {{card.description}}\n\n      </p>\n\n    </ion-card-content>\n\n    <ion-item (click)="albumsTapped(card)">\n\n      <ion-icon name=\'musical-notes\' item-start class="albums-icon"></ion-icon>\n\n      Albums\n\n      <ion-badge item-end>{{card.albums}}</ion-badge>\n\n    </ion-item>\n\n    <ion-item (click)="followersTapped(card)">\n\n      <ion-icon name=\'logo-twitter\' item-start class="twitter-icon"></ion-icon>\n\n      Followers\n\n      <ion-badge item-end>{{card.followers}}</ion-badge>\n\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>\n\n`/*ion-inline-end:"E:\pwm\akakomapps\src\pages\ionic-official-components\card\card-badge\card-badge.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], CardBadgePage);
    return CardBadgePage;
}());

//# sourceMappingURL=card-badge.js.map

/***/ })

});
//# sourceMappingURL=11.js.map