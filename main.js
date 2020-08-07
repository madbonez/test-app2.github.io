(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _card2card_card2card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card2card/card2card.component */ "./src/app/card2card/card2card.component.ts");






const routes = [
    {
        path: 'card2card',
        component: _card2card_card2card_component__WEBPACK_IMPORTED_MODULE_3__["Card2cardComponent"]
    },
    {
        path: 'history',
        component: _history_history_component__WEBPACK_IMPORTED_MODULE_2__["HistoryComponent"]
    },
    {
        path: '**',
        redirectTo: 'card2card'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfer/transfer.component */ "./src/app/transfer/transfer.component.ts");



class AppComponent {
    constructor() {
        this.title = 'test-app2';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-transfer");
    } }, directives: [_transfer_transfer_component__WEBPACK_IMPORTED_MODULE_1__["TransferComponent"]], styles: ["[_nghost-%COMP%] {\n  padding: 20px;\n  display: flex;\n  justify-content: space-around;\n}\n\napp-transfer[_ngcontent-%COMP%] {\n  width: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuYXBwLXRyYW5zZmVyIHtcbiAgd2lkdGg6IDgwMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transfer/transfer.component */ "./src/app/transfer/transfer.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _card2card_card2card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card2card/card2card.component */ "./src/app/card2card/card2card.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _history_history_component__WEBPACK_IMPORTED_MODULE_4__["HistoryComponent"],
        _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_5__["TransferComponent"],
        _card2card_card2card_component__WEBPACK_IMPORTED_MODULE_7__["Card2cardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _history_history_component__WEBPACK_IMPORTED_MODULE_4__["HistoryComponent"],
                    _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_5__["TransferComponent"],
                    _card2card_card2card_component__WEBPACK_IMPORTED_MODULE_7__["Card2cardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/card2card/card2card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/card2card/card2card.component.ts ***!
  \**************************************************/
/*! exports provided: Card2cardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card2cardComponent", function() { return Card2cardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _store_transfers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/transfers.service */ "./src/app/store/transfers.service.ts");
/* harmony import */ var _store_transfers_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/transfers.query */ "./src/app/store/transfers.query.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");



















const _c0 = ["formDirective"];
function Card2cardComponent_mat_icon_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Card2cardComponent_mat_icon_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "column": a0 }; };
class Card2cardComponent {
    constructor(breakpointObserver, cd, fb, snackBar, transferService, transfersQuery, route) {
        this.breakpointObserver = breakpointObserver;
        this.cd = cd;
        this.fb = fb;
        this.snackBar = snackBar;
        this.transferService = transferService;
        this.transfersQuery = transfersQuery;
        this.route = route;
        this.card2cardForm = this.fb.group({
            senderCardNumber: this.fb.group({
                senderNum1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
                senderNum2: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
                senderNum3: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
                senderNum4: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]]
            }),
            cardHolder: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            validMonth: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            validYear: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            receiverCardNumber: this.fb.group({
                receiverNum1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
                receiverNum2: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
                receiverNum3: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
                receiverNum4: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]]
            }),
            total: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    ngOnInit() {
        this.breakpointObserver.observe('(max-width: 704px)').subscribe(val => {
            this.isSmallScreen = val.matches;
            this.cd.markForCheck();
        });
        this.route.queryParamMap.subscribe(param => {
            if (param.get('id')) {
                this.transfersQuery.userTransfers$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(transfers => {
                    const historyTransfer = transfers[param.get('id')];
                    if (historyTransfer) {
                        this.card2cardForm.get('total').setValue(historyTransfer.total);
                        this.card2cardForm.get('validYear').setValue(historyTransfer.validYear);
                        this.card2cardForm.get('validMonth').setValue(historyTransfer.validMonth);
                        this.card2cardForm.get('cardHolder').setValue(historyTransfer.cardHolder);
                        this.card2cardForm.get('receiverCardNumber.receiverNum1').setValue(historyTransfer.cardReceiver[0]);
                        this.card2cardForm.get('receiverCardNumber.receiverNum2').setValue(historyTransfer.cardReceiver[1]);
                        this.card2cardForm.get('receiverCardNumber.receiverNum3').setValue(historyTransfer.cardReceiver[2]);
                        this.card2cardForm.get('receiverCardNumber.receiverNum4').setValue(historyTransfer.cardReceiver[3]);
                        this.card2cardForm.get('senderCardNumber.senderNum1').setValue(historyTransfer.cardSender[0]);
                        this.card2cardForm.get('senderCardNumber.senderNum2').setValue(historyTransfer.cardSender[1]);
                        this.card2cardForm.get('senderCardNumber.senderNum3').setValue(historyTransfer.cardSender[2]);
                        this.card2cardForm.get('senderCardNumber.senderNum4').setValue(historyTransfer.cardSender[3]);
                    }
                });
            }
        });
    }
    onSubmit(e) {
        this.card2cardForm.updateValueAndValidity();
        console.log(this.card2cardForm.value);
        if (this.card2cardForm.invalid) {
            e.preventDefault();
            e.stopPropagation();
            this.snackBar.open('Заполните обязательные поля', '', {
                duration: 2000,
            });
        }
        else {
            this.saveTransfer();
            this.formDirective.nativeElement.reset();
            this.snackBar.open('Отправлено!', '', {
                duration: 2000,
            });
        }
    }
    cardNumInput(e) {
        if (isNaN(e.key)) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    cardHolderKeypress(e) {
        if (!/[a-zA-Z]/.test(e.key) && e.key !== '.' && e.key !== ' ') {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    saveTransfer() {
        const receiverCardNumber = [
            this.card2cardForm.get('receiverCardNumber.receiverNum1').value,
            this.card2cardForm.get('receiverCardNumber.receiverNum2').value,
            this.card2cardForm.get('receiverCardNumber.receiverNum3').value,
            this.card2cardForm.get('receiverCardNumber.receiverNum4').value
        ];
        const senderCardNumber = [
            this.card2cardForm.get('senderCardNumber.senderNum1').value,
            this.card2cardForm.get('senderCardNumber.senderNum2').value,
            this.card2cardForm.get('senderCardNumber.senderNum3').value,
            this.card2cardForm.get('senderCardNumber.senderNum4').value
        ];
        this.transferService.save({
            cardReceiver: receiverCardNumber,
            cardReceiverView: receiverCardNumber.map((val, index) => index === 1 || index === 2 ? '****' : val).join(' '),
            cardSender: senderCardNumber,
            cardSenderView: senderCardNumber.map((val, index) => index === 1 || index === 2 ? '****' : val).join(' '),
            total: this.card2cardForm.get('total').value,
            validYear: this.card2cardForm.get('validYear').value,
            validMonth: this.card2cardForm.get('validMonth').value,
            cardHolder: this.card2cardForm.get('cardHolder').value
        });
    }
}
Card2cardComponent.ɵfac = function Card2cardComponent_Factory(t) { return new (t || Card2cardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_transfers_service__WEBPACK_IMPORTED_MODULE_6__["TransferService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_transfers_query__WEBPACK_IMPORTED_MODULE_7__["TransfersQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
Card2cardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Card2cardComponent, selectors: [["app-card2card"]], viewQuery: function Card2cardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formDirective = _t.first);
    } }, decls: 90, vars: 7, consts: [[3, "formGroup", "ngSubmit"], ["formDirective", ""], [1, "cards-container", 3, "ngClass"], [1, "card-mockup"], [1, "row", "head"], ["formGroupName", "senderCardNumber", 1, "row"], ["appearance", "outline", 1, "card-num"], ["matInput", "", "maxlength", "4", "placeholder", "0000", "formControlName", "senderNum1", 3, "keypress"], ["matInput", "", "maxlength", "4", "placeholder", "0000", "formControlName", "senderNum2", 3, "keypress"], ["matInput", "", "maxlength", "4", "placeholder", "0000", "formControlName", "senderNum3", 3, "keypress"], ["matInput", "", "maxlength", "4", "placeholder", "0000", "formControlName", "senderNum4", 3, "keypress"], [1, "row"], ["appearance", "outline", 1, "card-holder"], ["matInput", "", "placeholder", "IVAN IVANOV", "formControlName", "cardHolder", 1, "uppercase", 3, "keypress"], ["appearance", "outline", 1, "card-date"], ["placeholder", "01", "formControlName", "validMonth"], ["value", "01"], ["value", "02"], ["value", "03"], ["value", "04"], ["value", "05"], ["value", "06"], ["value", "07"], ["value", "08"], ["value", "09"], ["value", "10"], ["value", "11"], ["value", "12"], ["placeholder", "20", "formControlName", "validYear"], ["value", "20"], ["value", "21"], ["value", "22"], ["value", "23"], ["value", "24"], ["value", "25"], ["value", "26"], ["value", "27"], ["value", "28"], ["value", "29"], ["value", "30"], ["class", "forward-icon", "color", "accent", 4, "ngIf"], ["class", "down-icon", "color", "accent", 4, "ngIf"], ["formGroupName", "receiverCardNumber", 1, "row"], ["matInput", "", "maxlength", "4", "placeholder", "0000", "formControlName", "receiverNum1", 3, "keypress"], ["matInput", "", "maxlength", "4", "placeholder", "0000", "formControlName", "receiverNum2", 3, "keypress"], ["matInput", "", "maxlength", "4", "placeholder", "0000", "formControlName", "receiverNum3", 3, "keypress"], ["matInput", "", "maxlength", "4", "placeholder", "0000", "formControlName", "receiverNum4", 3, "keypress"], [1, "total"], [2, "color", "white"], ["matInput", "", "type", "number", "placeholder", "5000", "formControlName", "total"], ["mat-fab", "", "color", "primary", "matTooltip", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C", "type", "submit"], ["color", "accent", 1, "forward-icon"], ["color", "accent", 1, "down-icon"]], template: function Card2cardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function Card2cardComponent_Template_form_ngSubmit_0_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u041A\u0430\u0440\u0442\u0430 \u043F\u043B\u0430\u0442\u0435\u043B\u044C\u0449\u0438\u043A\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function Card2cardComponent_Template_input_keypress_8_listener($event) { return ctx.cardNumInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function Card2cardComponent_Template_input_keypress_10_listener($event) { return ctx.cardNumInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function Card2cardComponent_Template_input_keypress_12_listener($event) { return ctx.cardNumInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function Card2cardComponent_Template_input_keypress_14_listener($event) { return ctx.cardNumInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function Card2cardComponent_Template_input_keypress_17_listener($event) { return ctx.cardHolderKeypress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "05");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "06");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "07");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "21");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "27");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "28");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "29");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, Card2cardComponent_mat_icon_68_Template, 2, 0, "mat-icon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, Card2cardComponent_mat_icon_69_Template, 2, 0, "mat-icon", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " \u041A\u0430\u0440\u0442\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function Card2cardComponent_Template_input_keypress_75_listener($event) { return ctx.cardNumInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function Card2cardComponent_Template_input_keypress_77_listener($event) { return ctx.cardNumInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function Card2cardComponent_Template_input_keypress_79_listener($event) { return ctx.cardNumInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function Card2cardComponent_Template_input_keypress_81_listener($event) { return ctx.cardNumInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.card2cardForm)("@slideUpDown", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.isSmallScreen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSmallScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSmallScreen);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"]], styles: ["form[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.cards-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.cards-container.column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.card-mockup[_ngcontent-%COMP%] {\n  width: 310px;\n  height: calc(310px / 1.586);\n  border: 1px dashed #b0bec5;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.forward-icon[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.down-icon[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.total[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.total[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.row.head[_ngcontent-%COMP%] {\n  justify-self: flex-start;\n  margin-bottom: 10px;\n  color: #b0bec5;\n}\n\n\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.card-num[_ngcontent-%COMP%] {\n  width: 55px;\n  margin-left: 5px;\n}\n\n.card-date[_ngcontent-%COMP%] {\n  width: 55px;\n  margin-left: 5px;\n}\n\n.card-holder[_ngcontent-%COMP%] {\n  width: 115px;\n  margin-left: 5px;\n}\n\n.uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZDJjYXJkL2NhcmQyY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFDRTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUdBO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFFRTtFQUNFLGlCQUFBO0FBQUo7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFHRTtFQUNFLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBREo7O0FBS0EsZ0NBQUE7O0FBQ0E7O0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FBRkY7O0FBS0EsWUFBQTs7QUFDQTtFQUNFLDBCQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvY2FyZDJjYXJkL2NhcmQyY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICYuY29sdW1uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLmNhcmQtbW9ja3VwIHtcbiAgd2lkdGg6IDMxMHB4O1xuICBoZWlnaHQ6IGNhbGMoMzEwcHggLyAxLjU4Nik7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjYjBiZWM1O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb3J3YXJkLWljb24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uZG93bi1pY29uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRvdGFsIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcblxuICAmIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICYuaGVhZCB7XG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgY29sb3I6ICNiMGJlYzU7XG4gIH1cbn1cblxuLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbi8qIEZpcmVmb3ggKi9cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG4uY2FyZC1udW0ge1xuICB3aWR0aDogNTVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweFxufVxuXG4uY2FyZC1kYXRlIHtcbiAgd2lkdGg6IDU1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5jYXJkLWhvbGRlciB7XG4gIHdpZHRoOiAxMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideUpDown', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0)', opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-20%)', opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms 200ms ease')),
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Card2cardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card2card',
                templateUrl: './card2card.component.html',
                styleUrls: ['./card2card.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideUpDown', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0)', opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-20%)', opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms 200ms ease')),
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _store_transfers_service__WEBPACK_IMPORTED_MODULE_6__["TransferService"] }, { type: _store_transfers_query__WEBPACK_IMPORTED_MODULE_7__["TransfersQuery"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }]; }, { formDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['formDirective']
        }] }); })();


