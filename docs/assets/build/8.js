webpackJsonp([8],{

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 195 modules
var ionic_angular = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/ionic-official-components/card/card-social/card-social.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var card_social_CardSocialPage = (function () {
    function CardSocialPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cards = [
            {
                avatarImageUrl: 'assets/img/avatar/marty-avatar.png',
                postImageUrl: 'assets/img/card/advance-card-bttf.png',
                name: 'Marty Mcfly',
                postText: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
                date: 'November 5, 1955',
                likes: 12,
                comments: 4,
                timestamp: '11h ago'
            },
            {
                avatarImageUrl: 'assets/img/avatar/sarah-avatar.jpg',
                postImageUrl: 'assets/img/card/advance-card-tmntr.jpg',
                name: 'Sarah Connor',
                postText: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.',
                date: 'May 12, 1984',
                likes: 30,
                comments: 64,
                timestamp: '30yr ago'
            },
            {
                avatarImageUrl: 'assets/img/avatar/ian-avatar.png',
                postImageUrl: 'assets/img/card/advance-card-jp.jpg',
                name: 'Dr. Ian Malcolm',
                postText: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.',
                date: 'June 28, 1990',
                likes: 46,
                comments: 66,
                timestamp: '2d ago'
            },
        ];
    }
    CardSocialPage.prototype.imageTapped = function (card) {
        alert(card.name + ' image was tapped.');
    };
    CardSocialPage.prototype.like = function (card) {
        alert(card.name + ' was liked.');
    };
    CardSocialPage.prototype.comment = function (card) {
        alert('Commenting to ' + card.name);
    };
    CardSocialPage.prototype.avatarTapped = function (card) {
        alert(card.name + ' avatar was tapped.');
    };
    CardSocialPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-card-social',template:/*ion-inline-start:"C:\xampp\htdocs\pwm\akakomapps\src\pages\ionic-official-components\card\card-social\card-social.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Social Cards</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor="let card of cards">\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img [src]="card.avatarImageUrl" (click)="avatarTapped(card)">\n\n      </ion-avatar>\n\n      <h2>{{card.name}}</h2>\n\n      <p>{{card.date}}</p>\n\n    </ion-item>\n\n    <img [src]="card.postImageUrl" (click)="imageTapped(card)">\n\n    <ion-card-content>\n\n      <p>{{card.postText}}</p>\n\n    </ion-card-content>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button color="primary" clear small icon-left (click)="like(card)">\n\n        <ion-icon name=\'thumbs-up\'></ion-icon>\n\n        {{card.likes}} Likes\n\n      </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button color="primary" clear small icon-left (click)="comment(card)">\n\n        <ion-icon name=\'text\'></ion-icon>\n\n        {{card.comments}} Comments\n\n      </button>\n\n      </ion-col>\n\n      <ion-col center text-center>\n\n        <ion-note>\n\n          {{card.timestamp}}\n\n        </ion-note>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\pwm\akakomapps\src\pages\ionic-official-components\card\card-social\card-social.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular["g" /* NavController */]])
    ], CardSocialPage);
    return CardSocialPage;
}());

//# sourceMappingURL=card-social.js.map
// CONCATENATED MODULE: ./src/pages/ionic-official-components/card/card-social/card-social.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSocialPageModule", function() { return card_social_module_CardSocialPageModule; });
var card_social_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var card_social_module_CardSocialPageModule = (function () {
    function CardSocialPageModule() {
    }
    CardSocialPageModule = card_social_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                card_social_CardSocialPage,
            ],
            imports: [
                ionic_angular["e" /* IonicPageModule */].forChild(card_social_CardSocialPage),
            ],
            exports: [
                card_social_CardSocialPage
            ]
        })
    ], CardSocialPageModule);
    return CardSocialPageModule;
}());

//# sourceMappingURL=card-social.module.js.map

/***/ })

});
//# sourceMappingURL=8.js.map