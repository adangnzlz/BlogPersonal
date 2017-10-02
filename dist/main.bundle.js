webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <ul>\r\n        <li [class.active]=\"isActiveHome()\"><a class=\"link\" routerLink=\"/inicio\">Inicio</a></li>\r\n        <li [class.active]=\"isActive('/about')\"><a class=\"link\" routerLink=\"/about\">Sobre mí</a></li>\r\n        <li>\r\n            <a [ngClass]=\"p3.isOpen() ? 'link arrow cube1' : 'link cube1'\" [ngbPopover]=\"popupApps\" triggers=\"manual\" #p3=\"ngbPopover\" (click)=\"p3.toggle();  p.close(); closeCookies()\" popoverTitle=\"¿Con quien he trabajado?\" placement=\"bottom\"><img class=\"cube\" src=\"assets/img/blocks.svg\"></a>\r\n        </li>\r\n        <li>\r\n            <a [ngClass]=\"pCookies.isOpen() ? 'link arrow notifications1' : 'link notifications1'\" [ngbPopover]=\"popupCookies\" triggers=\"manual\" #pCookies=\"ngbPopover\" (click)=\"p.close(); toggleCookies();  p3.close()\" placement=\"bottom\"><img class=\"notifications\" src=\"assets/img/notifications.svg\"></a>\r\n        </li>\r\n        <li>\r\n            <a [ngClass]=\"p.isOpen() ? 'link arrow avatar1' : 'link avatar1'\" [ngbPopover]=\"popupProfile\" triggers=\"manual\" #p=\"ngbPopover\" (click)=\"p.toggle();  p3.close(); closeCookies()\" placement=\"bottom\"><img src=\"https://lh3.googleusercontent.com/-o9yhc_bwtEg/AAAAAAAAAAI/AAAAAAAAAAA/AI6yGXxlhn1MmccyMEmeqzozxlbg4UuY0A/s32-c-mo-md/photo.jpg\"></a>\r\n        </li>\r\n    </ul>\r\n</header>\r\n\r\n\r\n<div class=\"contenido\" (click)=\"p.close();  p3.close(); closeCookies()\">\r\n    <router-outlet></router-outlet>\r\n    <ng-template id=\"popupProfile\" #popupProfile>\r\n        <div>\r\n            <img height=\"75\" [ngbPopover]=\"popAvatar\" triggers=\"manual\" #p2=\"ngbPopover\" (click)=\"p2.open()\" placement=\"down\" class=\"avatar-popup\" src=\"https://lh3.googleusercontent.com/-o9yhc_bwtEg/AAAAAAAAAAI/AAAAAAAAAAA/AI6yGXxlhn1MmccyMEmeqzozxlbg4UuY0A/s96-c-mo-md/photo.jpg\">\r\n            <div class=\"popup-info\">\r\n                <p>Adán González López</p>\r\n                <div><a href=\"mail:adan.gonzalez.lopez@gmail.com\">adan.gonzalez.lopez@gmail.com</a></div>\r\n                <div><a href=\"mail:adangonzalez@moaw.co\">adangonzalez@moaw.co</a></div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <input (click)=\"onContact()\" class=\"button contact\" value=\"Contactar\" type=\"submit\">\r\n        </div>\r\n    </ng-template>\r\n    <ng-template id=\"popAvatar\" #popAvatar>¿Tratas de pincharme un ojo? <br> <b>Soy digital</b>, no lo conseguirás!!\r\n    </ng-template>\r\n    <ng-template id=\"popupApps\" #popupApps>\r\n        <div class=\"row\">\r\n            <a target=\"_blank\" class=\"col-xs-4 partner\" href=\"https://playmuser.com\">\r\n                <div class=\"container-app\">\r\n                    <p class=\"text-center\">Playmuser.com</p>\r\n                    <img src=\"assets/img/muser.svg\"><br>\r\n                </div>\r\n            </a>\r\n            <a target=\"_blank\" class=\"col-xs-4 partner\" href=\"https://moaw.co\">\r\n                <div class=\"container-app\">\r\n                    <p class=\"text-center\">Moaw</p>\r\n                    <img src=\"assets/img/moaw.png\"><br>\r\n                </div>\r\n            </a>\r\n            <a target=\"_blank\" class=\"col-xs-4 partner\" href=\"https://www.inditex.com/es/home\">\r\n                <div class=\"container-app\">\r\n                    <p class=\"text-center\">Inditex</p>\r\n                    <img _ngcontent-c0=\"\" src=\"assets/img/inditex.jpg\" style=\"padding-top: 10px;\">\r\n                </div>\r\n            </a>\r\n            <a target=\"_blank\" class=\"col-xs-4 partner\" href=\"https://mueblescaloto.com/\">\r\n                <div class=\"container-app\">\r\n                    <p class=\"text-center\">MueblesCaloto</p>\r\n                    <img src=\"assets/img/muebles_caloto_logo_negro_corto.svg\"><br>\r\n                </div>\r\n            </a>\r\n            <a target=\"_blank\" class=\"col-xs-4 partner\" href=\"https://www.imatia.com/es/\">\r\n                <div class=\"container-app\">\r\n                    <p class=\"text-center\">Imatia</p>\r\n                    <img src=\"assets/img/imatia.png\"><br>\r\n                </div>\r\n            </a>\r\n            <a target=\"_blank\" class=\"col-xs-4 partner\" href=\"http://www.sadagrupo.com/\">\r\n                <div class=\"container-app\">\r\n                    <p class=\"text-center\">Grupo Sada</p>\r\n                    <img src=\"assets/img/sada.jpg\"><br>\r\n                </div>\r\n            </a>\r\n            <a target=\"_blank\" class=\"col-xs-4 partner\" href=\"http://www.cysnetsoftware.com/\">\r\n                <div class=\"container-app\">\r\n                    <p class=\"text-center\">Cysnet<br>Software</p>\r\n                    <img src=\"assets/img/cysnet.png\"><br>\r\n                </div>\r\n            </a>\r\n            <a target=\"_blank\" class=\"col-xs-4 partner\" href=\"https://www.mueva.eu/\">\r\n                <div class=\"container-app\">\r\n                    <p class=\"text-center\">Muevael volante</p>\r\n                    <img src=\"assets/img/mueva.jpg\"><br>\r\n                </div>\r\n            </a>\r\n            <a target=\"_blank\" class=\"col-xs-4 partner\" href=\"http://www.easis.es/\">\r\n                <div class=\"container-app\">\r\n                    <p class=\"text-center\">Easis</p>\r\n                    <img src=\"assets/img/easis.jpg\"><br>\r\n                </div>\r\n            </a>\r\n            <a target=\"_blank\" class=\"col-xs-4 partner\" href=\"http://wekco.net/\">\r\n                <div class=\"container-app\">\r\n                    <p class=\"text-center\">Wekco</p>\r\n                    <img src=\"assets/img/wekco.jpg\"><br>\r\n                </div>\r\n            </a>\r\n            <a target=\"_blank\" class=\"col-xs-4 partner\" href=\"http://www.konditecmobility.com/\">\r\n                <div class=\"container-app\">\r\n                    <p class=\"text-center\">Konditec</p>\r\n                    <img src=\"assets/img/konditec.jpg\"><br>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </ng-template>\r\n    <ng-template id=\"popupCookies\" #popupCookies>\r\n        <div [hidden]=\"acceptCookies\" class=\"row\">\r\n            <p class=\" col-sm-12\">\r\n                En este caso las <a><b>Cookies</b></a> no son galletas pero tienes que aceptarlas!! <a href=\"http://www.agpd.es/portalwebAGPD/canaldocumentacion/publicaciones/common/Guias/Guia_Cookies.pdf\" target=\"_blank\" class=\"cookies\">Ver aviso</a>\r\n            </p>\r\n            <div class=\"col-sm-12\">\r\n                <input (click)=\"onAcceptCookies()\" class=\"button contact\" value=\"Acepto\" type=\"submit\">\r\n            </div>\r\n        </div>\r\n        <div [hidden]=\"!acceptCookies\" class=\"row\">\r\n            <p class=\" col-sm-12\">\r\n                Ya has aceptado las cookies, muchas gracias!\r\n            </p>\r\n            <div class=\"col-sm-12\">\r\n                <input (click)=\"pCookies.close()\" class=\"button contact\" value=\"Entendido\" type=\"submit\">\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n\r\n\r\n\r\n\r\n\r\n    <footer>\r\n        <a title=\"linkedin\" href=\"https://www.linkedin.com/in/adangnzlz/\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>\r\n        <a title=\"Infojobs\" href=\"https://freelance.infojobs.net/freelance/Adan-Gonzalez-Lopez/xj0hjzc39v1equl4vb1/1\" target=\"_blank\"><i class=\"fa fa-infojobs\"></i></a>\r\n        <p class=\"designed\">Designed &amp; Developed by Adán González López</p>\r\n    </footer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n  position: absolute;\n  bottom: 0px;\n  background: #f2f2f2;\n  height: 60px;\n  width: 100%;\n  text-align: center; }\n  footer a {\n    cursor: pointer;\n    margin: 0px 25px;\n    padding: 0px 10px; }\n\nheader {\n  float: right;\n  width: 100%;\n  text-align: right;\n  background: white;\n  position: fixed;\n  top: 0px;\n  z-index: 999; }\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  padding: 13px 29px; }\n\nli {\n  display: inline-block;\n  padding-left: 15px;\n  line-height: 24px; }\n  li.active a {\n    text-decoration: underline; }\n  li.link {\n    font-size: 13px;\n    color: black;\n    opacity: .75; }\n    li.link:hover {\n      color: black;\n      text-decoration: underline;\n      cursor: pointer; }\n  li a:after {\n    content: \"\" !important;\n    position: absolute;\n    top: 52px;\n    z-index: 99999;\n    height: 10px;\n    width: 36px;\n    width: 0;\n    height: 0;\n    border-left: 9px solid transparent;\n    border-right: 9px solid transparent;\n    border-bottom: 9px solid white;\n    font-size: 0;\n    line-height: 0;\n    display: none; }\n  li a:before {\n    content: \"\" !important;\n    position: absolute;\n    top: 51px;\n    height: 10px;\n    width: 36px;\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 10px solid rgba(47, 47, 47, 0.41);\n    font-size: 0;\n    line-height: 0;\n    display: none; }\n  li a.cube1:after {\n    right: 119px; }\n  li a.cube1:before {\n    right: 118px; }\n  li a.notifications1:after {\n    right: 81px; }\n  li a.notifications1:before {\n    right: 80px; }\n  li a.avatar1:after {\n    right: 36px;\n    z-index: 999999; }\n  li a.avatar1:before {\n    right: 35px; }\n  li a.arrow:after {\n    display: inline-block; }\n  li a.arrow::before {\n    display: inline-block; }\n  li img {\n    border-radius: 100%; }\n    li img:hover {\n      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15); }\n    li img.notifications {\n      background: black;\n      opacity: 0.75;\n      height: 20px;\n      padding: 4px; }\n      li img.notifications:hover {\n        opacity: 1; }\n    li img.cube {\n      border-radius: 0px;\n      height: 17px;\n      opacity: 0.75; }\n      li img.cube:hover {\n        opacity: 1; }\n\n.avatar {\n  background-size: 32px 32px;\n  border-radius: 50%;\n  display: block;\n  margin: -1px;\n  overflow: hidden;\n  position: relative;\n  height: 32px;\n  width: 32px;\n  z-index: 0;\n  background-image: url(https://lh3.googleusercontent.com/-o9yhc_bwtEg/AAAAAAAAAAI/AAAAAAAAAAA/AI6yGXxlhn1MmccyMEmeqzozxlbg4UuY0A/s32-c-mo-md/photo.jpg); }\n\n.avatar-popup {\n  cursor: pointer;\n  display: inline-block; }\n\n.popup-info {\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 200px; }\n\n.logo {\n  height: 92px;\n  width: auto; }\n\n.container-app {\n  text-align: center;\n  height: 90px;\n  padding-top: 10px; }\n  .container-app img {\n    max-width: 50px;\n    height: auto;\n    border-radius: 0%; }\n    .container-app img:hover {\n      box-shadow: none; }\n  .container-app:hover {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6); }\n  .container-app p {\n    font-size: 12px;\n    margin-bottom: 0px; }\n\n.cookies {\n  text-decoration: underline !important; }\n\n.partner {\n  padding: 5px;\n  width: 33%; }\n  .partner:hover {\n    text-decoration: none !important; }\n\n.designed {\n  margin-top: -10px;\n  font-size: 10px;\n  color: #6b6b6b; }\n\n.contenido {\n  min-height: 100%;\n  position: relative; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, location) {
        this.router = router;
        this.location = location;
        this.title = 'app';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (localStorage.acceptCookies !== 'true') {
                _this.popupCookies.open();
            }
            else {
                _this.acceptCookies = true;
            }
        }, 1000);
    };
    AppComponent.prototype.onContact = function () {
        window.location.href = 'mailto:adan.gonzalez.lopez@gmail.com?subject=Contacto desde Portfolio';
    };
    AppComponent.prototype.checkIfClose = function () {
        if (this.popup.isOpen()) {
            this.popup.close();
        }
    };
    AppComponent.prototype.onAcceptCookies = function () {
        this.acceptCookies = true;
        localStorage.removeItem('acceptCookies');
        localStorage.setItem('acceptCookies', 'true');
        this.popupCookies.close();
    };
    AppComponent.prototype.toggleCookies = function () {
        if (this.acceptCookies) {
            this.popupCookies.toggle();
        }
        else {
            this.popupCookies.open();
        }
    };
    AppComponent.prototype.closeCookies = function () {
        if (this.acceptCookies) {
            this.popupCookies.close();
        }
    };
    AppComponent.prototype.isActive = function (path) {
        return this.location.path() === path;
    };
    AppComponent.prototype.isActiveHome = function (path) {
        return this.location.path() !== '/about';
    };
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewChild */])('p'),
    __metadata("design:type", Object)
], AppComponent.prototype, "popup", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewChild */])('pCookies'),
    __metadata("design:type", Object)
], AppComponent.prototype, "popupCookies", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_lucky_lucky_component__ = __webpack_require__("../../../../../src/app/components/lucky/lucky.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_lucky_lucky_component__["a" /* LuckyComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_1__app_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });


var routes = [
    { 'path': '', component: __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__["a" /* HomeComponent */] },
    { 'path': 'inicio', component: __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__["a" /* HomeComponent */] },
    { 'path': 'about', component: __WEBPACK_IMPORTED_MODULE_1__components_about_about_component__["a" /* AboutComponent */] }
    // { 'path': 'lucky', component: LuckyComponent }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<header class=\"intro-header\">\n    <!-- <div class=\"overlay\"></div> -->\n    <div class=\"container header\">\n        <div class=\"intro-message\">\n            <h1 [@layertitle]=\"goneTitle\">Adán González</h1>\n            <div id=\"typing\" class=\"subtitle h3\"></div>\n            <hr [@layersubtitle]=\"goneTitle\" class=\"intro-divider\">\n            <p [@layerparagraph]=\"goneTitle\">Nací en el año 1991 en Lugo, allí estuve hasta los 18 años cuando me marché a estudiar Ingeniería informática a A Coruña. fotraun apasionado de las últimas tecnologías y de buscar las soluciones más eficientes a los retos que se me plantean\n                en el día a día.</p>\n            <p [@layerparagraph2]=\"goneTitle\">Actualmente dirijo el área de desarrollo software en <a href=\"https://moaw.co\" target=\"_blank\" class=\"moaw white\">Moaw Solutions</a>, agencia creativa donde tratamos de resolver los problemas de nuestros clientes con las soluciones más innovadoras.</p>\n        </div>\n    </div>\n    <div (click)=\"goDown()\" class=\"arrow animated bounce\">\n        <img width=\"40\" height=\"40\" alt=\"\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yOTMuNzUxLDQ1NS44NjhjLTIwLjE4MSwyMC4xNzktNTMuMTY1LDE5LjkxMy03My42NzMtMC41OTVsMCwwYy0yMC41MDgtMjAuNTA4LTIwLjc3My01My40OTMtMC41OTQtNzMuNjcyDQoJbDE4OS45OTktMTkwYzIwLjE3OC0yMC4xNzgsNTMuMTY0LTE5LjkxMyw3My42NzIsMC41OTVsMCwwYzIwLjUwOCwyMC41MDksMjAuNzcyLDUzLjQ5MiwwLjU5NSw3My42NzFMMjkzLjc1MSw0NTUuODY4eiIvPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTIyMC4yNDksNDU1Ljg2OGMyMC4xOCwyMC4xNzksNTMuMTY0LDE5LjkxMyw3My42NzItMC41OTVsMCwwYzIwLjUwOS0yMC41MDgsMjAuNzc0LTUzLjQ5MywwLjU5Ni03My42NzINCglsLTE5MC0xOTBjLTIwLjE3OC0yMC4xNzgtNTMuMTY0LTE5LjkxMy03My42NzEsMC41OTVsMCwwYy0yMC41MDgsMjAuNTA5LTIwLjc3Miw1My40OTItMC41OTUsNzMuNjcxTDIyMC4yNDksNDU1Ljg2OHoiLz4NCjwvc3ZnPg0K\"\n        />\n    </div>\n</header>\n<section class=\"content-section-a\">\n\n    <div class=\"container\">\n        <div class=\"row col-sm-12\">\n            <div class=\"col-lg-5 ml-auto text-block\">\n                <hr class=\"section-heading-spacer\">\n                <div class=\"clearfix\"></div>\n                <h2 class=\"section-heading\">Desarrollo Web y Móvil:<br>Mis puntos fuertes</h2>\n                <p class=\"lead\">Me apasiona la arquitectura Fron-End, mis juguetes preferidos para llevarla a cabo son <a target=\"_blank\" class=\"moaw\" href=\"https://angular.io/\">Angular</a> en cualquiera de sus versiones, <a target=\"_blank\" class=\"moaw\" href=\"https://ionicframework.com/\">Ionic</a>                    para móvil, y HTML5 y CSS3 para pintarlo todo!\n                </p>\n                <p>Nunca dejo de aprender de este mundillo y cada vez me gusta más!</p>\n            </div>\n            <div class=\"col-lg-5 mr-auto\">\n                <img class=\"img-fluid\" src=\"./assets/img/web_app.png\" alt=\"\">\n            </div>\n\n        </div>\n    </div>\n    <!-- /.container -->\n\n</section>\n\n\n<section class=\"content-section-b\">\n\n    <div class=\"container\">\n\n        <div class=\"row col-sm-12\">\n            <div class=\"col-lg-5 mr-auto  text-block order-lg-2\">\n                <hr class=\"section-heading-spacer\">\n                <div class=\"clearfix\"></div>\n                <h2 class=\"section-heading\">Analisis, planificación y aprendizaje</h2>\n                <p class=\"lead\">He trabajado con metodologías ágiles y tengo experiencia encabezando el departamento de desarrollo de una start-up, <a class=\"moaw\" href=\"https://playmuser.com\" target=\"_blank\">Playmuser</a>.</p>\n                <p>Soy <a class=\"moaw\">autodidacta</a>, pero me encanta rodearme de los mejores y aprender de ellos, no solamente de mi campo si no todo lo relacionado con la transformación digital.</p>\n            </div>\n            <div class=\"col-lg-5 ml-auto order-lg-1\">\n                <img class=\"img-fluid\" src=\"./assets/img/analisis.png\" alt=\"\">\n            </div>\n        </div>\n\n    </div>\n    <!-- /.container -->\n\n</section>\n<!-- /.content-section-b -->\n\n\n<section class=\"content-section-a\">\n\n    <div class=\"container\">\n\n        <div class=\"row col-sm-12\">\n            <div class=\"col-lg-5 ml-auto text-block\">\n                <hr class=\"section-heading-spacer\">\n                <div class=\"clearfix\"></div>\n                <h2 class=\"section-heading\">Otras tecnologías y maneras de trabajar</h2>\n                <p class=\"lead\">Dentro de mis tecnologías/frameworks/lenguajes favoritos se encuentran <a href=\"https://firebase.google.com/\" target=\"_blank\" class=\"moaw\">Firebase</a>, sin duda un monstruo de la agilidad, <a href=\"https://www.mongodb.com/es\" target=\"_blank\"\n                        class=\"moaw\">MongoDB</a> o <a class=\"moaw\" target=\"_blank\" href=\"https://www.android.com/\">Android</a>.</p>\n                <p>Me encantan las soluciones que ofrece <a href=\"https://es.atlassian.com/\" target=\"_blank\" class=\"moaw\">Atlassian</a>, Jira, Bitbucket, SourceTree, Bamboo, Trello..</p>\n                <p>No <a href=\"https://git-scm.com/\" target=\"_blank\" class=\"moaw\">Git</a>, No work.</p>\n            </div>\n            <div class=\"col-lg-5 mr-auto order-lg-1\">\n                <img class=\"img-fluid\" src=\"./assets/img//laptop.png\" alt=\"\">\n            </div>\n        </div>\n\n    </div>\n    <!-- /.container -->\n\n</section>\n\n<section class=\"content-section-b\">\n    <div class=\"container\">\n        <div class=\"row col-sm-12\">\n            <div class=\"col-lg-5 mr-auto  text-block order-lg-2\">\n                <hr class=\"section-heading-spacer\">\n                <div class=\"clearfix\"></div>\n                <h2 class=\"section-heading\">SEO & Web Analytics</h2>\n                <p class=\"lead\">Me gusta el posicionamiento, al menos la parte tocante al desarrollo web. Siempre trato de optimizar mis sitios pensando en los motores de búsqueda: rendimiento, estructura html, microdata, semantics, links, optimización de assets... </p>\n                <p class=\"lead\">También configuro <a class=\"moaw\">Analytics</a> en mis sitios web, al fin y al cabo, algo no se puede mejorar si no se puede medir.</p>\n            </div>\n            <div class=\"col-lg-5 ml-auto\">\n                <img class=\"img-fluid\" src=\"./assets/img/seo.png\" alt=\"\">\n            </div>\n\n        </div>\n    </div>\n    <!-- /.container -->\n\n</section>\n\n<section class=\"content-section-a\">\n    <div class=\"container \">\n        <div class=\"row\">\n            <div class=\"col-lg-8 mx-auto text-center\">\n                <h2 id=\"notodo\"></h2>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div (click)=\"showTravels()\" class=\"arrow animated bounce extra\">\n                <img width=\"80\" height=\"80\" alt=\"\" src=\"assets/img/arrow-black.svg\" />\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<section [@layertravels]=\"showingtravels\" [hidden]=\"!showtravels\" class=\"content-section-b\" id=\"about\">\n    <div class=\"container \">\n        <div class=\"row\">\n            <div class=\"col-lg-8 mx-auto text-center\">\n                <h2 class=\"section-heading \">Mi gran pasión! Viajar!</h2>\n                <p>No todo en esta vida es trabajo.<br> Salir de la rutina, conocer nuevas culturas, abrir la mente, disfrutar, sentir, vivir!<br> Todo esto te lo da el coger la mochila y viajar por cualquier sitio, sin excusas.</p>\n                <hr class=\"light white\">\n                <p>\"No hay hombre más completo que aquel que ha viajado mucho, que ha cambiado veinte veces de forma de pensar y de vivir.\"</p>\n                <p class=\"author\">Alphonse de Lamartine</p>\n                <hr class=\"light white\">\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<section [@layertravels2]=\"showingtravels\" [hidden]=\"!showtravels\" class=\"p-0\" id=\"portfolio\">\n    <div class=\"container-fluid\">\n        <div class=\"row no-gutter popup-gallery\">\n            <div class=\"col-lg-4 col-sm-6\">\n                <a class=\"portfolio-box\">\n                    <img class=\"img-fluid\" src=\"./assets/img/thailandia.jpg\" alt=\"\">\n                    <div class=\"portfolio-box-caption\">\n                        <div class=\"portfolio-box-caption-content\">\n                            <div class=\"project-category text-faded\">\n                                Thailandia\n                            </div>\n                            <div class=\"project-name\">\n                                Phi Phi islands\n                            </div>\n                        </div>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-lg-4 col-sm-6\">\n                <a class=\"portfolio-box\">\n                    <img class=\"img-fluid\" src=\"./assets/img/amsterdam.jpg\" alt=\"\">\n                    <div class=\"portfolio-box-caption\">\n                        <div class=\"portfolio-box-caption-content\">\n                            <div class=\"project-category text-faded\">\n                                Países Bajos\n                            </div>\n                            <div class=\"project-name\">\n                                Amsterdam\n                            </div>\n                        </div>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-lg-4 col-sm-6\">\n                <a class=\"portfolio-box\">\n                    <img class=\"img-fluid\" src=\"./assets/img/rabat.jpg\" alt=\"\">\n                    <div class=\"portfolio-box-caption\">\n                        <div class=\"portfolio-box-caption-content\">\n                            <div class=\"project-category text-faded\">\n                                Marruecos\n                            </div>\n                            <div class=\"project-name\">\n                                Rabat\n                            </div>\n                        </div>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-lg-4 col-sm-6\">\n                <a class=\"portfolio-box\">\n                    <img class=\"img-fluid\" src=\"./assets/img/paris.jpg\" alt=\"\">\n                    <div class=\"portfolio-box-caption\">\n                        <div class=\"portfolio-box-caption-content\">\n                            <div class=\"project-category text-faded\">\n                                Francia\n                            </div>\n                            <div class=\"project-name\">\n                                Paris\n                            </div>\n                        </div>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-lg-4 col-sm-6\">\n                <a class=\"portfolio-box\">\n                    <img class=\"img-fluid\" src=\"./assets/img/mexico.jpg\" alt=\"\">\n                    <div class=\"portfolio-box-caption\">\n                        <div class=\"portfolio-box-caption-content\">\n                            <div class=\"project-category text-faded\">\n                                México\n                            </div>\n                            <div class=\"project-name\">\n                                Chichen Itza\n                            </div>\n                        </div>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-lg-4 col-sm-6\">\n                <a class=\"portfolio-box\">\n                    <img class=\"img-fluid\" src=\"./assets/img/brujas.jpg\" alt=\"\">\n                    <div class=\"portfolio-box-caption\">\n                        <div class=\"portfolio-box-caption-content\">\n                            <div class=\"project-category text-faded\">\n                                Bélgica\n                            </div>\n                            <div class=\"project-name\">\n                                Brujas\n                            </div>\n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n<section [@layertravels3]=\"showingtravels\" [hidden]=\"!showtravels\" class=\"content-section-b pb-150\" id=\"about\">\n    <div class=\"container \">\n        <div class=\"row\">\n            <div class=\"col-lg-8 mx-auto text-center\">\n                <h2 class=\"section-heading \">Algunos de mis viajes.</h2>\n                <p>Estos son algunos de los viajes que más he disfrutado de una pequeña lista que no parará de crecer...</p>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body,\nhtml {\n  width: 100%;\n  height: 100%; }\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 700; }\n\n.intro-header {\n  padding-top: 50px;\n  padding-bottom: 50px;\n  text-align: center;\n  color: #f8f8f8;\n  background: url(" + __webpack_require__("../../../../../src/assets/img/background-ski2.jpg") + ") no-repeat center center;\n  background-size: cover;\n  z-index: -1;\n  margin-top: 58px; }\n\n.intro-message {\n  position: relative;\n  padding-top: 20%;\n  padding-bottom: 20%; }\n\n.intro-message > h1 {\n  margin: 0;\n  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);\n  font-size: 5em; }\n\n.intro-divider {\n  width: 400px;\n  border-top: 1px solid #f8f8f8;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2); }\n\n.intro-message > h3 {\n  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);\n  display: inline-block; }\n\n.intro-social-buttons i {\n  font-size: 80%; }\n\n@media (max-width: 767px) {\n  .intro-message {\n    padding-bottom: 15%; }\n  .intro-message > h1 {\n    font-size: 3em; }\n  ul.intro-social-buttons > li {\n    display: block;\n    margin-bottom: 20px;\n    padding: 0; }\n  ul.intro-social-buttons > li:last-child {\n    margin-bottom: 0; }\n  .intro-divider {\n    width: 100%; } }\n\n.network-name {\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 2px; }\n\n.content-section-a {\n  padding: 100px 0;\n  border-top: 1px solid #e7e7e7;\n  border-bottom: 1px solid #e7e7e7; }\n\n.content-section-b {\n  padding: 100px 0;\n  background-color: #232323;\n  color: white !important; }\n\n.section-heading {\n  margin-bottom: 30px; }\n\n.section-heading-spacer {\n  float: left;\n  width: 200px;\n  border-top: 3px solid #e7e7e7; }\n\n.banner {\n  padding: 100px 0;\n  color: #f8f8f8;\n  background: url(" + __webpack_require__("../../../../../src/assets/img/banner-bg.jpg") + ") no-repeat center center;\n  background-size: cover; }\n\n.banner h2 {\n  margin: 0;\n  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);\n  font-size: 3em; }\n\n.banner ul {\n  margin-bottom: 0; }\n\n.banner-social-buttons {\n  float: right;\n  margin-top: 0; }\n\n@media (max-width: 1199px) {\n  ul.banner-social-buttons {\n    float: left;\n    margin-top: 15px; } }\n\n@media (max-width: 767px) {\n  .banner h2 {\n    margin: 0;\n    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);\n    font-size: 3em; }\n  ul.banner-social-buttons > li {\n    display: block;\n    margin-bottom: 20px;\n    padding: 0; }\n  ul.banner-social-buttons > li:last-child {\n    margin-bottom: 0; } }\n\nfooter {\n  padding: 50px 0;\n  background-color: #f8f8f8; }\n\np.copyright {\n  margin: 15px 0 0; }\n\nh2 {\n  font-size: 35px; }\n\np {\n  font-size: 15px !important; }\n  @media (min-width: 767px) {\n    p {\n      font-size: 18px !important; } }\n\na {\n  font-size: 18px !important; }\n\n.overlay {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.72);\n  margin-top: -50px; }\n\n.subtitle {\n  min-height: 20px;\n  margin-top: 0px;\n  margin-bottom: 0px; }\n  @media (min-width: 767px) {\n    .subtitle {\n      margin-left: 150px; } }\n\n.container.header {\n  margin-top: -50px; }\n\nbody {\n  background: black; }\n\n.arrow {\n  top: 70%;\n  left: 50%;\n  margin-left: -20px;\n  cursor: pointer;\n  z-index: 9999;\n  height: 100px; }\n  @media (max-width: 1024px) {\n    .arrow {\n      display: none; } }\n  .arrow.extra {\n    position: relative;\n    margin-top: 100px;\n    margin-left: -40px;\n    display: block;\n    transition: all 0.6s; }\n    @media (min-width: 767px) {\n      .arrow.extra {\n        opacity: 0; }\n        .arrow.extra.showing {\n          opacity: 1; } }\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce; }\n\n.animated {\n  -webkit-animation-fill-mode: both;\n  -moz-animation-fill-mode: both;\n  -ms-animation-fill-mode: both;\n  -o-animation-fill-mode: both;\n  animation-iteration-count: infinite;\n  -moz-animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n  animation-fill-mode: both;\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s; }\n\n@-webkit-keyframes bounce {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    -webkit-transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-30px); }\n  60% {\n    -webkit-transform: translateY(-15px); } }\n\n@keyframes bounce {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px); }\n  60% {\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px); } }\n\n.no-gutter > [class*='col-'] {\n  padding-right: 0;\n  padding-left: 0; }\n\n.portfolio-box {\n  position: relative;\n  display: block;\n  max-width: 650px;\n  margin: 0 auto; }\n\n.portfolio-box .portfolio-box-caption {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  opacity: 0;\n  color: white;\n  background: rgba(6, 206, 177, 0.49);\n  transition: all 0.2s; }\n\n.portfolio-box .portfolio-box-caption .portfolio-box-caption-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center; }\n\n.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category,\n.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name {\n  padding: 0 15px;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif; }\n\n.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category {\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase; }\n\n.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name {\n  font-size: 18px; }\n\n.portfolio-box:hover .portfolio-box-caption {\n  opacity: 1; }\n\n.portfolio-box:focus {\n  outline: none; }\n\n@media (min-width: 768px) {\n  .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category {\n    font-size: 16px; }\n  .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name {\n    font-size: 22px; } }\n\n.text-faded {\n  color: rgba(255, 255, 255, 0.7); }\n\n#portfolio {\n  margin: 0px;\n  padding-bottom: 0px !important;\n  background: #232323; }\n\n.moaw.white:hover {\n  color: white !important; }\n\nhr.white {\n  background: white; }\n\np.author {\n  font-size: 12px !important; }\n\n@media (max-width: 992px) {\n  p {\n    text-align: left; } }\n\n.pb-150 {\n  padding-bottom: 150px; }\n\n@media (max-width: 1024px) {\n  .text-block {\n    margin-bottom: 50px; } }\n\n.about {\n  opacity: 0;\n  transition: all 1s; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent() {
        this.goneTitle = 'on';
        this.showingtravels = 'on';
        this.active = false;
        this.showtravels = false;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.goDown = function () {
        $('body,html').animate({ scrollTop: $('.content-section-a').offset().top - 100 }, 1000);
    };
    AboutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        window.onbeforeunload = function (event) {
            window.scrollTo(0, 0);
        };
        setTimeout(function () {
            _this.goneTitle = 'off';
            setTimeout(function () {
                _this.startTyping();
            }, 600);
        }, 500);
        $(window).on('resize scroll', function () {
            if (_this.isInViewport() && !_this.active) {
                _this.active = true;
                _this.startTyping2();
            }
        });
    };
    AboutComponent.prototype.showTravels = function () {
        var _this = this;
        this.showtravels = true;
        setTimeout(function () {
            $('body,html').animate({ scrollTop: $('#about').offset().top }, 1500);
            _this.showingtravels = 'off';
        }, 10);
    };
    AboutComponent.prototype.startTyping = function () {
        // tslint:disable-next-line:no-unused-expression
        new Typed('#typing', {
            strings: ['#Front-End Architect', '#Web', '#App', '#FullStack Developer'],
            typeSpeed: 70,
            backSpeed: 40,
            loop: false,
            showCursor: false,
            backDelay: 1500,
        });
    };
    AboutComponent.prototype.startTyping2 = function () {
        // tslint:disable-next-line:no-unused-expression
        new Typed('#notodo', {
            strings: ['No todo en esta vida es trabajar...'],
            typeSpeed: 40,
            backSpeed: 40,
            loop: false,
            showCursor: true,
            backDelay: 1500,
        });
        setTimeout(function () {
            $('.extra').addClass('showing');
        }, 2500);
    };
    AboutComponent.prototype.isInViewport = function () {
        var result = false;
        if ($('#notodo') && $('#notodo').offset()) {
            var elementTop = $('#notodo').offset().top;
            var elementBottom = elementTop + $('#notodo').outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            result = elementBottom > viewportTop && elementTop < viewportBottom;
        }
        return result;
    };
    ;
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/about/about.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('layertitle', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('on', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
                    transform: 'translateX(-120%)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
                    transform: 'translateX(0%)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('on => off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('.6s 0.6s ease-in-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('layersubtitle', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('on', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
                    transform: 'translateX(400%)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
                    transform: 'translateX(0%)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('on => off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('.6s 0.6s ease-in-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('layerparagraph', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('on', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
                    opacity: 0
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
                    opacity: 1
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('on => off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('.6s 1.2s ease-in-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('layertravels', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('on', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
                    opacity: 0,
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
                    opacity: 1,
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('on => off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('0s 1s ease-in-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('layertravels2', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('on', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
                    opacity: 0,
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
                    opacity: 1,
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('on => off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('0s 1.3s ease-in-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('layertravels3', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('on', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
                    opacity: 0,
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
                    opacity: 1,
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('on => off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('0.6s 1s ease-in-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('layerparagraph2', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('on', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
                    opacity: 0
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
                    opacity: 1
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('on => off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('1.2s 1.2s ease-in-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-main\">\n    <div class=\"relative\">\n        <h1 title=\"Adán González López\">\n            <mark class=\"blue\">A</mark>\n            <mark class=\"red\">d</mark>\n            <mark class=\"yellow\">a</mark>\n            <mark class=\"blue bottom\">a</mark>\n            <mark class=\"green left\">á</mark>\n            <mark class=\"red\">n</mark>\n        </h1>\n        <h3 class=\"subtitle first-letter\">G</h3>\n        <h3 class=\"subtitle\">licia</h3>\n    </div>\n</div>\n<div class=\"container-input\">\n    <input (keyup.enter)=\"showLucky()\">\n</div>\n<div class=\"container-buttons\">\n    <input class=\"button\" (click)=\"showLucky()\" value=\"Buscar con Google\" type=\"submit\">\n    <input class=\"button\" (click)=\"showLucky()\" [value]=\"textButton\" type=\"submit\">\n</div>\n<!-- <div class=\"container-input\">\n    <div id=\"paypal-button\"></div>\n</div> -->\n\n\n<app-lucky *ngIf=\"show\" [show]=\"show\"></app-lucky>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-main {\n  text-align: center;\n  padding-top: 175px; }\n  .container-main h1 {\n    font-size: 90px;\n    letter-spacing: -14px; }\n  .container-main h3 {\n    font-size: 16px;\n    position: absolute;\n    top: 85px;\n    left: calc(50% + 59px);\n    color: #4285f4;\n    margin: 0px;\n    font-weight: 100; }\n    .container-main h3.first-letter {\n      left: calc(50% + 2px); }\n\n.container-input {\n  margin: 25px;\n  text-align: center; }\n\n.container-buttons {\n  text-align: center; }\n\n.paypal-button {\n  background: red;\n  width: 300px;\n  height: 40px;\n  -webkit-transform: skewX(-45deg);\n          transform: skewX(-45deg); }\n  .paypal-button:hover {\n    border: 1px solid white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.show = false;
        this.textButton = 'Voy a tener suerte';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.showLucky = function () {
        this.show = true;
        setTimeout(function () {
            $('body,html').animate({ scrollTop: $('app-lucky').offset().top }, 1000);
        }, 10);
    };
    // isFormValid(actions) {
    //   var result = true;
    //   return result ? actions.enable() : actions.disable();;
    // }
    HomeComponent.prototype.ngAfterViewInit = function () {
        //   const payment_data = {
        //     total: '10.01',
        //     currency: 'EUR',
        //     cardata: {
        //       brand: 'lambo'
        //     }
        //   };
        //   paypal.Button.render({
        //     env: 'sandbox', // sandbox | production
        //     commit: true,
        //     client: {
        //       sandbox: 'ATGPkAZHrGYUZ6CPei-44TyHZum8tDHbP5yKUPSZ0N36otzX_uKnq3KA4_1iHTrmyHQSkVHVWf19ni_e'
        //     },
        //     style: {
        //       label: 'generic',
        //       size: 'medium',    // small | medium | large | responsive
        //       shape: 'rect',     // pill | rect
        //       color: 'silver',     // gold | blue | silver | black
        //       tagline: false
        //     },
        //     payment: (data, actions) => {
        //       return actions.payment.create({
        //         payment: {
        //             transactions: [
        //                 {
        //                     amount: { total: '10.00', currency: 'EUR' }
        //                 }
        //             ]
        //         }
        //     });
        //     },
        //     validate: (actions) => {
        //       this.isFormValid(actions);
        //     },
        //     // Wait for the payment to be authorized by the customer
        //     onAuthorize: function (data, actions) {
        //       // tslint:disable-next-line:no-shadowed-variable
        //       return actions.payment.get().then(function (paymentDetails) {
        //         // Show a confirmation using the details from paymentDetails
        //         // Then listen for a click on your confirm button
        //         return actions.payment.execute().then(function () {
        //           // Show a success page to the buyer
        //           console.log(data, 'onauthorize');
        //           console.log(payment_data);
        //         });
        //       });
        //     }
        //   }, '#paypal-button');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/lucky/lucky.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"class\">\n    <div clas=\"row\">\n        <img class=\"profile\" height=\"200\" src=\"./assets/img/profile.png\">\n    </div>\n    <div class=\"custom-container\">\n        <h3>Hola! Encantado de tenerte por aquí!</h3>\n        <p>Seguramente esto no es lo que esperabas, pero no soy un buscador, he creado este sitio web para que puedas conocerme mejor.</p>\n        <p>Soy un apasionado de las últimas tecnologías y de buscar las soluciones más eficientes a los retos que se me plantean en el día a día.<b> Actualmente dirijo el área de desarrollo software en <a class=\"moaw\" target=\"_blank\" href=\"https://moaw.co\">Moaw Solutions</a></b>,\n            agencia creativa donde tratamos de resolver los problemas de nuestros clientes con las soluciones más innovadoras. Una solución buena no tiene porque ser una solución complicada y así lo transmitimos.</p>\n        <p>Desde que finalicé mis estudios de ingeniería informática lo que más me ha motivado día a día ha sido mejorar, no parar de crecer y aprender tanto en lo personal como en lo laboral. Creo que voy en la dirección correcta.<br> <a routerLink=\"/about\"\n                href=\"https://moaw.co\" class=\"about-link\">¿Quieres saber mas? haz click aquí.</a></p>\n        <div>\n            <a href=\"mail:adan.gonzalez.lopez@gmail.com\">adangonzalez@moaw.co</a>\n        </div>\n        <div>\n            <a href=\"mail:adan.gonzalez.lopez@gmail.com\">adan.gonzalez.lopez@gmail.com</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/lucky/lucky.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  text-align: center;\n  margin-top: 50px;\n  opacity: 0;\n  transition: all 1.25s;\n  transition-delay: 0.25s; }\n  .container.show {\n    opacity: 1; }\n  .container img.profile {\n    image-rendering: -webkit-optimize-contrast; }\n\n.custom-container {\n  padding: 25px 0px 150px 0px;\n  text-align: center; }\n  @media (min-width: 767px) {\n    .custom-container {\n      padding: 25px 100px 150px 100px; } }\n  .custom-container p {\n    font-size: 15px !important; }\n\nb {\n  font-weight: bold; }\n\n.about-link {\n  font-weight: bold;\n  color: black !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/lucky/lucky.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LuckyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LuckyComponent = (function () {
    function LuckyComponent() {
        this.class = 'container';
        this.show = false;
    }
    Object.defineProperty(LuckyComponent.prototype, "data", {
        set: function (value) {
            var _this = this;
            this.show = value;
            setTimeout(function () {
                if (value) {
                    _this.class = 'container show';
                }
                else {
                    _this.class = 'container';
                }
            }, 10);
        },
        enumerable: true,
        configurable: true
    });
    ;
    LuckyComponent.prototype.ngOnInit = function () {
    };
    return LuckyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('show'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LuckyComponent.prototype, "data", null);
LuckyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-lucky',
        template: __webpack_require__("../../../../../src/app/components/lucky/lucky.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/lucky/lucky.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LuckyComponent);

//# sourceMappingURL=lucky.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/background-ski2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background-ski2.7979dd67aa0ac18a1d9e.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/banner-bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner-bg.ef05e42f7cf5f63a807d.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map