/***/ }),

/***/ "./src/app/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _store_transfers_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/transfers.query */ "./src/app/store/transfers.query.ts");
/* harmony import */ var _store_transfers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/transfers.service */ "./src/app/store/transfers.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");












function HistoryComponent_mat_header_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2116 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "customWidthClass");
} }
function HistoryComponent_mat_cell_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "customWidthClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r15 + 1);
} }
function HistoryComponent_mat_header_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041A\u0430\u0440\u0442\u0430 \u043F\u043B\u0430\u0442\u0435\u043B\u044C\u0449\u0438\u043A\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HistoryComponent_mat_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.cardSenderView, " ");
} }
function HistoryComponent_mat_header_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041A\u0430\u0440\u0442\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HistoryComponent_mat_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.cardReceiverView, " ");
} }
function HistoryComponent_mat_header_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0421\u0443\u043C\u043C\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HistoryComponent_mat_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.total, " ");
} }
function HistoryComponent_mat_header_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0414\u0430\u0442\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HistoryComponent_mat_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, element_r19.date), " ", element_r19.date == null ? null : element_r19.date.getHours(), ":", element_r19.date == null ? null : element_r19.date.getMinutes(), " ");
} }
function HistoryComponent_mat_header_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/card2card"]; };
const _c1 = function (a0) { return { id: a0 }; };
function HistoryComponent_mat_cell_19_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_mat_cell_19_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const element_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.deleteItem(element_r20.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, element_r20.id));
} }
function HistoryComponent_mat_header_row_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function HistoryComponent_mat_row_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
const ELEMENT_DATA = [
    { id: '123lkjasd1231', cardSender: '1234123412341234', cardReceiver: '1234123412341234', total: 5000, date: 'date' },
    { id: '123lkjasd1231', cardSender: '1234123412341234', cardReceiver: '1234123412341234', total: 5000, date: 'date' },
    { id: '123lkjasd1231', cardSender: '1234123412341234', cardReceiver: '1234123412341234', total: 5000, date: 'date' },
    { id: '123lkjasd1231', cardSender: '1234123412341234', cardReceiver: '1234123412341234', total: 5000, date: 'date' },
    { id: '123lkjasd1231', cardSender: '1234123412341234', cardReceiver: '1234123412341234', total: 5000, date: 'date' },
    { id: '123lkjasd1231', cardSender: '1234123412341234', cardReceiver: '1234123412341234', total: 5000, date: 'date' },
    { id: '123lkjasd1231', cardSender: '1234123412341234', cardReceiver: '1234123412341234', total: 5000, date: 'date' },
    { id: '123lkjasd1231', cardSender: '1234123412341234', cardReceiver: '1234123412341234', total: 5000, date: 'date' },
    { id: '123lkjasd1231', cardSender: '1234123412341234', cardReceiver: '1234123412341234', total: 5000, date: 'date' }
];
class HistoryComponent {
    constructor(breakpointObserver, cd, transfersQuery, transferService) {
        this.breakpointObserver = breakpointObserver;
        this.cd = cd;
        this.transfersQuery = transfersQuery;
        this.transferService = transferService;
        this.displayedColumns = ['index', 'cardSender', 'cardReceiver', 'total', 'date', 'action'];
        this.dataSource = ELEMENT_DATA;
    }
    get value() {
        return true;
    }
    ngOnInit() {
        this.breakpointObserver.observe('(max-width: 704px)').subscribe(val => {
            this.isSmallScreen = val.matches;
            if (this.isSmallScreen) {
                this.displayedColumns = ['total', 'date', 'action'];
            }
            else {
                this.displayedColumns = ['index', 'cardSender', 'cardReceiver', 'total', 'date', 'action'];
            }
            this.cd.markForCheck();
        });
    }
    deleteItem(id) {
        this.transferService.deleteById(id);
    }
}
HistoryComponent.ɵfac = function HistoryComponent_Factory(t) { return new (t || HistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_transfers_query__WEBPACK_IMPORTED_MODULE_3__["TransfersQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_transfers_service__WEBPACK_IMPORTED_MODULE_4__["TransferService"])); };
HistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoryComponent, selectors: [["app-history"]], hostVars: 1, hostBindings: function HistoryComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@slideUpDown", ctx.value);
    } }, decls: 22, vars: 5, consts: [[3, "dataSource"], ["matColumnDef", "index"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "cardSender"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "cardReceiver"], ["matColumnDef", "total"], ["matColumnDef", "date"], ["matColumnDef", "action"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "ngClass"], ["mat-icon-button", "", "matTooltip", "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C", 3, "routerLink", "queryParams"], ["mat-icon-button", "", "matTooltip", "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", 3, "click"]], template: function HistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HistoryComponent_mat_header_cell_3_Template, 2, 1, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HistoryComponent_mat_cell_4_Template, 2, 2, "mat-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HistoryComponent_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HistoryComponent_mat_cell_7_Template, 2, 1, "mat-cell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HistoryComponent_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HistoryComponent_mat_cell_10_Template, 2, 1, "mat-cell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HistoryComponent_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HistoryComponent_mat_cell_13_Template, 2, 1, "mat-cell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HistoryComponent_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HistoryComponent_mat_cell_16_Template, 3, 5, "mat-cell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HistoryComponent_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HistoryComponent_mat_cell_19_Template, 7, 5, "mat-cell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HistoryComponent_mat_header_row_20_Template, 1, 0, "mat-header-row", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HistoryComponent_mat_row_21_Template, 1, 0, "mat-row", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.transfersQuery.userTransfersArray$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding-top: 20px;\n}\n\n.customWidthClass[_ngcontent-%COMP%] {\n  flex: 0 0 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmN1c3RvbVdpZHRoQ2xhc3N7XG4gIGZsZXg6IDAgMCA0MHB4O1xufVxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideUpDown', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0)', opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-20%)', opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms 200ms ease')),
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-history',
                templateUrl: './history.component.html',
                styleUrls: ['./history.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideUpDown', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0)', opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-20%)', opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms 200ms ease')),
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _store_transfers_query__WEBPACK_IMPORTED_MODULE_3__["TransfersQuery"] }, { type: _store_transfers_service__WEBPACK_IMPORTED_MODULE_4__["TransferService"] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['@slideUpDown']
        }] }); })();


