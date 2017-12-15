webpackJsonp([2],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tkd3PageModule", function() { return Tkd3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tkd3__ = __webpack_require__(373);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tkd3PageModule = (function () {
    function Tkd3PageModule() {
    }
    Tkd3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tkd3__["a" /* Tkd3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tkd3__["a" /* Tkd3Page */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tkd3__["a" /* Tkd3Page */]
            ]
        })
    ], Tkd3PageModule);
    return Tkd3PageModule;
}());

//# sourceMappingURL=tkd3.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tkd3Page; });
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
 * Generated class for the Tkd3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tkd3Page = (function () {
    function Tkd3Page(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = 'Tkd3Page';
    }
    Tkd3Page.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.page);
    };
    Tkd3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tkd3',template:/*ion-inline-start:"E:\pwm\akakomapps\src\pages\program-studi\tkd3\tkd3.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      TEKNIK KOMPUTER (D3)\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page7">\n\n  <div id="tEKNIKKOMPUTERD3-markdown4" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      Dilandasi kesadaran potensi pesatnya kemajuan teknologi elektronika, program studi Teknik Komputer jenjang D3 merupakan bagian Jurusan Teknik Komputer yang mengemban amanat melatih dan menghasilkan ahli madya yang berkecimpung dalam lingkup teknik elektronika,\n\n      microprocessor, instrumentasi kendali, dan telekomunikasi. Peran ahli madya bidang ini antara lain untuk menjembatani level perancang dan pengguna teknologi, melakukan supervisi proses produksi, melakukan instalasi-instalasi systems dan networking\n\n      untuk berbagai keperluan mulai dari perkantoran, housing, hotels, medis, sarana navigasi, hingga entertainment support.\n\n    </p>\n\n    <p style="color:#000000;">\n\n      Mahasiswa program ini disarankan menyelesaikan beban akademik 110 sks dan latihan kerja dalam rentang 6 semester. Frame akademik dalam program ini sarat kegiatan praktek dengan peranti hi-tech measurement dan device programming, sehingga mahasiswa dituntut\n\n      tekun dan berlatih mengembangkan logika. Alur matakuliah dan praktik yang ada mengindikasikan kepada konsentrasi Instrumentasi, Future Control, dan Jaringan Computer. Pada akhir masa studi, mahasiswa dilatih menyelesaikan laporan tugas akhir, yang\n\n      menunjukkan penguasaan penyelesaian pekerjaan tertentu dalam lingkup yang disebut di muka. Mahasiswa yang mampu dapat melanjutkan studi pada jenjang selanjutnya (D4/S1), bidang yang sesuai umumnya adalah dengan lingkup keteknikan dan systems.\n\n    </p>\n\n  </div>\n\n</ion-content>`/*ion-inline-end:"E:\pwm\akakomapps\src\pages\program-studi\tkd3\tkd3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], Tkd3Page);
    return Tkd3Page;
}());

//# sourceMappingURL=tkd3.js.map

/***/ })

});
//# sourceMappingURL=2.js.map