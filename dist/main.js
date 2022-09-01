/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/board.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/board.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icon-x.svg */ "./src/assets/icon-x.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icon-o.svg */ "./src/assets/icon-o.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icon-x-outline.svg */ "./src/assets/icon-x-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icon-o-outline.svg */ "./src/assets/icon-o-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".game-board-screen {\n    min-height: 100vh;\n    display: grid;\n    place-items: center;\n}\n\n.game-board-screen .screen-content {\n    gap: 20px;\n}\n\n.game-board-screen .info {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.game-board-screen .info .info-logo {\n    width: 71px;\n}\n\n.game-board-screen .info .turn {\n    background: var(--semi-dark-navy);\n    width: 140px;\n    padding: 13px 30px;\n    padding-bottom: 19px;\n    margin-right: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 10px;\n    box-shadow: inset 0px -4px 0px #10212A;\n}\n\n.game-board-screen .info .turn img {\n    width: 20px;\n    filter: var(--gray-filter);\n}\n\n.game-board-screen .info .turn p {\n    color: var(--silver);\n    font-family: outfit-bold;\n    font-size: 16px;\n    line-height: 20px;\n    letter-spacing: 1px;\n}\n\n.game-board-screen .info .reset {\n    background: var(--silver);\n    width: 52px;\n    height: 52px;\n    display: grid;\n    place-items: center;\n    padding: 16px;\n    border-radius: 10px;\n    box-shadow: inset 0px -4px 0px #6B8997;\n    border: none;\n    transition: background-color .33s;\n}\n\n.game-board-screen .info .reset:hover {\n    background: var(--silver-hover);\n}\n\n.game-board-screen .info .reset img {\n    width: 20px;\n}\n\n.game-board-screen .results {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n}\n\n.game-board-screen .results .result-info {\n    width: 140px;\n    height: 72px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-radius: 15px;\n}\n\n.game-board-screen .results .player-label {\n    color: var(--dark-navy);\n    font-family: outfit;\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: .88px;\n}\n\n.game-board-screen .results .result-number {\n    color: var(--dark-navy);\n    font-family: outfit-bold;\n    font-size: 24px;\n    line-height: 30px;\n    letter-spacing: 1.5px;\n}\n\n.game-board-screen .results .player-x-results {\n    background: var(--light-blue);\n}\n\n.game-board-screen .results .ties {\n    background: var(--silver);\n}\n\n.game-board-screen .results .player-o-results {\n    background: var(--light-yellow);\n}\n\n.game-board-screen .board {\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    gap: 20px;\n}\n\n.game-board-screen .board .blocker {\n    background: rgba(7, 3, 66, 0.15);\n    position: absolute;\n    border-radius: 10px;\n}\n\n.game-board-screen .board .blocker.active-block {\n    width: 100%;\n    height: 100%;\n}\n\n.game-board-screen .board .blocker.inactive-block {\n    width: 0;\n    height: 0;\n}\n\n.game-board-screen .board .pad {\n    background-color: var(--semi-dark-navy);\n    background-size: 64px 64px;\n    background-position: center;\n    background-repeat: no-repeat;\n    width: 140px;\n    height: 140px;\n    border-radius: 15px;\n    box-shadow: inset 0px -8px 0px #10212A;\n}\n\n.game-board-screen .board .x {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.game-board-screen .board .o {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.game-board-screen .board .x-hover:hover {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.game-board-screen .board .o-hover:hover {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n@media screen and (max-width: 600px) {\n    .game-board-screen .info {\n        width: 330px;\n    }\n\n    .game-board-screen .info .reset {\n        width: 40px;\n        height: 40px;\n        padding: 12.3px;\n        border-radius: 5px;\n    }\n\n    .game-board-screen .info .reset img {\n        width: 15px;\n    }\n\n    .game-board-screen .board .pad {\n        background-size: 40px 40px;\n        width: 96px;\n        height: 96px;\n        border-radius: 10px;\n    }\n\n    .game-board-screen .info .turn {\n        width: 96px;\n        padding: 13px 15px;\n        padding-top: 9px;\n        margin-right: 30px;\n        border-radius: 5px;\n    }\n    \n    .game-board-screen .info .turn img {\n        width: 16px;\n    }\n    \n    .game-board-screen .info .turn p {\n        font-size: 14px;\n        line-height: 17px;\n        letter-spacing: .88px;\n    }\n\n    .game-board-screen .results .result-info {\n        width: 96px;\n        height: 64px;\n        border-radius: 10px;\n    }\n\n    .game-board-screen .results .player-label {\n        font-size: 12px;\n        line-height: 15px;\n        letter-spacing: .75px;\n    }\n\n    .game-board-screen .results .result-number {\n        font-size: 20px;\n        line-height: 25px;\n        letter-spacing: 1.25px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/board.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;IACnB,sCAAsC;AAC1C;;AAEA;IACI,WAAW;IACX,0BAA0B;AAC9B;;AAEA;IACI,oBAAoB;IACpB,wBAAwB;IACxB,eAAe;IACf,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,sCAAsC;IACtC,YAAY;IACZ,iCAAiC;AACrC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,eAAe;IACf,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,kCAAkC;IAClC,+BAA+B;IAC/B,SAAS;AACb;;AAEA;IACI,gCAAgC;IAChC,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,uCAAuC;IACvC,0BAA0B;IAC1B,2BAA2B;IAC3B,4BAA4B;IAC5B,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,sCAAsC;AAC1C;;AAEA;IACI,yDAA6C;AACjD;;AAEA;IACI,yDAA6C;AACjD;;AAEA;IACI,yDAAqD;AACzD;;AAEA;IACI,yDAAqD;AACzD;;AAEA;IACI;QACI,YAAY;IAChB;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,eAAe;QACf,kBAAkB;IACtB;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,0BAA0B;QAC1B,WAAW;QACX,YAAY;QACZ,mBAAmB;IACvB;;IAEA;QACI,WAAW;QACX,kBAAkB;QAClB,gBAAgB;QAChB,kBAAkB;QAClB,kBAAkB;IACtB;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,eAAe;QACf,iBAAiB;QACjB,qBAAqB;IACzB;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,mBAAmB;IACvB;;IAEA;QACI,eAAe;QACf,iBAAiB;QACjB,qBAAqB;IACzB;;IAEA;QACI,eAAe;QACf,iBAAiB;QACjB,sBAAsB;IAC1B;AACJ","sourcesContent":[".game-board-screen {\n    min-height: 100vh;\n    display: grid;\n    place-items: center;\n}\n\n.game-board-screen .screen-content {\n    gap: 20px;\n}\n\n.game-board-screen .info {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.game-board-screen .info .info-logo {\n    width: 71px;\n}\n\n.game-board-screen .info .turn {\n    background: var(--semi-dark-navy);\n    width: 140px;\n    padding: 13px 30px;\n    padding-bottom: 19px;\n    margin-right: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 10px;\n    box-shadow: inset 0px -4px 0px #10212A;\n}\n\n.game-board-screen .info .turn img {\n    width: 20px;\n    filter: var(--gray-filter);\n}\n\n.game-board-screen .info .turn p {\n    color: var(--silver);\n    font-family: outfit-bold;\n    font-size: 16px;\n    line-height: 20px;\n    letter-spacing: 1px;\n}\n\n.game-board-screen .info .reset {\n    background: var(--silver);\n    width: 52px;\n    height: 52px;\n    display: grid;\n    place-items: center;\n    padding: 16px;\n    border-radius: 10px;\n    box-shadow: inset 0px -4px 0px #6B8997;\n    border: none;\n    transition: background-color .33s;\n}\n\n.game-board-screen .info .reset:hover {\n    background: var(--silver-hover);\n}\n\n.game-board-screen .info .reset img {\n    width: 20px;\n}\n\n.game-board-screen .results {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n}\n\n.game-board-screen .results .result-info {\n    width: 140px;\n    height: 72px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-radius: 15px;\n}\n\n.game-board-screen .results .player-label {\n    color: var(--dark-navy);\n    font-family: outfit;\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: .88px;\n}\n\n.game-board-screen .results .result-number {\n    color: var(--dark-navy);\n    font-family: outfit-bold;\n    font-size: 24px;\n    line-height: 30px;\n    letter-spacing: 1.5px;\n}\n\n.game-board-screen .results .player-x-results {\n    background: var(--light-blue);\n}\n\n.game-board-screen .results .ties {\n    background: var(--silver);\n}\n\n.game-board-screen .results .player-o-results {\n    background: var(--light-yellow);\n}\n\n.game-board-screen .board {\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    gap: 20px;\n}\n\n.game-board-screen .board .blocker {\n    background: rgba(7, 3, 66, 0.15);\n    position: absolute;\n    border-radius: 10px;\n}\n\n.game-board-screen .board .blocker.active-block {\n    width: 100%;\n    height: 100%;\n}\n\n.game-board-screen .board .blocker.inactive-block {\n    width: 0;\n    height: 0;\n}\n\n.game-board-screen .board .pad {\n    background-color: var(--semi-dark-navy);\n    background-size: 64px 64px;\n    background-position: center;\n    background-repeat: no-repeat;\n    width: 140px;\n    height: 140px;\n    border-radius: 15px;\n    box-shadow: inset 0px -8px 0px #10212A;\n}\n\n.game-board-screen .board .x {\n    background-image: url(\"../assets/icon-x.svg\");\n}\n\n.game-board-screen .board .o {\n    background-image: url(\"../assets/icon-o.svg\");\n}\n\n.game-board-screen .board .x-hover:hover {\n    background-image: url(\"../assets/icon-x-outline.svg\");\n}\n\n.game-board-screen .board .o-hover:hover {\n    background-image: url(\"../assets/icon-o-outline.svg\");\n}\n\n@media screen and (max-width: 600px) {\n    .game-board-screen .info {\n        width: 330px;\n    }\n\n    .game-board-screen .info .reset {\n        width: 40px;\n        height: 40px;\n        padding: 12.3px;\n        border-radius: 5px;\n    }\n\n    .game-board-screen .info .reset img {\n        width: 15px;\n    }\n\n    .game-board-screen .board .pad {\n        background-size: 40px 40px;\n        width: 96px;\n        height: 96px;\n        border-radius: 10px;\n    }\n\n    .game-board-screen .info .turn {\n        width: 96px;\n        padding: 13px 15px;\n        padding-top: 9px;\n        margin-right: 30px;\n        border-radius: 5px;\n    }\n    \n    .game-board-screen .info .turn img {\n        width: 16px;\n    }\n    \n    .game-board-screen .info .turn p {\n        font-size: 14px;\n        line-height: 17px;\n        letter-spacing: .88px;\n    }\n\n    .game-board-screen .results .result-info {\n        width: 96px;\n        height: 64px;\n        border-radius: 10px;\n    }\n\n    .game-board-screen .results .player-label {\n        font-size: 12px;\n        line-height: 15px;\n        letter-spacing: .75px;\n    }\n\n    .game-board-screen .results .result-number {\n        font-size: 20px;\n        line-height: 25px;\n        letter-spacing: 1.25px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/game_over.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/game_over.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".game-over-screen {\n    background: rgb(0, 0, 0, .5);\n    position: fixed;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    transition: top .33s;\n}\n\n.game-over-screen .screen-content {\n    background: var(--dark-navy);\n    width: 100%;\n    padding: 45px;\n}\n\n.game-over-screen .who-won {\n    color: var(--silver);\n    font-family: outfit-bold;\n    font-size: 16px;\n    line-height: 20px;\n    letter-spacing: 1px;\n    margin-bottom: 23px;\n}\n\n.game-over-screen .winner-results {\n    display: flex;\n    align-items: center;\n    gap: 24px;\n    margin-bottom: 31px;\n}\n\n.game-over-screen .winner-results img {\n    width: 64px;\n}\n\n.game-over-screen .winner-results h2 {\n    font-size: 40px;\n    font-family: outfit-bold;\n    line-height: 50px;\n    letter-spacing: 2.5px;\n}\n\n.game-over-screen .x-winner-result h2 {\n    color: var(--light-blue);\n}\n\n.game-over-screen .o-winner-result h2 {\n    color: var(--light-yellow);\n}\n\n.game-over-screen .no-winner-result {\n    color: var(--silver);\n}\n\n.game-over-screen .no-winner-result img {\n    display: none;\n}\n\n.game-over-screen .no-winner-result p {\n    display: none;\n}\n\n.game-over-screen .buttons {\n    display: flex;\n    gap: 16px;\n}\n\n@media screen and (max-width: 600px) {\n    .game-over-screen .who-won {\n        font-size: 14px;\n        line-height: 17px;\n        letter-spacing: .88px;\n        margin-bottom: 16px;\n    }\n    \n    .game-over-screen .winner-results {\n        gap: 8px;\n        margin-bottom: 24px;\n    }\n\n    .game-over-screen .winner-results img {\n        width: 30px;\n    }\n\n    .game-over-screen .winner-results h2 {\n        font-size: 24px;\n        line-height: 30px;\n        letter-spacing: 1.5px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/game_over.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;IAC5B,eAAe;IACf,OAAO;IACP,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,4BAA4B;IAC5B,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,wBAAwB;IACxB,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,wBAAwB;IACxB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI;QACI,eAAe;QACf,iBAAiB;QACjB,qBAAqB;QACrB,mBAAmB;IACvB;;IAEA;QACI,QAAQ;QACR,mBAAmB;IACvB;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,eAAe;QACf,iBAAiB;QACjB,qBAAqB;IACzB;AACJ","sourcesContent":[".game-over-screen {\n    background: rgb(0, 0, 0, .5);\n    position: fixed;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    transition: top .33s;\n}\n\n.game-over-screen .screen-content {\n    background: var(--dark-navy);\n    width: 100%;\n    padding: 45px;\n}\n\n.game-over-screen .who-won {\n    color: var(--silver);\n    font-family: outfit-bold;\n    font-size: 16px;\n    line-height: 20px;\n    letter-spacing: 1px;\n    margin-bottom: 23px;\n}\n\n.game-over-screen .winner-results {\n    display: flex;\n    align-items: center;\n    gap: 24px;\n    margin-bottom: 31px;\n}\n\n.game-over-screen .winner-results img {\n    width: 64px;\n}\n\n.game-over-screen .winner-results h2 {\n    font-size: 40px;\n    font-family: outfit-bold;\n    line-height: 50px;\n    letter-spacing: 2.5px;\n}\n\n.game-over-screen .x-winner-result h2 {\n    color: var(--light-blue);\n}\n\n.game-over-screen .o-winner-result h2 {\n    color: var(--light-yellow);\n}\n\n.game-over-screen .no-winner-result {\n    color: var(--silver);\n}\n\n.game-over-screen .no-winner-result img {\n    display: none;\n}\n\n.game-over-screen .no-winner-result p {\n    display: none;\n}\n\n.game-over-screen .buttons {\n    display: flex;\n    gap: 16px;\n}\n\n@media screen and (max-width: 600px) {\n    .game-over-screen .who-won {\n        font-size: 14px;\n        line-height: 17px;\n        letter-spacing: .88px;\n        margin-bottom: 16px;\n    }\n    \n    .game-over-screen .winner-results {\n        gap: 8px;\n        margin-bottom: 24px;\n    }\n\n    .game-over-screen .winner-results img {\n        width: 30px;\n    }\n\n    .game-over-screen .winner-results h2 {\n        font-size: 24px;\n        line-height: 30px;\n        letter-spacing: 1.5px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/levels.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/levels.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --easy: rgb(164, 210, 230);\n    --medium: rgb(244, 244, 149);\n    --hard: rgb(248, 166, 166);\n    --easy-hover: rgb(189, 230, 241);\n    --medium-hover: rgb(234, 245, 179);\n    --hard-hover: rgb(247, 202, 192);\n    --easy-underline: rgb(122, 151, 184);\n    --medium-underline: rgb(210, 201, 138);\n    --hard-underline: rgb(220, 119, 119);\n}\n\n.level-screen {\n    background: var(--dark-navy);\n    position: fixed;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: top .33s;\n    z-index: 2;\n}\n\n.level-screen .screen-content {\n    background: var(--semi-dark-navy);\n    box-shadow: inset 0px -8px 0px var(--pads-shadow);\n    padding: 20px;\n    border-radius: 10px;\n    gap: 20px;\n}\n\n.level-screen h2 {\n    color: var(--silver);\n    font-size: 20px;\n    font-family: outfit;\n    line-height: 50px;\n    letter-spacing: 2.5px;\n}\n\n.level-screen .buttons-container {\n    display: flex;\n    gap: 20px;\n}\n\n.level-screen .easy {\n    background: var(--easy);\n    box-shadow: inset 0px -8px 0px var(--easy-underline);\n}\n\n.level-screen .medium {\n    background: var(--medium);\n    box-shadow: inset 0px -8px 0px var(--medium-underline);\n}\n\n.level-screen .hard {\n    background: var(--hard);\n    box-shadow: inset 0px -8px 0px var(--hard-underline);\n}\n\n.level-screen .easy:hover {\n    background: var(--easy-hover);\n}\n\n.level-screen .medium:hover {\n    background: var(--medium-hover);\n}\n\n.level-screen .hard:hover {\n    background: var(--hard-hover);\n}", "",{"version":3,"sources":["webpack://./src/css/levels.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,4BAA4B;IAC5B,0BAA0B;IAC1B,gCAAgC;IAChC,kCAAkC;IAClC,gCAAgC;IAChC,oCAAoC;IACpC,sCAAsC;IACtC,oCAAoC;AACxC;;AAEA;IACI,4BAA4B;IAC5B,eAAe;IACf,OAAO;IACP,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,iCAAiC;IACjC,iDAAiD;IACjD,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,oBAAoB;IACpB,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,oDAAoD;AACxD;;AAEA;IACI,yBAAyB;IACzB,sDAAsD;AAC1D;;AAEA;IACI,uBAAuB;IACvB,oDAAoD;AACxD;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,6BAA6B;AACjC","sourcesContent":[":root {\n    --easy: rgb(164, 210, 230);\n    --medium: rgb(244, 244, 149);\n    --hard: rgb(248, 166, 166);\n    --easy-hover: rgb(189, 230, 241);\n    --medium-hover: rgb(234, 245, 179);\n    --hard-hover: rgb(247, 202, 192);\n    --easy-underline: rgb(122, 151, 184);\n    --medium-underline: rgb(210, 201, 138);\n    --hard-underline: rgb(220, 119, 119);\n}\n\n.level-screen {\n    background: var(--dark-navy);\n    position: fixed;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: top .33s;\n    z-index: 2;\n}\n\n.level-screen .screen-content {\n    background: var(--semi-dark-navy);\n    box-shadow: inset 0px -8px 0px var(--pads-shadow);\n    padding: 20px;\n    border-radius: 10px;\n    gap: 20px;\n}\n\n.level-screen h2 {\n    color: var(--silver);\n    font-size: 20px;\n    font-family: outfit;\n    line-height: 50px;\n    letter-spacing: 2.5px;\n}\n\n.level-screen .buttons-container {\n    display: flex;\n    gap: 20px;\n}\n\n.level-screen .easy {\n    background: var(--easy);\n    box-shadow: inset 0px -8px 0px var(--easy-underline);\n}\n\n.level-screen .medium {\n    background: var(--medium);\n    box-shadow: inset 0px -8px 0px var(--medium-underline);\n}\n\n.level-screen .hard {\n    background: var(--hard);\n    box-shadow: inset 0px -8px 0px var(--hard-underline);\n}\n\n.level-screen .easy:hover {\n    background: var(--easy-hover);\n}\n\n.level-screen .medium:hover {\n    background: var(--medium-hover);\n}\n\n.level-screen .hard:hover {\n    background: var(--hard-hover);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/new_game.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/new_game.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".new-game-screen {\n    background: var(--dark-navy);\n    position: fixed;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: grid;\n    place-items: center;\n    transition: top .33s;\n    z-index: 3;\n}\n\n.new-game-screen .screen-content {\n    gap: 40px;\n}\n\n.new-game-screen .logo {\n    width: 72px;\n}\n\n.new-game-screen .player-select {\n    background: var(--semi-dark-navy);\n    box-shadow: inset 0px -8px 0px var(--pads-shadow);\n    border-radius: 15px;\n    width: 460px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 24px;\n    padding-bottom: 30px;\n}\n\n.new-game-screen .turn-feedback {\n    color: var(--silver);\n    font-family: outfit-bold;\n    font-size: 16px;\n    line-height: 20px;\n    letter-spacing: 1px;\n}\n\n.new-game-screen .options {\n    background: var(--dark-navy);\n    border-radius: 10px;\n    padding: 9px;\n    display: flex;\n    margin-top: 24px;\n    margin-bottom: 17px;\n}\n\n.new-game-screen .options label {\n    position: relative;\n    width: 200px;\n    height: 55px;\n    border-radius: 10px;\n    display: grid;\n    place-items: center;\n}\n\n.new-game-screen .options img {\n    width: 32px;\n    z-index: 200;\n    filter: var(--gray-filter);\n    transition: filter .33s;\n    pointer-events: none;\n}\n\n.new-game-screen .options input[type=\"radio\"] {\n    appearance: none;\n    width: 100%;\n    height: 100%;\n    border-radius: 10px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 100;\n    transition: background-color .33s;\n}\n\n.new-game-screen .options input[type=\"radio\"]:checked {\n    background: var(--silver);\n}\n\n.new-game-screen .options input[type=\"radio\"]:checked~img {\n    filter: invert(12%) sepia(15%) saturate(1567%) hue-rotate(158deg) brightness(92%) contrast(89%);\n}\n\n.new-game-screen .options input[type=\"radio\"]:not(:checked):hover {\n    background: var(--half-tone);\n}\n\n.new-game-screen .footnote {\n    color: var(--silver);\n    font-family: outfit;\n    line-height: 17px;\n    font-size: 14px;\n    letter-spacing: .88px;\n    opacity: 50%;\n}\n\n.new-game-screen .new-age-buttons {\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.new-game-screen .new-age-buttons button {\n    color: var(--dark-navy);\n    font-family: outfit-bold;\n    font-size: 20px;\n    line-height: 20px;\n    letter-spacing: 1.25px;\n    padding-top: 17px;\n    padding-bottom: 25px;\n    border-radius: 15px;\n    border: none;\n}\n\n.new-game-screen .new-age-buttons .new-game-cpu {\n    background: var(--light-yellow);\n    box-shadow: inset 0px -8px 0px #CC8B13;\n}\n\n.new-game-screen .new-age-buttons .new-game-player {\n    background: var(--light-blue);\n    box-shadow: inset 0px -8px 0px #118C87;\n}\n\n.new-game-screen .new-age-buttons .new-game-cpu:hover {\n    background: var(--light-yellow-hover);\n}\n\n.new-game-screen .new-age-buttons .new-game-player:hover {\n    background: var(--light-blue-hover);\n}\n\n@media screen and (max-width: 600px) {\n    .new-game-screen .player-select {\n        width: 327px\n    }\n\n    .new-game-screen .options label {\n        width: 132px;\n    }\n\n    .new-game-screen .new-age-buttons button {\n        font-size: 16px;\n        line-height: 20px;\n        padding-top: 14px;\n        padding-bottom: 24px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/new_game.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;IAC5B,eAAe;IACf,OAAO;IACP,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iCAAiC;IACjC,iDAAiD;IACjD,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;IACpB,wBAAwB;IACxB,eAAe;IACf,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;IAC5B,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,0BAA0B;IAC1B,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,YAAY;IACZ,iCAAiC;AACrC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,+FAA+F;AACnG;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,eAAe;IACf,iBAAiB;IACjB,sBAAsB;IACtB,iBAAiB;IACjB,oBAAoB;IACpB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,+BAA+B;IAC/B,sCAAsC;AAC1C;;AAEA;IACI,6BAA6B;IAC7B,sCAAsC;AAC1C;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI;QACI;IACJ;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,eAAe;QACf,iBAAiB;QACjB,iBAAiB;QACjB,oBAAoB;IACxB;AACJ","sourcesContent":[".new-game-screen {\n    background: var(--dark-navy);\n    position: fixed;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: grid;\n    place-items: center;\n    transition: top .33s;\n    z-index: 3;\n}\n\n.new-game-screen .screen-content {\n    gap: 40px;\n}\n\n.new-game-screen .logo {\n    width: 72px;\n}\n\n.new-game-screen .player-select {\n    background: var(--semi-dark-navy);\n    box-shadow: inset 0px -8px 0px var(--pads-shadow);\n    border-radius: 15px;\n    width: 460px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 24px;\n    padding-bottom: 30px;\n}\n\n.new-game-screen .turn-feedback {\n    color: var(--silver);\n    font-family: outfit-bold;\n    font-size: 16px;\n    line-height: 20px;\n    letter-spacing: 1px;\n}\n\n.new-game-screen .options {\n    background: var(--dark-navy);\n    border-radius: 10px;\n    padding: 9px;\n    display: flex;\n    margin-top: 24px;\n    margin-bottom: 17px;\n}\n\n.new-game-screen .options label {\n    position: relative;\n    width: 200px;\n    height: 55px;\n    border-radius: 10px;\n    display: grid;\n    place-items: center;\n}\n\n.new-game-screen .options img {\n    width: 32px;\n    z-index: 200;\n    filter: var(--gray-filter);\n    transition: filter .33s;\n    pointer-events: none;\n}\n\n.new-game-screen .options input[type=\"radio\"] {\n    appearance: none;\n    width: 100%;\n    height: 100%;\n    border-radius: 10px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 100;\n    transition: background-color .33s;\n}\n\n.new-game-screen .options input[type=\"radio\"]:checked {\n    background: var(--silver);\n}\n\n.new-game-screen .options input[type=\"radio\"]:checked~img {\n    filter: invert(12%) sepia(15%) saturate(1567%) hue-rotate(158deg) brightness(92%) contrast(89%);\n}\n\n.new-game-screen .options input[type=\"radio\"]:not(:checked):hover {\n    background: var(--half-tone);\n}\n\n.new-game-screen .footnote {\n    color: var(--silver);\n    font-family: outfit;\n    line-height: 17px;\n    font-size: 14px;\n    letter-spacing: .88px;\n    opacity: 50%;\n}\n\n.new-game-screen .new-age-buttons {\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.new-game-screen .new-age-buttons button {\n    color: var(--dark-navy);\n    font-family: outfit-bold;\n    font-size: 20px;\n    line-height: 20px;\n    letter-spacing: 1.25px;\n    padding-top: 17px;\n    padding-bottom: 25px;\n    border-radius: 15px;\n    border: none;\n}\n\n.new-game-screen .new-age-buttons .new-game-cpu {\n    background: var(--light-yellow);\n    box-shadow: inset 0px -8px 0px #CC8B13;\n}\n\n.new-game-screen .new-age-buttons .new-game-player {\n    background: var(--light-blue);\n    box-shadow: inset 0px -8px 0px #118C87;\n}\n\n.new-game-screen .new-age-buttons .new-game-cpu:hover {\n    background: var(--light-yellow-hover);\n}\n\n.new-game-screen .new-age-buttons .new-game-player:hover {\n    background: var(--light-blue-hover);\n}\n\n@media screen and (max-width: 600px) {\n    .new-game-screen .player-select {\n        width: 327px\n    }\n\n    .new-game-screen .options label {\n        width: 132px;\n    }\n\n    .new-game-screen .new-age-buttons button {\n        font-size: 16px;\n        line-height: 20px;\n        padding-top: 14px;\n        padding-bottom: 24px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/css/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/restart.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/restart.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".restart-screen {\n    background: rgb(0, 0, 0, .5);\n    position: fixed;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    transition: top .33s;\n}\n\n.restart-screen .screen-content {\n    background: var(--dark-navy);\n    padding: 67px;\n    width: 100%;\n    gap: 30px;\n}\n\n.restart-screen h2 {\n    color: var(--silver);\n    font-family: outfit-bold;\n    font-size: 40px;\n    line-height: 50px;\n    letter-spacing: 2.5px;\n}\n\n.restart-screen .buttons {\n    display: flex;\n    gap: 16px;\n}\n\n@media screen and (max-width: 600px) {\n    .restart-screen h2 {\n        font-size: 24px;\n        line-height: 30px;\n        letter-spacing: 1.5px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/restart.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;IAC5B,eAAe;IACf,OAAO;IACP,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,WAAW;IACX,SAAS;AACb;;AAEA;IACI,oBAAoB;IACpB,wBAAwB;IACxB,eAAe;IACf,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI;QACI,eAAe;QACf,iBAAiB;QACjB,qBAAqB;IACzB;AACJ","sourcesContent":[".restart-screen {\n    background: rgb(0, 0, 0, .5);\n    position: fixed;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    transition: top .33s;\n}\n\n.restart-screen .screen-content {\n    background: var(--dark-navy);\n    padding: 67px;\n    width: 100%;\n    gap: 30px;\n}\n\n.restart-screen h2 {\n    color: var(--silver);\n    font-family: outfit-bold;\n    font-size: 40px;\n    line-height: 50px;\n    letter-spacing: 2.5px;\n}\n\n.restart-screen .buttons {\n    display: flex;\n    gap: 16px;\n}\n\n@media screen and (max-width: 600px) {\n    .restart-screen h2 {\n        font-size: 24px;\n        line-height: 30px;\n        letter-spacing: 1.5px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Outfit-Medium.ttf */ "./src/assets/fonts/Outfit-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Outfit-Bold.ttf */ "./src/assets/fonts/Outfit-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: outfit;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: outfit-bold;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n:root {\n    --dark-navy: #1A2A33;\n    --semi-dark-navy: #1F3641;\n    --pads-shadow: #10212A;\n    --silver: #A8BFC9;\n    --silver-hover: #DBE8ED;\n    --gray: #A8A8A8;\n    --light-yellow: #F2B137;\n    --light-blue: #31C3BD;\n    --half-tone: #A8BFC90D;\n    --light-yellow-hover: #FFC860;\n    --light-blue-hover: #65E9E4;\n    --gray-filter: invert(56%) sepia(0%) saturate(5236%) hue-rotate(149deg) brightness(118%) contrast(97%);\n}\n\nbody {\n    background: var(--dark-navy);\n}\n\nbutton {\n    transition: background-color .33s, transform .33s;\n}\n\nbutton:active {\n    transform: scale(.99);\n}\n\n.screen-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.debutton {\n    color: var(--dark-navy);\n    border-radius: 10px;\n    border: none;\n    padding: 17px;\n    padding-top: 15px;\n    font-family: outfit-bold;\n    font-size: 16px;\n    line-height: 20px;\n    letter-spacing: 1px;\n    width: max-content;\n    transition: background-color .33s;\n}\n\n.debutton.cancel-button {\n    background: var(--silver);\n    box-shadow: inset 0px -4px 0px #6B8997;\n}\n\n.debutton.continue-button {\n    background: var(--light-yellow);\n    box-shadow: inset 0px -4px 0px #CC8B13;\n}\n\n.debutton.cancel-button:hover {\n    background: var(--silver-hover);\n}\n\n.debutton.continue-button:hover {\n    background: var(--light-yellow-hover);\n}\n\n.hidden {\n    top: -100%;\n}\n\n.shown {\n    top: 0;\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,4CAA6C;AACjD;;AAEA;IACI,wBAAwB;IACxB,4CAA2C;AAC/C;;AAEA;IACI,oBAAoB;IACpB,yBAAyB;IACzB,sBAAsB;IACtB,iBAAiB;IACjB,uBAAuB;IACvB,eAAe;IACf,uBAAuB;IACvB,qBAAqB;IACrB,sBAAsB;IACtB,6BAA6B;IAC7B,2BAA2B;IAC3B,sGAAsG;AAC1G;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,iDAAiD;AACrD;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,wBAAwB;IACxB,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,yBAAyB;IACzB,sCAAsC;AAC1C;;AAEA;IACI,+BAA+B;IAC/B,sCAAsC;AAC1C;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,MAAM;AACV","sourcesContent":["*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: outfit;\n    src: url(\"../assets/fonts/Outfit-Medium.ttf\");\n}\n\n@font-face {\n    font-family: outfit-bold;\n    src: url(\"../assets/fonts/Outfit-Bold.ttf\");\n}\n\n:root {\n    --dark-navy: #1A2A33;\n    --semi-dark-navy: #1F3641;\n    --pads-shadow: #10212A;\n    --silver: #A8BFC9;\n    --silver-hover: #DBE8ED;\n    --gray: #A8A8A8;\n    --light-yellow: #F2B137;\n    --light-blue: #31C3BD;\n    --half-tone: #A8BFC90D;\n    --light-yellow-hover: #FFC860;\n    --light-blue-hover: #65E9E4;\n    --gray-filter: invert(56%) sepia(0%) saturate(5236%) hue-rotate(149deg) brightness(118%) contrast(97%);\n}\n\nbody {\n    background: var(--dark-navy);\n}\n\nbutton {\n    transition: background-color .33s, transform .33s;\n}\n\nbutton:active {\n    transform: scale(.99);\n}\n\n.screen-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.debutton {\n    color: var(--dark-navy);\n    border-radius: 10px;\n    border: none;\n    padding: 17px;\n    padding-top: 15px;\n    font-family: outfit-bold;\n    font-size: 16px;\n    line-height: 20px;\n    letter-spacing: 1px;\n    width: max-content;\n    transition: background-color .33s;\n}\n\n.debutton.cancel-button {\n    background: var(--silver);\n    box-shadow: inset 0px -4px 0px #6B8997;\n}\n\n.debutton.continue-button {\n    background: var(--light-yellow);\n    box-shadow: inset 0px -4px 0px #CC8B13;\n}\n\n.debutton.cancel-button:hover {\n    background: var(--silver-hover);\n}\n\n.debutton.continue-button:hover {\n    background: var(--light-yellow-hover);\n}\n\n.hidden {\n    top: -100%;\n}\n\n.shown {\n    top: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/board.css":
/*!***************************!*\
  !*** ./src/css/board.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./board.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/board.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/game_over.css":
/*!*******************************!*\
  !*** ./src/css/game_over.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_game_over_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./game_over.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/game_over.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_game_over_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_game_over_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_game_over_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_game_over_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/levels.css":
/*!****************************!*\
  !*** ./src/css/levels.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_levels_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./levels.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/levels.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_levels_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_levels_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_levels_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_levels_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/new_game.css":
/*!******************************!*\
  !*** ./src/css/new_game.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_new_game_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./new_game.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/new_game.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_new_game_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_new_game_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_new_game_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_new_game_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/restart.css":
/*!*****************************!*\
  !*** ./src/css/restart.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_restart_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./restart.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/restart.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_restart_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_restart_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_restart_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_restart_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/cell.js":
/*!*********************!*\
  !*** ./src/cell.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "change_hover_state": () => (/* binding */ change_hover_state),
/* harmony export */   "clean_board": () => (/* binding */ clean_board),
/* harmony export */   "empty": () => (/* binding */ empty),
/* harmony export */   "pick_best_cell": () => (/* binding */ pick_best_cell),
/* harmony export */   "pick_random_cell": () => (/* binding */ pick_random_cell)
/* harmony export */ });
/* harmony import */ var _minmax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minmax.js */ "./src/minmax.js");