/***/ }),

/***/ "./src/app/store/transfers.query.ts":
/*!******************************************!*\
  !*** ./src/app/store/transfers.query.ts ***!
  \******************************************/
/*! exports provided: TransfersQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransfersQuery", function() { return TransfersQuery; });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/__ivy_ngcc__/fesm2015/datorama-akita.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _transfers_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transfers.store */ "./src/app/store/transfers.store.ts");





class TransfersQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__["Query"] {
    constructor(store) {
        super(store);
        this.store = store;
        this.userTransfers$ = this.select('transfers');
        this.userTransfersArray$ = this.select('transfers')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(transfers => Object.keys(transfers).map(key => transfers[key])));
    }
}
TransfersQuery.ɵfac = function TransfersQuery_Factory(t) { return new (t || TransfersQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_transfers_store__WEBPACK_IMPORTED_MODULE_3__["TransfersStore"])); };
TransfersQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TransfersQuery, factory: TransfersQuery.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TransfersQuery, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _transfers_store__WEBPACK_IMPORTED_MODULE_3__["TransfersStore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/transfers.service.ts":
/*!********************************************!*\
  !*** ./src/app/store/transfers.service.ts ***!
  \********************************************/
/*! exports provided: TransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferService", function() { return TransferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_generateGuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/generateGuid */ "./src/app/store/utils/generateGuid.ts");
/* harmony import */ var _transfers_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transfers.store */ "./src/app/store/transfers.store.ts");




