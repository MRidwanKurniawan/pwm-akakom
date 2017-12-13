webpackJsonp([7],{

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 195 modules
var ionic_angular = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/ionic-official-components/card/card.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var card_CardsListPage = (function () {
    function CardsListPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = 'CardsListPage';
        this.items = [
            {
                title: 'Cards with Background',
                page: 'CardBackgroundPage'
            },
            {
                title: 'Cards with Image',
                page: 'CardImagePage'
            },
            {
                title: 'Social Cards',
                page: 'CardSocialPage'
            },
            {
                title: 'Cards with Map',
                page: 'CardMapPage'
            },
            {
                title: 'Cards with Badge',
                page: 'CardBadgePage'
            },
        ];
    }
    CardsListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.page);
    };
    CardsListPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-card',template:/*ion-inline-start:"C:\xampp\htdocs\pwm\akakomapps\src\pages\ionic-official-components\card\card.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Profiles</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!--<ion-menu [content]="profilecontent" id="menu-profile">\n\n\n\n	<ion-content>\n\n		<ion-list>\n\n			<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n        {{item.title}}\n\n      </button>\n\n		</ion-list>\n\n	</ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="root" #profilecontent swipeBackEnabled="false"></ion-nav>-->\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      {{item.title}}\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\pwm\akakomapps\src\pages\ionic-official-components\card\card.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular["g" /* NavController */]])
    ], CardsListPage);
    return CardsListPage;
}());

//# sourceMappingURL=card.js.map
// CONCATENATED MODULE: ./src/pages/ionic-official-components/card/card.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardListPageModule", function() { return card_module_CardListPageModule; });
var card_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var card_module_CardListPageModule = (function () {
    function CardListPageModule() {
    }
    CardListPageModule = card_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                card_CardsListPage,
            ],
            imports: [
                ionic_angular["e" /* IonicPageModule */].forChild(card_CardsListPage),
            ],
            exports: [
                card_CardsListPage
            ]
        })
    ], CardListPageModule);
    return CardListPageModule;
}());

//# sourceMappingURL=card.module.js.map

/***/ })

});
//# sourceMappingURL=7.js.map