webpackJsonp([12],{

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 195 modules
var ionic_angular = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/ionic-official-components/card/card-background/card-background.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var card_background_CardBackgroundPage = (function () {
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
        Object(core["m" /* Component */])({
            selector: 'page-card-background',template:/*ion-inline-start:"C:\xampp\htdocs\pwm\akakomapps\src\pages\ionic-official-components\card\card-background\card-background.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Card Background List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor="let card of cards" (click)="cardTapped(card)">\n\n    <img [src]="card.imageUrl" />\n\n    <div class="card-title">{{card.title}}</div>\n\n    <div class="card-subtitle">{{card.subtitle}}</div>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\xampp\htdocs\pwm\akakomapps\src\pages\ionic-official-components\card\card-background\card-background.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular["g" /* NavController */]])
    ], CardBackgroundPage);
    return CardBackgroundPage;
}());

//# sourceMappingURL=card-background.js.map
// CONCATENATED MODULE: ./src/pages/ionic-official-components/card/card-background/card-background.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBackgroundPageModule", function() { return card_background_module_CardBackgroundPageModule; });
var card_background_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var card_background_module_CardBackgroundPageModule = (function () {
    function CardBackgroundPageModule() {
    }
    CardBackgroundPageModule = card_background_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                card_background_CardBackgroundPage,
            ],
            imports: [
                ionic_angular["e" /* IonicPageModule */].forChild(card_background_CardBackgroundPage),
            ],
            exports: [
                card_background_CardBackgroundPage
            ]
        })
    ], CardBackgroundPageModule);
    return CardBackgroundPageModule;
}());

//# sourceMappingURL=card-background.module.js.map

/***/ })

});
//# sourceMappingURL=12.js.map