class TransferService {
    constructor(transfersStore) {
        this.transfersStore = transfersStore;
    }
    save(transfer) {
        transfer.date = new Date();
        transfer.id = Object(_utils_generateGuid__WEBPACK_IMPORTED_MODULE_1__["generateGuid"])();
        this.transfersStore.update(state => {
            return Object.assign(Object.assign({}, state), { transfers: Object.assign(Object.assign({}, state.transfers), { [transfer.id]: transfer }) });
        });
    }
    deleteById(id) {
        this.transfersStore.update(state => {
            delete state.transfers[id];
            return Object.assign(Object.assign({}, state), { transfers: Object.assign({}, state.transfers) });
        });
    }
}
TransferService.ɵfac = function TransferService_Factory(t) { return new (t || TransferService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_transfers_store__WEBPACK_IMPORTED_MODULE_2__["TransfersStore"])); };
TransferService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TransferService, factory: TransferService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransferService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _transfers_store__WEBPACK_IMPORTED_MODULE_2__["TransfersStore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/transfers.store.ts":
/*!******************************************!*\
  !*** ./src/app/store/transfers.store.ts ***!
  \******************************************/
/*! exports provided: createInitialState, TransfersStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInitialState", function() { return createInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransfersStore", function() { return TransfersStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/__ivy_ngcc__/fesm2015/datorama-akita.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




function createInitialState() {
    return {
        transfers: {}
    };
}
let TransfersStore = class TransfersStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_1__["Store"] {
    constructor() {
        super(createInitialState());
    }
};
TransfersStore.ɵfac = function TransfersStore_Factory(t) { return new (t || TransfersStore)(); };
TransfersStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TransfersStore, factory: TransfersStore.ɵfac, providedIn: 'root' });
TransfersStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["StoreConfig"])({ name: 'transfers' })
], TransfersStore);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TransfersStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/store/utils/generateGuid.ts":
/*!*********************************************!*\
  !*** ./src/app/store/utils/generateGuid.ts ***!
  \*********************************************/
/*! exports provided: generateGuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGuid", function() { return generateGuid; });
/**
 * https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
 */
function generateGuid() {
    return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
}


/***/ }),

