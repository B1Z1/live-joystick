(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-page-domain-welcome-page-module"],{

/***/ "AdRE":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/welcome-page/domain/routes/welcome-page-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: WelcomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function() { return WelcomePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_pages_welcome_page_ui_welcome_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/welcome-page/ui/welcome-page.component */ "D1l0");





const routes = [
    {
        path: '',
        component: src_app_pages_welcome_page_ui_welcome_page_component__WEBPACK_IMPORTED_MODULE_2__["WelcomePageComponent"]
    }
];
class WelcomePageRoutingModule {
}
WelcomePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WelcomePageRoutingModule });
WelcomePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WelcomePageRoutingModule_Factory(t) { return new (t || WelcomePageRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WelcomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomePageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "BslI":
/*!******************************************************************!*\
  !*** ./src/app/pages/welcome-page/domain/welcome-page.module.ts ***!
  \******************************************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_pages_welcome_page_ui_welcome_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/welcome-page/ui/welcome-page.component */ "D1l0");
/* harmony import */ var src_app_pages_welcome_page_domain_routes_welcome_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/welcome-page/domain/routes/welcome-page-routing.module */ "AdRE");





class WelcomePageModule {
}
WelcomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WelcomePageModule });
WelcomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WelcomePageModule_Factory(t) { return new (t || WelcomePageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_pages_welcome_page_domain_routes_welcome_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["WelcomePageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WelcomePageModule, { declarations: [src_app_pages_welcome_page_ui_welcome_page_component__WEBPACK_IMPORTED_MODULE_2__["WelcomePageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_pages_welcome_page_domain_routes_welcome_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["WelcomePageRoutingModule"]], exports: [src_app_pages_welcome_page_ui_welcome_page_component__WEBPACK_IMPORTED_MODULE_2__["WelcomePageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [src_app_pages_welcome_page_ui_welcome_page_component__WEBPACK_IMPORTED_MODULE_2__["WelcomePageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_pages_welcome_page_domain_routes_welcome_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["WelcomePageRoutingModule"]
                ],
                exports: [src_app_pages_welcome_page_ui_welcome_page_component__WEBPACK_IMPORTED_MODULE_2__["WelcomePageComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "D1l0":
/*!*****************************************************************!*\
  !*** ./src/app/pages/welcome-page/ui/welcome-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: WelcomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageComponent", function() { return WelcomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class WelcomePageComponent {
    constructor() {
    }
    ngOnInit() {
        console.log('welcome');
    }
}
WelcomePageComponent.ɵfac = function WelcomePageComponent_Factory(t) { return new (t || WelcomePageComponent)(); };
WelcomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomePageComponent, selectors: [["app-welcome-page"]], decls: 4, vars: 0, consts: [["routerLink", "/pilot"]], template: function WelcomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "welcome-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "pilot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome-page',
                templateUrl: './welcome-page.component.html',
                styleUrls: [],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-welcome-page-domain-welcome-page-module.js.map