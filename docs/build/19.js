webpackJsonp([19],{

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScannerPageModule", function() { return BarcodeScannerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__barcode_scanner__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BarcodeScannerPageModule = (function () {
    function BarcodeScannerPageModule() {
    }
    BarcodeScannerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__barcode_scanner__["a" /* BarcodeScannerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__barcode_scanner__["a" /* BarcodeScannerPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__barcode_scanner__["a" /* BarcodeScannerPage */]
            ]
        })
    ], BarcodeScannerPageModule);
    return BarcodeScannerPageModule;
}());

//# sourceMappingURL=barcode-scanner.module.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeScannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarcodeScannerPage = (function () {
    function BarcodeScannerPage(navCtrl, barcodeScanner, alertCtrl) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
    }
    BarcodeScannerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BarcodescannerPage');
    };
    BarcodeScannerPage.prototype.scan = function () {
        var _this = this;
        var options = {
            preferFrontCamera: false,
            showFlipCameraButton: true,
            showTorchButton: true,
            torchOn: false,
            prompt: 'Place a barcode inside the scan area',
            // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            resultDisplayDuration: 500,
            formats: 'QR_CODE,PDF_417',
            // Android only (portrait|landscape), default unset so it rotates with the device
            orientation: 'portrait',
            disableAnimations: true,
            disableSuccessBeep: false // iOS
        };
        this.barcodeScanner
            .scan(options)
            .then(function (data) {
            _this.barcodeData = data;
            var alert = _this.alertCtrl.create({
                title: 'Scan Results',
                subTitle: data.text,
                buttons: ['OK']
            });
            alert.present();
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Attention!',
                subTitle: err,
                buttons: ['Close']
            });
            alert.present();
        });
    };
    BarcodeScannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-barcode-scanner',template:/*ion-inline-start:"E:\pwm\akakomapps\src\pages\ionic-native\barcode-scanner\barcode-scanner.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Barcode Scanner</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <p>NOTE: THIS ONLY WORKS ON MOBILE!</p>\n\n\n\n  <div class="json">{{ barcodeData | json }}</div>\n\n\n\n  <div text-center>\n\n    <button ion-button icon-left color="primary" (click)="scan()">\n\n      <ion-icon name="qr-scanner"></ion-icon>\n\n      Scan\n\n    </button>\n\n  </div>\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"E:\pwm\akakomapps\src\pages\ionic-native\barcode-scanner\barcode-scanner.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], BarcodeScannerPage);
    return BarcodeScannerPage;
}());

//# sourceMappingURL=barcode-scanner.js.map

/***/ })

});
//# sourceMappingURL=19.js.map