/***/ "./src/app/transfer/transfer.component.ts":
/*!************************************************!*\
  !*** ./src/app/transfer/transfer.component.ts ***!
  \************************************************/
/*! exports provided: TransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferComponent", function() { return TransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");







class TransferComponent {
    constructor(router, cd) {
        this.router = router;
        this.cd = cd;
        this.activeLink = '/card2card';
    }
    ngOnInit() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe((event) => {
            this.activeLink = window.location.href;
            this.cd.markForCheck();
        });
    }
}
TransferComponent.ɵfac = function TransferComponent_Factory(t) { return new (t || TransferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
TransferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransferComponent, selectors: [["app-transfer"]], decls: 10, vars: 4, consts: [["mat-tab-nav-bar", ""], ["mat-tab-link", "", 3, "routerLink", "active"]], template: function TransferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u0441 \u043A\u0430\u0440\u0442\u044B \u043D\u0430 \u043A\u0430\u0440\u0442\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0418\u0441\u0442\u043E\u0440\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/card2card")("active", (ctx.activeLink == null ? null : ctx.activeLink.indexOf("/card2card")) !== 0 - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/history")("active", (ctx.activeLink == null ? null : ctx.activeLink.indexOf("/history")) !== 0 - 1);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabNav"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNmZXIvdHJhbnNmZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zZmVyL3RyYW5zZmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxubWF0LWNhcmQge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transfer',
                templateUrl: './transfer.component.html',
                styleUrls: ['./transfer.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/artem/workspace/sandbox/test-app2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map