function pick_random_cell(board, cells) {
    const indices = (0,_minmax_js__WEBPACK_IMPORTED_MODULE_0__.empty_spots)(board);
    const index = indices[~~(Math.random() * indices.length)];

    return cells.find(cell => cell.dataset.index == index);
}

function pick_best_cell(board, cells, player1) {
    const player = player1.symbol == 'x' ? 'o' : 'x';
    const human = player1.symbol == 'x' ? 'x' : 'o';
    const computer = player1.symbol == 'x' ? 'o' : 'x'; 
    const move = (0,_minmax_js__WEBPACK_IMPORTED_MODULE_0__.minmax)(board, player, human, computer);

    return cells.find(cell => cell.dataset.index == move.index);
}

function clean_board(cells) {
    cells.forEach(cell => cell.className = "pad");
}

function change_hover_state(cells, xTurn) {
    cells.forEach(cell => {
        if (!empty(cell)) {
            cell.classList.remove("o-hover");
            cell.classList.remove("x-hover");
        }
        else {
            cell.classList.add(xTurn ? "x-hover" : "o-hover");
            cell.classList.remove(xTurn ? "o-hover" : "x-hover");
        }
    });
}

function empty(cell) {
    return !cell.classList.contains('x') && !cell.classList.contains('o');
}

