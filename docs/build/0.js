webpackJsonp([0,7,13,14],{

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 195 modules
var ionic_angular = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/ionic-official-components/alert/alert.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var alert_AlertsPage = (function () {
    function AlertsPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.testRadioOpen = false;
        this.testCheckboxOpen = false;
    }
    AlertsPage.prototype.doAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['Ok']
        });
        alert.present();
    };
    AlertsPage.prototype.doConfirm = function () {
        var alert = this.alertCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    AlertsPage.prototype.doPrompt = function () {
        var alert = this.alertCtrl.create({
            title: 'Login',
            message: 'Enter a name for this new album you\'re so keen on adding',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked', data);
                    }
                }
            ]
        });
        alert.present();
    };
    AlertsPage.prototype.doRadio = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Lightsaber color');
        alert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Green',
            value: 'green'
        });
        alert.addInput({
            type: 'radio',
            label: 'Red',
            value: 'red'
        });
        alert.addInput({
            type: 'radio',
            label: 'Yellow',
            value: 'yellow'
        });
        alert.addInput({
            type: 'radio',
            label: 'Purple',
            value: 'purple'
        });
        alert.addInput({
            type: 'radio',
            label: 'White',
            value: 'white'
        });
        alert.addInput({
            type: 'radio',
            label: 'Black',
            value: 'black'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                console.log('Radio data:', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        alert.present();
    };
    AlertsPage.prototype.doCheckbox = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Which planets have you visited?');
        alert.addInput({
            type: 'checkbox',
            label: 'Alderaan',
            value: 'value1',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Coruscant',
            value: 'value3'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Endor',
            value: 'value4'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Hoth',
            value: 'value5'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Jakku',
            value: 'value6'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Naboo',
            value: 'value6'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Takodana',
            value: 'value6'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Tatooine',
            value: 'value6'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.testCheckboxOpen = false;
                _this.testCheckboxResult = data;
            }
        });
        alert.present();
    };
    AlertsPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-alert',template:/*ion-inline-start:"C:\xampp\htdocs\pwm\akakomapps\src\pages\ionic-official-components\alert\alert.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Lists</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <button ion-button block (click)="doAlert()">Basic Alert</button>\n\n  <button ion-button color="light" block (click)="doConfirm()">Confirm Alert</button>\n\n  <button ion-button color="secondary" block (click)="doPrompt()">Prompt Alert</button>\n\n  <button ion-button color="danger" block (click)="doRadio()">Radio Alert</button>\n\n  <button ion-button color="dark" block (click)="doCheckbox()">Checkbox Alert</button>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\xampp\htdocs\pwm\akakomapps\src\pages\ionic-official-components\alert\alert.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular["a" /* AlertController */]])
    ], AlertsPage);
    return AlertsPage;
}());

//# sourceMappingURL=alert.js.map
// CONCATENATED MODULE: ./src/pages/ionic-official-components/alert/alert.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsPageModule", function() { return alert_module_AlertsPageModule; });
var alert_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var alert_module_AlertsPageModule = (function () {
    function AlertsPageModule() {
    }
    AlertsPageModule = alert_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                alert_AlertsPage,
            ],
            imports: [
                ionic_angular["e" /* IonicPageModule */].forChild(alert_AlertsPage),
            ],
            exports: [
                alert_AlertsPage
            ]
        })
    ], AlertsPageModule);
    return AlertsPageModule;
}());

