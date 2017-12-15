webpackJsonp([5],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mid3PageModule", function() { return Mid3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mid3__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Mid3PageModule = (function () {
    function Mid3PageModule() {
    }
    Mid3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mid3__["a" /* Mid3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mid3__["a" /* Mid3Page */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__mid3__["a" /* Mid3Page */]
            ]
        })
    ], Mid3PageModule);
    return Mid3PageModule;
}());

//# sourceMappingURL=mid3.module.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mid3Page; });
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
 * Generated class for the Mid3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Mid3Page = (function () {
    function Mid3Page(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = 'Mid3Page';
    }
    Mid3Page.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.page);
    };
    Mid3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mid3',template:/*ion-inline-start:"E:\pwm\akakomapps\src\pages\program-studi\mid3\mid3.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      MANAJEMEN INFORMATIKA (D3)\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page8">\n\n  <div id="mANAJEMENINFORMATIKAD3-markdown5" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      Dalam situasi perekonomian saat ini, pemerintah Indonesia memerlukan upaya-upaya baru untuk mengembalikan kehidupan perekonomian yang lebih baik. Salah satu bentuk upaya yang sedang dilakukan adalah sedikit menggeser prioritas perekonomian nasional dari\n\n      bentuk resource-base economy ke bentuk knowledge-base economy. Dengan pola pergeseran ini, peran IPTEK menjadi sangat penting untuk mendukung visi Pembangunan Jangka Panjang (RPJP) tahun 2005-2025 yaitu “Indonesia Yang Maju, Mandiri, dan Adil”.\n\n      Sejalan dengan hal tersebut, banyak organisasi yang telah berkembang ke bentuk dynamic network. Dalam dynamic network organization, peranan TI menjadi sangat penting.\n\n    </p>\n\n    <p style="color:#000000;">\n\n      Jurusan/program studi Manajemen Informatika dengan jenjang D3 diharapkan dapat memberikan kontribusi untuk mewujudkan kebutuhan tenaga-tenaga siap pakai pada semua bidang TI. Dalam mewujudkan harapan tersebut maka jurusan/program studi Manajemen Informatika\n\n      membuat kurikulum yang berbasis kompetensi.\n\n    </p>\n\n    <p style="color:#000000;">\n\n      Sesuai dengan Keputusan Menteri Pendidikan Nasional RI No. 232 Tahun 2000 tentang Pedoman Penyusunan Kurikulum Pendidikan Tinggi dan Penilaian Hasil Belajar Mahasiswa, jurusan/program studi Manajemen Informatika jenjang D3 (MI-D3), pada tahun akademik\n\n      2004/2005 mengikuti pola yang dianjurkan oleh SK Mendiknas tersebut. Setelah melalui proses yang cukup panjang, kurikulum berbasis kompetensi program studi MI diberlakukan bagi semua mahasiswa MI yang belum menyelesaikan studinya hingga tahun akademik\n\n      2003/2004. Selain hasil kurikulum yang dituangkan dalam bentuk distribusi semesteran, pengembangan isi dan materi silabi juga diberlakukan.\n\n    </p>\n\n  </div>\n\n</ion-content>`/*ion-inline-end:"E:\pwm\akakomapps\src\pages\program-studi\mid3\mid3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], Mid3Page);
    return Mid3Page;
}());

//# sourceMappingURL=mid3.js.map

/***/ })

});
//# sourceMappingURL=5.js.map