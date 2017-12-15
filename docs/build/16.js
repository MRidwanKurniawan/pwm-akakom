webpackJsonp([16],{

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeGoogleMapsPageModule", function() { return NativeGoogleMapsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_google_maps__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NativeGoogleMapsPageModule = (function () {
    function NativeGoogleMapsPageModule() {
    }
    NativeGoogleMapsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__native_google_maps__["a" /* NativeGoogleMapsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__native_google_maps__["a" /* NativeGoogleMapsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__native_google_maps__["a" /* NativeGoogleMapsPage */]
            ]
        })
    ], NativeGoogleMapsPageModule);
    return NativeGoogleMapsPageModule;
}());

//# sourceMappingURL=native-google-maps.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeGoogleMapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_native_google_maps_native_google_maps__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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



var NativeGoogleMapsPage = (function () {
    function NativeGoogleMapsPage(navCtrl, mapsCtrl) {
        this.navCtrl = navCtrl;
        this.mapsCtrl = mapsCtrl;
    }
    // Load map only after view is initialized
    NativeGoogleMapsPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.mapsCtrl.create(this.mapElement).then(function () { return _this.mapsCtrl.centerToGeolocation(); });
    };
    NativeGoogleMapsPage.prototype.addMarker = function () {
        this.mapsCtrl.addMarkerToGeolocation('Click me!', this.callbackSample);
    };
    NativeGoogleMapsPage.prototype.callbackSample = function () {
        alert('The callback was called :D');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], NativeGoogleMapsPage.prototype, "mapElement", void 0);
    NativeGoogleMapsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-native-google-maps',template:/*ion-inline-start:"E:\pwm\akakomapps\src\pages\ionic-native\native-google-maps\native-google-maps.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>NativeGoogleMaps</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content text-center>\n\n  <div #map id="map" style="height: 100%"></div>\n\n</ion-content>\n\n<ion-footer>\n\n  <button ion-button\n\n          no-margin large\n\n          full color="secondary"\n\n          (click)="addMarker()">\n\n    Add Marker\n\n  </button>\n\n</ion-footer>`/*ion-inline-end:"E:\pwm\akakomapps\src\pages\ionic-native\native-google-maps\native-google-maps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_native_google_maps_native_google_maps__["a" /* NativeGoogleMapsProvider */]])
    ], NativeGoogleMapsPage);
    return NativeGoogleMapsPage;
}());

//# sourceMappingURL=native-google-maps.js.map

/***/ })

});
//# sourceMappingURL=16.js.map