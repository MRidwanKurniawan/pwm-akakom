webpackJsonp([13],{

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

/***/ })

});
//# sourceMappingURL=13.js.map