/***/ }),

/***/ "./src/imports.js":
/*!************************!*\
  !*** ./src/imports.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/favicon-32x32.png */ "./src/assets/favicon-32x32.png");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_icon_x_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icon-x.svg */ "./src/assets/icon-x.svg");
/* harmony import */ var _assets_icon_o_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icon-o.svg */ "./src/assets/icon-o.svg");
/* harmony import */ var _assets_icon_x_black_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icon-x-black.svg */ "./src/assets/icon-x-black.svg");
/* harmony import */ var _assets_icon_o_black_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icon-o-black.svg */ "./src/assets/icon-o-black.svg");
/* harmony import */ var _assets_icon_x_outline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icon-x-outline.svg */ "./src/assets/icon-x-outline.svg");
/* harmony import */ var _assets_icon_o_outline_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/icon-o-outline.svg */ "./src/assets/icon-o-outline.svg");
/* harmony import */ var _assets_icon_restart_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/icon-restart.svg */ "./src/assets/icon-restart.svg");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_new_game_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./css/new_game.css */ "./src/css/new_game.css");
/* harmony import */ var _css_board_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./css/board.css */ "./src/css/board.css");
/* harmony import */ var _css_game_over_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./css/game_over.css */ "./src/css/game_over.css");
/* harmony import */ var _css_restart_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./css/restart.css */ "./src/css/restart.css");
/* harmony import */ var _css_levels_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./css/levels.css */ "./src/css/levels.css");


















