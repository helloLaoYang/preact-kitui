/**
 * component entry
 * @upgrade
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Dialog/Dialog"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Dialog = void 0;
    var Dialog_1 = require("./Dialog/Dialog");
    Object.defineProperty(exports, "Dialog", { enumerable: true, get: function () { return __importDefault(Dialog_1).default; } });
});
//# sourceMappingURL=index.js.map