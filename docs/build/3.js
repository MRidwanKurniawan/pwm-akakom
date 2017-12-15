webpackJsonp([3],{

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tis1PageModule", function() { return Tis1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tis1__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tis1PageModule = (function () {
    function Tis1PageModule() {
    }
    Tis1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tis1__["a" /* Tis1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tis1__["a" /* Tis1Page */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tis1__["a" /* Tis1Page */]
            ]
        })
    ], Tis1PageModule);
    return Tis1PageModule;
}());

//# sourceMappingURL=tis1.module.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tis1Page; });
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
 * Generated class for the Tis1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tis1Page = (function () {
    function Tis1Page(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = 'Tis1Page';
    }
    Tis1Page.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.page);
    };
    Tis1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tis1',template:/*ion-inline-start:"E:\pwm\akakomapps\src\pages\program-studi\tis1\tis1.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      TEKNIK INFORMATIKA (S1)\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page6">\n\n  <div id="tEKNIKINFORMATIKAS1-markdown3" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      Program Studi Teknik Informatika mulai diselenggarakan berdasarkan SK No. 300/DIKTI/Kep/1992. Saat ini Program Studi Teknik Informatika telah diakreditasi ‘B’ berdasarkan SK No. 028/BAN-PT/Ak-IX/S1/I/2006.\n\n    </p>\n\n    <p style="color:#000000;">\n\n      Minat untuk mengikuti pendidikan pada Program Studi Teknik Informatika sangat besar dan meningkat dari tahun ke tahun dan berasal dari semua propinsi di Indonesia. Hal ini dikarenakan kebutuhan alumni Program Studi Teknik Informatika cukup tinggi karena\n\n      hampir semua aspek membutuhkan teknologi informasi untuk berkembang. Selain itu juga mengisyaratkan bahwa Program Studi Teknik Informatika sudah dikenal dalam taraf nasional.\n\n    </p>\n\n    <p style="color:#000000;">\n\n      Jumlah alumni Program Studi Teknik Informatika hingga saat ini mencapai sekitar 1000 mahasiswa, yang telah bekerja pada perbankan, perminyakan, pendidikan, kesehatan , dan bidang-bidang lain. Banyak mahasiswa yang telah bekerja sebelum lulus dari pendidikannya.\n\n      Hal ini membuktikan bahwa ilmu yang diterima mahasiwa bisa digunakan kapan saja. Beberapa lapangan kerja alumni diantaranya Krakatau Steel, BRI, Pertamina, TOTAL, (SGM), Instansi Negeri (Kejaksaaan, Pemda, PTN), dan Perguruan Tinggi Swasta.\n\n    </p>\n\n    <p style="color:#000000;">\n\n      Kegiatan-kegiatan yang dilaksanakan oleh Program Studi Teknik Informatika sangat beragam. Kegiatan tersebut dalam bentuk penelitian bersama dosen dan mahasiswa, partisipan / penyelenggara even nasional maupun internasional (seminar, workshop, kuliah umum),\n\n      pelatihan teknologi informasi ke instansi/organisasi.\n\n    </p>\n\n  </div>\n\n</ion-content>`/*ion-inline-end:"E:\pwm\akakomapps\src\pages\program-studi\tis1\tis1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], Tis1Page);
    return Tis1Page;
}());

//# sourceMappingURL=tis1.js.map

/***/ })

});
//# sourceMappingURL=3.js.map