/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assign_symbols": () => (/* binding */ assign_symbols),
/* harmony export */   "get_who_won": () => (/* binding */ get_who_won),
/* harmony export */   "handle_screen": () => (/* binding */ handle_screen),
/* harmony export */   "update_results": () => (/* binding */ update_results)
/* harmony export */ });
function update_results(player1, player2, ties, xResults, oResults, tiesResults) {
    const xNumber = xResults.querySelector(".result-number");   
    const oNumber = oResults.querySelector(".result-number");    
    const tiesNumber = tiesResults.querySelector(".result-number");

    tiesNumber.innerText = ties;
    xNumber.innerText = player1.symbol == 'x' ? player1.wins : player2.wins;
    oNumber.innerText = player1.symbol == 'x' ? player2.wins : player1.wins;
}

function handle_screen(show, screen) {
    screen.classList.add(show ? "shown" : "hidden");
    screen.classList.remove(show ? "hidden" : "shown");
}

function get_who_won(winner, player1, ai) {
    if (ai) {
        if (winner == player1.symbol)
            return "YOU WON!";
        else
            return "OH NO, YOU LOST...";
    }
    else
        return `PLAYER ${winner == player1.symbol ? '1' : '2'} WINS!`;
}

function assign_symbols(player1, player2, choices) {
    const label = choices.filter(choice => choice.checked)[0].dataset.label;

    if (label == 'x') {
        player1.symbol = 'x';
        player2.symbol = 'o';
    }
    else {
        player1.symbol = 'o';
        player2.symbol = 'x';
    }
}

