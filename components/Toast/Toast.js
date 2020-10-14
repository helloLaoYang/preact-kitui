var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "preact"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * 反馈弹窗 Toast
     * Toast用于显示操作结果，同时不打断用户的行为，默认持续1.5秒。注意文案统一，避免出现「成功」「失败」「错误」等，这些文字容易让用户疑惑和挫败。
     * @author hellolaoyang<aaron@codonas.cn>
     * @date 2020年09月28日14:29:35
     * @upgrade
     */
    var preact_1 = require("preact");
    // 真实组件
    var ToastComponent = /** @class */ (function (_super) {
        __extends(ToastComponent, _super);
        function ToastComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ToastComponent.prototype.render = function () {
            return (preact_1.h("div", { className: "kit-toast" }));
        };
        return ToastComponent;
    }(preact_1.Component));
    // 全局Toast实例
    var instance;
    // 移除实例
    var removeIntance = function () {
        if (instance) {
            document.body.removeChild(instance);
            instance = undefined;
        }
    };
    // 创建实例
    var Toast = function (options) {
        removeIntance();
        instance = document.createElement('div');
        preact_1.render(preact_1.h(ToastComponent, __assign({}, options, { onClosed: removeIntance })), instance);
        document.body.appendChild(instance);
    };
    // 主动移除实例
    Toast.destory = removeIntance;
    exports.default = Toast;
});
//# sourceMappingURL=Toast.js.map