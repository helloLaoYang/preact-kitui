var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./index.css", "./Dialog"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    /**
     * Dialog component entry
     * @author hellolaoyang<aaron@codonas.cn>
     * @upgrade
     */
    require("./index.css");
    var Dialog_1 = require("./Dialog");
    Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(Dialog_1).default; } });
});
//# sourceMappingURL=index.js.map