/***/ }),

/***/ "./src/minmax.js":
/*!***********************!*\
  !*** ./src/minmax.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "empty_spots": () => (/* binding */ empty_spots),
/* harmony export */   "get_winner": () => (/* binding */ get_winner),
/* harmony export */   "minmax": () => (/* binding */ minmax)
/* harmony export */ });
function empty_spots(board) {
    return board
    .map((cell, index) => cell === null ? index : null)
    .filter(cell => cell !== null);
}

function get_winner(state) {
    const combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combi of combinations) {
        if (combi.every(index => state[index] == 'x'))
            return 'x';
        else if (combi.every(index => state[index] == 'o'))
            return 'o';
    }
    return null;
}

function minmax(currentBoard, player, human, computer) {
    const emptySpots = empty_spots(currentBoard);
    const winner = get_winner(currentBoard);
    const moves = [];
    const cond = player == computer ? (x, y) => x > y : (x, y) => x < y;
    let bestoScore, bestoMove;

    if (winner == human)
        return { score: -10 };
    else if (winner == computer)
        return { score: 10 };
    else if (!emptySpots.length)
        return { score: 0 };

    for (let i = 0; i < emptySpots.length; i++) {
        const move = {};
        let result;

        move.index = emptySpots[i];
        currentBoard[emptySpots[i]] = player;    
        
        if (player == computer)
            result = minmax(currentBoard, human, human, computer);
        else
            result = minmax(currentBoard, computer, human, computer);

        move.score = result.score;
        currentBoard[emptySpots[i]] = null;
        moves.push(move);
    }

    bestoScore = player == computer ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;

    for (let i = 0; i < moves.length; i++)
        if (cond(moves[i].score, bestoScore)) {
            bestoScore = moves[i].score
            bestoMove = i;
        }
    return moves[bestoMove];
}

