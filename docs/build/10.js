webpackJsonp([10],{

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImagePageModule", function() { return CardImagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_image__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardImagePageModule = (function () {
    function CardImagePageModule() {
    }
    CardImagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__card_image__["a" /* CardImagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__card_image__["a" /* CardImagePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__card_image__["a" /* CardImagePage */]
            ]
        })
    ], CardImagePageModule);
    return CardImagePageModule;
}());

//# sourceMappingURL=card-image.module.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardImagePage; });
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


var CardImagePage = (function () {
    function CardImagePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cards = [
            {
                imageUrl: 'assets/img/card/nin-live.png',
                title: 'Nine Inch Nails Live',
                description: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.'
            },
            {
                imageUrl: 'assets/img/card/badu-live.png',
                title: 'Erykah Badu',
                description: 'American singer-songwriter, record producer, activist, and actress, Badu\'s style is a prime example of neo-soul.'
            },
            {
                imageUrl: 'assets/img/card/queen-live.png',
                title: 'Queen',
                description: 'The British rock band formed in London in 1970, and is considered one of the biggest stadium rock bands in the world.'
            },
            {
                imageUrl: 'assets/img/card/bjork-live.jpg',
                title: 'Björk',
                description: 'Björk is an Icelandic singer, songwriter and actress.'
            },
            {
                imageUrl: 'assets/img/card/rundmc-live.png',
                title: 'Run-D.M.C.',
                description: 'The American hip hop group widely acknowledged as one of the most influential acts in the history of hip hop.'
            },
        ];
    }
    CardImagePage.prototype.cardTapped = function (card) {
        alert(card.title + ' was tapped.');
    };
    CardImagePage.prototype.share = function (card) {
        alert(card.title + ' was shared.');
    };
    CardImagePage.prototype.listen = function (card) {
        alert('Listening to ' + card.title);
    };
    CardImagePage.prototype.favorite = function (card) {
        alert(card.title + ' was favorited.');
    };
    CardImagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-card-image',template:/*ion-inline-start:"E:\pwm\akakomapps\src\pages\ionic-official-components\card\card-image\card-image.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Card with Images</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor="let card of cards">\n\n    <img [src]="card.imageUrl" (click)="cardTapped(card)" />\n\n    <ion-card-content>\n\n      <h2 class="card-title">\n\n        {{card.title}}\n\n      </h2>\n\n      <p>\n\n        {{card.description}}\n\n      </p>\n\n    </ion-card-content>\n\n    <ion-row no-padding>\n\n      <ion-col>\n\n        <button ion-button clear small color="danger" icon-left (click)="favorite(card)">\n\n          <ion-icon name=\'star\'></ion-icon>\n\n          Favorite\n\n        </button>\n\n      </ion-col>\n\n      <ion-col text-center>\n\n        <button ion-button clear small color="danger" icon-left (click)="listen(card)">\n\n          <ion-icon name=\'musical-notes\'></ion-icon>\n\n          Listen\n\n        </button>\n\n      </ion-col>\n\n      <ion-col text-right>\n\n        <button ion-button clear small color="danger" icon-left (click)="share(card)">\n\n          <ion-icon name=\'share-alt\'></ion-icon>\n\n          Share\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n`/*ion-inline-end:"E:\pwm\akakomapps\src\pages\ionic-official-components\card\card-image\card-image.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], CardImagePage);
    return CardImagePage;
}());

//# sourceMappingURL=card-image.js.map

/***/ })

});
//# sourceMappingURL=10.js.map