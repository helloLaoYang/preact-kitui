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
     * dialog components
     */
    var preact_1 = require("preact");
    var DialogComponent = /** @class */ (function (_super) {
        __extends(DialogComponent, _super);
        function DialogComponent(props) {
            var _this = _super.call(this, props) || this;
            _this.closedHandler = function () {
                var onClosed = _this.props.onClosed;
                if (onClosed instanceof Function) {
                    onClosed();
                }
            };
            _this.clickButtonHandler = function (value) {
                var onConfirm = _this.props.onConfirm;
                if (onConfirm instanceof Function) {
                    onConfirm(value);
                }
                _this.closedHandler();
            };
            _this.confirmClickHandler = function () {
                _this.clickButtonHandler();
            };
            _this.cancelClickHandler = function () {
                var onCancel = _this.props.onCancel;
                if (onCancel instanceof Function) {
                    onCancel();
                }
                _this.closedHandler();
            };
            return _this;
        }
        DialogComponent.prototype.render = function () {
            var _this = this;
            var _a = this.props, title = _a.title, content = _a.content, _b = _a.align, align = _b === void 0 ? 'left' : _b, imageUrl = _a.imageUrl, showCancelButton = _a.showCancelButton, _c = _a.showConfirmButton, showConfirmButton = _c === void 0 ? true : _c, cancelButtonText = _a.cancelButtonText, confirmButtonText = _a.confirmButtonText, buttonList = _a.buttonList;
            return (preact_1.h("div", null,
                preact_1.h("div", { className: "kit-dialog__transparent" }),
                preact_1.h("div", { className: "kit-dialog" },
                    preact_1.h("div", { className: "kit-dialog__hd" },
                        imageUrl
                            ? (preact_1.h("div", { className: "kit-dialog__media" }))
                            : null,
                        title
                            ? (preact_1.h("div", { className: "kit-dialog__title" }, title))
                            : null,
                        content
                            ? (preact_1.h("div", { className: [
                                    'kit-dialog__content',
                                    "kit-dialog__content--align-" + align,
                                ].join(' ') }, content))
                            : null),
                    showCancelButton || showConfirmButton || (buttonList && buttonList.length)
                        ? (preact_1.h("div", { className: "kit-dialog__bd" }, (buttonList && buttonList.length)
                            ? (buttonList.map(function (_a) {
                                var label = _a.label, value = _a.value, buttonListClassName = _a.className;
                                return (preact_1.h("div", { className: [
                                        'kit-dialog__button',
                                        'kit-dialog__button--type-confirm',
                                        buttonListClassName,
                                    ].filter(function (_) { return _; }).join(' '), onClick: _this.clickButtonHandler.bind(_this, value), key: value }, label));
                            }))
                            : (preact_1.h("div", { className: "kit-dialog__button-group" },
                                showConfirmButton
                                    ? (preact_1.h("div", { className: "kit-dialog__button kit-dialog__button--type-confirm", onClick: this.confirmClickHandler }, confirmButtonText || '确定'))
                                    : null,
                                showCancelButton
                                    ? (preact_1.h("div", { className: "kit-dialog__button", onClick: this.cancelClickHandler }, cancelButtonText || '取消'))
                                    : null))))
                        : null)));
        };
        return DialogComponent;
    }(preact_1.Component));
    var instance;
    var removeInstance = function () {
        if (instance) {
            document.body.removeChild(instance);
            instance = undefined;
        }
    };
    var Dialog = function (options) {
        instance = document.createElement('div');
        preact_1.render(preact_1.h(DialogComponent, __assign({}, options, { onClosed: removeInstance })), instance);
        document.body.appendChild(instance);
    };
    Dialog.destory = removeInstance;
    exports.default = Dialog;
});
//# sourceMappingURL=Dialog.js.map