/***/ }),

/***/ "./src/assets/favicon-32x32.png":
/*!**************************************!*\
  !*** ./src/assets/favicon-32x32.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "favicon-32x32.png";

/***/ }),

/***/ "./src/assets/fonts/Outfit-Bold.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Outfit-Bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Outfit-Bold.ttf";

/***/ }),

/***/ "./src/assets/fonts/Outfit-Medium.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Outfit-Medium.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Outfit-Medium.ttf";

/***/ }),

/***/ "./src/assets/icon-o-black.svg":
/*!*************************************!*\
  !*** ./src/assets/icon-o-black.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-o-black.svg";

/***/ }),

/***/ "./src/assets/icon-o-outline.svg":
/*!***************************************!*\
  !*** ./src/assets/icon-o-outline.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-o-outline.svg";

/***/ }),

/***/ "./src/assets/icon-o.svg":
/*!*******************************!*\
  !*** ./src/assets/icon-o.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-o.svg";

/***/ }),

/***/ "./src/assets/icon-restart.svg":
/*!*************************************!*\
  !*** ./src/assets/icon-restart.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-restart.svg";

/***/ }),

/***/ "./src/assets/icon-x-black.svg":
/*!*************************************!*\
  !*** ./src/assets/icon-x-black.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-x-black.svg";

/***/ }),

