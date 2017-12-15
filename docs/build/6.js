webpackJsonp([6],{

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kad3PageModule", function() { return Kad3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kad3__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Kad3PageModule = (function () {
    function Kad3PageModule() {
    }
    Kad3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__kad3__["a" /* Kad3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__kad3__["a" /* Kad3Page */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__kad3__["a" /* Kad3Page */]
            ]
        })
    ], Kad3PageModule);
    return Kad3PageModule;
}());

//# sourceMappingURL=kad3.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Kad3Page; });
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
 * Generated class for the Kad3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Kad3Page = (function () {
    function Kad3Page(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = 'Kad3Page';
    }
    Kad3Page.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(item.page);
    };
    Kad3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-kad3',template:/*ion-inline-start:"E:\pwm\akakomapps\src\pages\program-studi\kad3\kad3.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      KOMPUTERISASI AKUNTANSI (D3)\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page9">\n\n  <div id="kOMPUTERISASIAKUNTANSID3-markdown6" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      Program studi Komputerisasi Akuntansi merupakan program studi yang berusia relatif muda dan dikembangkan berdasarkan kebutuhan tenaga kerja pada industri yang menginginkan adanya tenaga kerja yang mempunyai skill di bidang komputer serta memahami akuntansi\n\n      sebagai bahasa bisnis.\n\n    </p>\n\n    <p style="color:#000000;">\n\n      Saat ini, tenaga kerja yang memenuhi persyaratan skill di bidang tersebut masih terasa sangat kurang dan tenaga kerja dengan skill akuntansi dan komputer akan selalu diperlukan selama masih terdapat perusahaan-perusahaan dan organisasi-organisasi lain\n\n      yang memerlukan akuntansi berkomputer dalam operasinya.\n\n    </p>\n\n    <p style="color:#000000;">\n\n      Perkembangan industri saat ini telah memicu perkembangan ke enterprise information system, yaitu sistem informasi yang akan diterapkan pada ruang lingkup yang besar dari perusahaan. Besar disini meliputi jangkauan transaksi serta area yang luas meliputi\n\n      seluruh dunia. Hal tersebut dimungkinkan karena perkembangan teknologi Intranet, Internet, serta Extranet yang sangat pesat. EIS mempunyai inti pada dua bidang, yaitu serta pengetahuan bisnis. Hal tersebut merupakan inti dari program studi Komputerisasi\n\n      Akuntansi.\n\n    </p>\n\n    <p style="color:#000000;">\n\n      Dalam program studi ini, mahasiswa dididik untuk mempunyai pola pikir sebagai pengembang sistem informasi akuntansi. Dengan pola pikir tersebut, mahasiswa akan diuntungkan karena selain mampu mengembangkan sistem informasi akuntansi sendiri, mahasiswa\n\n      juga mengetahui bagaimana seharusnya suatu software akuntansi bekerja. Dengan demikian, lulusan dari program studi Komputerisasi Akuntansi tidak akan mengalami kesulitan menggunakan berbagai software akuntansi.\n\n    </p>\n\n    <p style="color:#000000;">\n\n      Dalam kaitan sebagai pengembang sistem informasi akuntansi, mahasiswa akan dididik secara konsisten untuk menggunakan piranti dan metodologi yang berbasis Object-Oriented karena metodologi serta piranti tersebut yang banyak digunakan oleh industri pada\n\n      saat ini dan masa yang akan datang. Metodologi seperti RUP, Extreme Programming, serta metodologi-metodologi Agile lainnya seharusnya dipahami dengan baik oleh mahasiswa karena merupakan materi yang diajarkan di Komputerisasi Akuntansi. Demikian\n\n      juga dengan piranti pemodelan berbasis UML merupakan kompetensi dari mahasiswa Komputerisasi Akuntansi. Seiring dengan makin meningkatkan penggunaan software open source di masa kini dan masa yang akan datang (komitmen dari Oracle, IBM, serta HP\n\n      menunjukkan hal tersebut), program studi Komputerisasi Akuntansi mendeklarasikan diri sebagai program studi yang memfokuskan diri pada peranti berbasis open source mulai dari awal kuliah sampai mahasiswa lulus.\n\n    </p>\n\n    <p style="color:#000000;">\n\n      Sementara itu, dalam kaitannya dengan sistem informasi akuntansi, mahasiswa akan mendapatkan materi yang memadai dalam hal akuntansi serta sistem akuntansi. Akuntansi manual mulai dari akuntansi pengantar, akuntansi keuangan menengah dan lanjut, akuntansi\n\n      kos dan akuntansi manajemen akan memberi bekal yang memadai bagi lulusan Komputerisasi Akuntansi. Berbagai materi pendukung lainnya untuk kepentingan pengembangan diri (seperti etika bisnis dan profesi, aspek legal, dan lain-lain) dan pengkayaan\n\n      wawasan bisnis juga diharapkan akan memperkuat lulusan dari Komputerisasi Akuntansi.\n\n    </p>\n\n  </div>\n\n</ion-content>`/*ion-inline-end:"E:\pwm\akakomapps\src\pages\program-studi\kad3\kad3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], Kad3Page);
    return Kad3Page;
}());

//# sourceMappingURL=kad3.js.map

/***/ })

});
//# sourceMappingURL=6.js.map