//# sourceMappingURL=alert.module.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 195 modules
var ionic_angular = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/ionic-official-components/button/button.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var button_ButtonsListPage = (function () {
    function ButtonsListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage = 'ButtonsListPage';
        this.items = [
            {
                title: 'Button Styles',
                page: 'ButtonStylesPage'
            },
            {
                title: 'Icon Buttons',
                page: 'IconButtonsPage'
            },
            {
                title: 'Buttons in Components',
                page: 'ButtonComponentsPage'
            },
        ];
    }
    ButtonsListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.page);
    };
    ButtonsListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ButtonsListPage');
    };
    ButtonsListPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-button',template:/*ion-inline-start:"C:\xampp\htdocs\pwm\akakomapps\src\pages\ionic-official-components\button\button.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Buttons</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content text-center>\n\n  <h4>Colors</h4>\n\n  <button ion-button>Default</button>\n\n  <button ion-button color="secondary">Secondary</button>\n\n  <button ion-button color="danger">Danger</button>\n\n  <button ion-button color="light">Light</button>\n\n  <button ion-button color="dark">Dark</button>\n\n\n\n  <h4>Shapes</h4>\n\n  <button ion-button full>Full Button</button>\n\n  <button ion-button block>Block Button</button>\n\n  <button ion-button round>Round Button</button>\n\n\n\n  <h4>Outlines</h4>\n\n  <button ion-button color="secondary" full outline>Outline + Full</button>\n\n  <button ion-button color="secondary" block outline>Outline + Block</button>\n\n  <button ion-button color="secondary" round outline>Outline + Round</button>\n\n\n\n  <h4>Icons</h4>\n\n  <button ion-button icon-left color="dark">\n\n    <ion-icon name="star"></ion-icon>\n\n    Left Icon\n\n  </button>\n\n  <button ion-button icon-right color="dark">\n\n    Right Icon\n\n    <ion-icon name="star"></ion-icon>\n\n  </button>\n\n  <button ion-button icon-only color="dark">\n\n    <ion-icon name="star"></ion-icon>\n\n  </button>\n\n   <button ion-button color="light" icon-left>\n\n    <ion-icon name=\'arrow-back\'></ion-icon>\n\n    Back\n\n  </button>\n\n  <button ion-button color="light" icon-only>\n\n    <ion-icon name=\'arrow-down\'></ion-icon>\n\n  </button>\n\n  <button ion-button color="light" icon-only>\n\n    <ion-icon name=\'arrow-up\'></ion-icon>\n\n  </button>\n\n  <button ion-button color="light" icon-right>\n\n    Next\n\n    <ion-icon name=\'arrow-forward\'></ion-icon>\n\n  </button>\n\n  <button ion-button icon-left>\n\n    <ion-icon name=\'home\'></ion-icon>\n\n    Home\n\n  </button>\n\n  <button ion-button outline icon-left>\n\n    <ion-icon name=\'briefcase\' is-active="false"></ion-icon>\n\n    Work\n\n  </button>\n\n  <button ion-button clear icon-left>\n\n    <ion-icon name=\'beer\' is-active="false"></ion-icon>\n\n    Pub\n\n  </button>\n\n  <button ion-button color="secondary" icon-left>\n\n    <ion-icon name=\'people\'></ion-icon>\n\n    Friends\n\n  </button>\n\n  <button ion-button color="secondary" outline icon-left>\n\n    <ion-icon name=\'paw\' is-active="false"></ion-icon>\n\n    Best Friend\n\n  </button>\n\n  <button ion-button color="danger" icon-left>\n\n    <ion-icon name=\'close\'></ion-icon>\n\n    Remove\n\n  </button>\n\n  <button ion-button color="danger" outline icon-only>\n\n    <ion-icon name=\'remove-circle\' is-active="false"></ion-icon>\n\n  </button>\n\n  <button ion-button color="danger" clear icon-only>\n\n    <ion-icon name=\'trash\' is-active="false"></ion-icon>\n\n  </button>\n\n  <button ion-button color="dark" round icon-left>\n\n    <ion-icon name=\'construct\' is-active="false"></ion-icon>\n\n    Tools\n\n  </button>\n\n  <button ion-button color="dark" clear icon-only>\n\n    <ion-icon name=\'hammer\' is-active="false"></ion-icon>\n\n  </button>\n\n\n\n  <h4>Sizes</h4>\n\n  <button ion-button color="light" large>Large</button>\n\n  <button ion-button color="light">Default</button>\n\n  <button ion-button color="light" small>Small</button>\n\n\n\n  <!-- Float Action Buttons -->\n\n  <ion-fab right top edge>\n\n    <button ion-fab class="pop-in" color="dark">\n\n        FAB\n\n    </button>\n\n  </ion-fab>\n\n  <ion-fab bottom right >\n\n    <button ion-fab class="pop-in" color="danger">Share</button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab color="primary">\n\n        <ion-icon  name="logo-facebook"></ion-icon>\n\n      </button>\n\n      <button ion-fab color="secondary">\n\n        <ion-icon name="logo-twitter"></ion-icon>\n\n      </button>\n\n      <button ion-fab color="dark">\n\n        <ion-icon name="logo-instagram"></ion-icon>\n\n      </button>\n\n    </ion-fab-list>\n\n    <ion-fab-list side="left">\n\n      <button ion-fab>\n\n        <ion-icon name="logo-github"></ion-icon>\n\n      </button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n\n\n  <h4>In components</h4>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <img src="assets/img/misc/img-icon.png" />\n\n    </ion-card-content>\n\n    <ion-item>\n\n      <button ion-button clear item-start>Like</button>\n\n      <button ion-button clear item-end>Comment</button>\n\n    </ion-item>\n\n  </ion-card>\n\n  <ion-list>\n\n    <ion-item>\n\n      Inner Button\n\n      <button ion-button item-end outline>Outline</button>\n\n    </ion-item>\n\n    <ion-item>\n\n      Left Icon Button \n\n      <button ion-button item-end outline icon-left>\n\n        <ion-icon name=\'star\'></ion-icon>\n\n        Left Icon\n\n      </button>\n\n    </ion-item>\n\n    <ion-item>\n\n      Right Icon Button\n\n      <button ion-button item-end outline icon-right>\n\n        Right Icon\n\n        <ion-icon name=\'star\'></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\xampp\htdocs\pwm\akakomapps\src\pages\ionic-official-components\button\button.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular["g" /* NavController */], ionic_angular["h" /* NavParams */]])
    ], ButtonsListPage);
    return ButtonsListPage;
}());