/***/ "./src/assets/icon-x-outline.svg":
/*!***************************************!*\
  !*** ./src/assets/icon-x-outline.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-x-outline.svg";

/***/ }),

/***/ "./src/assets/icon-x.svg":
/*!*******************************!*\
  !*** ./src/assets/icon-x.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-x.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _imports_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imports.js */ "./src/imports.js");
/* harmony import */ var _interface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface.js */ "./src/interface.js");
/* harmony import */ var _cell_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cell.js */ "./src/cell.js");
/* harmony import */ var _minmax_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minmax.js */ "./src/minmax.js");





const newGameScreen = document.querySelector(".new-game-screen");
const newGameCPU = newGameScreen.querySelector(".new-game-cpu");
const newGamePlayer = newGameScreen.querySelector(".new-game-player");
const choices = [...newGameScreen.querySelectorAll(".options input[type='radio']")];

const gameOverScreen = document.querySelector(".game-over-screen");
const gameOverScreenContent = gameOverScreen.querySelector(".screen-content");
const whoWon = gameOverScreen.querySelector(".who-won");
const winnerImage = gameOverScreen.querySelector(".winner-results img");
const quit = gameOverScreen.querySelector(".cancel-button");
const nextRound = gameOverScreen.querySelector(".continue-button");
const roundMessage = gameOverScreen.querySelector(".winner-results h2");
const winnerOImage = "./icon-o.svg";
const winnerXImage = "./icon-x.svg";

const boardScreen = document.querySelector(".game-board-screen");
const cells = [...boardScreen.querySelectorAll(".pad")];
const xResults  = boardScreen.querySelector(".player-x-results");
const oResults = boardScreen.querySelector(".player-o-results");
const tiesResults = boardScreen.querySelector(".results .ties");
const reset = boardScreen.querySelector(".reset");
const turnImage = boardScreen.querySelector(".turn img");
const block = boardScreen.querySelector(".blocker");
const xTurnImage = "./icon-x-black.svg";
const oTurnImage = "./icon-o-black.svg";

const resetScreen = document.querySelector(".restart-screen");
const cancelButton = resetScreen.querySelector(".cancel-button");
const continueButton = resetScreen.querySelector(".continue-button");

