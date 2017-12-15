webpackJsonp([4],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sis1PageModule", function() { return Sis1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sis1__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Sis1PageModule = (function () {
    function Sis1PageModule() {
    }
    Sis1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sis1__["a" /* Sis1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sis1__["a" /* Sis1Page */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__sis1__["a" /* Sis1Page */]
            ]
        })
    ], Sis1PageModule);
    return Sis1PageModule;
}());

//# sourceMappingURL=sis1.module.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sis1Page; });
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


/**
 * Generated class for the Sis1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Sis1Page = (function () {
    function Sis1Page(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = 'Sis1Page';
    }
    Sis1Page.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.page);
    };
    Sis1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sis1',template:/*ion-inline-start:"E:\pwm\akakomapps\src\pages\program-studi\sis1\sis1.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      SISTEM INFORMATIKA (S1)\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page5">\n\n  <div id="sISTEMINFORMATIKAS1-markdown2" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      Program Studi Sistem Informasi merupakan salah satu program studi yang diselenggarakan oleh STMIK AKAKOM. Program Studi Sistem Informasi mulai diselenggarakan berdasarkan SK No. 300/Dikti/Kep/1992 saat itu dengan nama Manajemen Informatika. Dan saat ini\n\n      telah terakreditasi ‘B’ berdasarkan SK No. 011/BAN-PT/Ak-X/S1/VIII/2006.\n\n    </p>\n\n    <p style="color:#000000;">\n\n      Pada tahun 2009 Program Studi ini telah menerapkan kurikulum berbasis kompetensi. Dalam kurikulum yang dirancang untuk 8 semester ini, program studi mengarahkan minat sistem informasi berorientasi bisnis dan akuntansi. Dengan demikian, diharapkan lulusan\n\n      akan dapat menganalisis, merancang, mengimplementasikan sistem informasi yang bisa membantu keputusan bisnis ataupun akuntansinya. Dengan kurikulum yang dirancang seperti itu, maka peminat program studi ini, bisa berasal dari berbagai jurusan yang\n\n      ada di SLTA.\n\n    </p>\n\n    <p style="color:#000000;">\n\n      Mahasiswa program studi ini, berasal dari berbagai daerah, yang menunjukkan bahwa program studi ini sudah dikenal di daerah mereka. Namun, tidak bisa dipungkiri bahwa program studi harus terus meningkatkan mutu agar selalu bisa bersaing.\n\n    </p>\n\n  </div>\n\n</ion-content>`/*ion-inline-end:"E:\pwm\akakomapps\src\pages\program-studi\sis1\sis1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], Sis1Page);
    return Sis1Page;
}());

//# sourceMappingURL=sis1.js.map

/***/ })

});
//# sourceMappingURL=4.js.map