//# sourceMappingURL=button.js.map
// CONCATENATED MODULE: ./src/pages/ionic-official-components/button/button.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsListPageModule", function() { return button_module_ButtonsListPageModule; });
var button_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var button_module_ButtonsListPageModule = (function () {
    function ButtonsListPageModule() {
    }
    ButtonsListPageModule = button_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                button_ButtonsListPage,
            ],
            imports: [
                ionic_angular["e" /* IonicPageModule */].forChild(button_ButtonsListPage),
            ],
            exports: [
                button_ButtonsListPage
            ]
        })
    ], ButtonsListPageModule);
    return ButtonsListPageModule;
}());

//# sourceMappingURL=button.module.js.map

/***/ }),

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

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicOfficialComponentsPageModule", function() { return IonicOfficialComponentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_button_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_official_components__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var IonicOfficialComponentsPageModule = (function () {
    function IonicOfficialComponentsPageModule() {
    }
    IonicOfficialComponentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_official_components__["a" /* IonicOfficialComponentsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__ionic_official_components__["a" /* IonicOfficialComponentsPage */]),
                __WEBPACK_IMPORTED_MODULE_2__alert_alert_module__["AlertsPageModule"],
                __WEBPACK_IMPORTED_MODULE_1__button_button_module__["ButtonsListPageModule"],
                __WEBPACK_IMPORTED_MODULE_0__card_card_module__["CardListPageModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_official_components__["a" /* IonicOfficialComponentsPage */]
            ]
        })
    ], IonicOfficialComponentsPageModule);
    return IonicOfficialComponentsPageModule;
}());

//# sourceMappingURL=ionic-official-components.module.js.map

/***/ })

});
//# sourceMappingURL=0.js.map