const levelScreen = document.querySelector(".level-screen");
const easy = levelScreen.querySelector(".easy");
const medium = levelScreen.querySelector(".medium");
const hard = levelScreen.querySelector(".hard");

let player1, player2, ties, xTurn, ai, boardState, timeours, level;

newGameCPU.addEventListener("click", () => {
    ai = true;
    xTurn = true;
    (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.handle_screen)(false, newGameScreen);
});

newGamePlayer.addEventListener("click", () => {
    ai = false;
    init();
    (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.handle_screen)(false, newGameScreen);
    (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.handle_screen)(false, levelScreen);
});

reset.addEventListener("click", () => {
    (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.handle_screen)(true, resetScreen);
});

cancelButton.addEventListener("click", () => (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.handle_screen)(false, resetScreen));

continueButton.addEventListener("click", () => {
    reset_board();
    (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.handle_screen)(false, resetScreen);
});

easy.addEventListener("click", () => {
    init();
    (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.handle_screen)(false, levelScreen);
    level = "easy";
});

medium.addEventListener("click", () => {
    init();
    (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.handle_screen)(false, levelScreen);
    level = "medium";
});

hard.addEventListener("click", () => {
    init();
    (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.handle_screen)(false, levelScreen);
    level = "hard";
});

quit.addEventListener("click", () => {
    init();
    reset_board();
    (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.handle_screen)(false, gameOverScreen);
    (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.handle_screen)(true, levelScreen);
    (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.handle_screen)(true, newGameScreen);
});

nextRound.addEventListener("click", () => {
    (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.handle_screen)(false, gameOverScreen);
    reset_board();
});

cells.forEach(cell => cell.addEventListener("click", () => {
    if (!(0,_cell_js__WEBPACK_IMPORTED_MODULE_2__.empty)(cell))
        return;

    cell.classList.add(xTurn ? 'x' : 'o');
    boardState[cell.dataset.index] = xTurn ? 'x' : 'o';
    xTurn = !xTurn;
    (0,_cell_js__WEBPACK_IMPORTED_MODULE_2__.change_hover_state)(cells, xTurn);
    turnImage.src = xTurn ? xTurnImage : oTurnImage;
    rindou();
    check_for_game_over();
}));

function init() {
    const xLabel = xResults.querySelector(".player-label");
    const oLabel = oResults.querySelector(".player-label");

    player1 = { wins: 0 };
    player2 = { wins: 0 };
    ties = 0;
    boardState = new Array(9).fill(null);
    xTurn = true;
    (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.assign_symbols)(player1, player2, choices);
    if (ai) {
        xLabel.innerText = `X (${player1.symbol == 'x' ? "YOU" : "CPU"})`;
        oLabel.innerText = `O (${player1.symbol == 'x' ? "CPU" : "YOU"})`;
    }
    else {
        xLabel.innerText = `X (${player1.symbol == 'x' ? "P1" : "P2"})`;
        oLabel.innerText = `O (${player1.symbol == 'x' ? "P2" : "P1"})`;
    }
    (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.update_results)(player1, player2, ties, xResults, oResults, tiesResults);
    (0,_cell_js__WEBPACK_IMPORTED_MODULE_2__.clean_board)(cells);
    (0,_cell_js__WEBPACK_IMPORTED_MODULE_2__.change_hover_state)(cells, xTurn);
    rindou();
}

function reset_board() {    
    xTurn = true;
    (0,_cell_js__WEBPACK_IMPORTED_MODULE_2__.clean_board)(cells);
    (0,_cell_js__WEBPACK_IMPORTED_MODULE_2__.change_hover_state)(cells, xTurn);
    boardState = new Array(9).fill(null);
    turnImage.src = xTurn ? xTurnImage : oTurnImage;
    rindou();
}

function rindou() {
    if (!ai)
        return;

    if (player1.symbol == 'x' && xTurn || player1.symbol == 'o' && !xTurn)
        return;

    block.classList.remove("inactive-block");
    block.classList.add("active-block");
    timeours = setTimeout(() => {
        let cell;

        if (level == "easy")
            cell = (0,_cell_js__WEBPACK_IMPORTED_MODULE_2__.pick_random_cell)(boardState, cells);
        else if (level == "medium") {
            if (Math.random() < .75)
                cell = (0,_cell_js__WEBPACK_IMPORTED_MODULE_2__.pick_random_cell)(boardState, cells);
            else
                cell = (0,_cell_js__WEBPACK_IMPORTED_MODULE_2__.pick_best_cell)(boardState, cells, player1);
        }
        else 
            cell = (0,_cell_js__WEBPACK_IMPORTED_MODULE_2__.pick_best_cell)(boardState, cells, player1);

        cell.click();
        block.classList.remove("active-block");
        block.classList.add("inactive-block");
    }, ~~(Math.random() * 700 + 500));
}

function check_for_game_over() {
    const winner = (0,_minmax_js__WEBPACK_IMPORTED_MODULE_3__.get_winner)(boardState);
    const cellsLeft = cells.filter(cell => (0,_cell_js__WEBPACK_IMPORTED_MODULE_2__.empty)(cell)).length;
 
    if (winner || !cellsLeft) {
        clearTimeout(timeours);
        block.classList.remove("active-block");
        block.classList.add("inactive-block");

        whoWon.innerText = (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.get_who_won)(winner, player1, ai);
        (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.handle_screen)(true, gameOverScreen);
        roundMessage.innerText = "TAKES THE ROUND";
 
        if (player1.symbol == winner)
            player1.wins++;
        else if (player2.symbol == winner)
            player2.wins++;
        else
            ties++;
        
        (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.update_results)(player1, player2, ties, xResults, oResults, tiesResults);

        if (winner == 'x') {
            gameOverScreenContent.classList.remove("o-winner-result");
            gameOverScreenContent.classList.remove("no-winner-result");
            gameOverScreenContent.classList.add("x-winner-result");
            winnerImage.src = winnerXImage;
        }
        else if (winner == 'o') {
            gameOverScreenContent.classList.remove("x-winner-result");
            gameOverScreenContent.classList.remove("no-winner-result");
            gameOverScreenContent.classList.add("o-winner-result");
            winnerImage.src = winnerOImage;
        }
        else {
            gameOverScreenContent.classList.remove("x-winner-result");
            gameOverScreenContent.classList.remove("o-winner-result");
            gameOverScreenContent.classList.add("no-winner-result");
            roundMessage.innerText = "ROUND TIED";
        }
    }
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map