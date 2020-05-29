import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, Input, NgModule } from '@angular/core';

var NgxAlertMessageService = /** @class */ (function () {
    function NgxAlertMessageService() {
    }
    NgxAlertMessageService.ɵprov = ɵɵdefineInjectable({ factory: function NgxAlertMessageService_Factory() { return new NgxAlertMessageService(); }, token: NgxAlertMessageService, providedIn: "root" });
    NgxAlertMessageService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], NgxAlertMessageService);
    return NgxAlertMessageService;
}());

var NgxAlertMessageComponent = /** @class */ (function () {
    function NgxAlertMessageComponent() {
    }
    NgxAlertMessageComponent.prototype.ngOnInit = function () {
    };
    NgxAlertMessageComponent = __decorate([
        Component({
            selector: 'ngx-alert-message',
            template: "\n    <p>\n      ngx-alert-message works!\n    </p>\n  "
        })
    ], NgxAlertMessageComponent);
    return NgxAlertMessageComponent;
}());

var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.ngOnInit = function () {
        if (this.mode === 'success') {
            this.mode = 'green';
        }
        else if (this.mode === 'primary') {
            this.mode = '#0d47a1';
        }
        else if (this.mode === 'danger') {
            this.mode = 'crimson';
        }
        else if (this.mode === 'warning') {
            this.mode = '#ff9800';
        }
        else if (this.mode === 'info') {
            this.mode = 'cornflowerblue';
        }
        else {
            this.mode = 'white';
            this.textColor = 'black';
            this.bold = 'true';
        }
    };
    __decorate([
        Input()
    ], AlertComponent.prototype, "mode", void 0);
    __decorate([
        Input()
    ], AlertComponent.prototype, "close", void 0);
    __decorate([
        Input()
    ], AlertComponent.prototype, "bold", void 0);
    __decorate([
        Input()
    ], AlertComponent.prototype, "text", void 0);
    __decorate([
        Input()
    ], AlertComponent.prototype, "disabled", void 0);
    AlertComponent = __decorate([
        Component({
            selector: 'ngx-alert',
            template: "<div\n  class=\"alert-bar-ngx\"\n  [style.backgroundColor]=\"mode\"\n  [style.color]=\"textColor\"\n  [style.fontWeight]=\"bold === 'true' ? 'bold' : '100'\"\n  [style.opacity]=\"disabled === 'true' ? '0.5' : '1'\"\n  [style.cursor]=\"disabled === 'true' ? 'not-allowed' : 'pointer'\"\n>\n  <span class=\"closeIcon\" [hidden]=\"close === 'false'\">&times;</span>\n  {{ text }}\n</div>\n",
            styles: [".alert-bar-ngx{margin:.625rem 0;padding:.6125rem .8125rem;color:#fff;border-radius:.5125rem;box-shadow:0 0 5px 5px #f5f5f5}.closeIcon{float:right;cursor:pointer}.just-close{width:5%;font-weight:bolder;background-color:#dc143c;color:#fff;border-radius:0 5px 5px 0;padding:5px;display:flex;align-items:center;text-align:center}.just-content{width:95%;padding:5px}.just-container{display:flex;border-radius:9px;border:1px solid #dc143c}"]
        })
    ], AlertComponent);
    return AlertComponent;
}());

var JustAlertComponent = /** @class */ (function () {
    function JustAlertComponent() {
    }
    JustAlertComponent.prototype.ngOnInit = function () {
        if (this.mode === 'success') {
            this.mode = 'green';
        }
        else if (this.mode === 'primary') {
            this.mode = '#0d47a1';
        }
        else if (this.mode === 'danger') {
            this.mode = 'crimson';
        }
        else if (this.mode === 'warning') {
            this.mode = '#ff9800';
        }
        else if (this.mode === 'info') {
            this.mode = 'cornflowerblue';
        }
        else {
            this.mode = 'white';
            this.textColor = 'black';
            this.bold = 'true';
        }
    };
    __decorate([
        Input()
    ], JustAlertComponent.prototype, "mode", void 0);
    __decorate([
        Input()
    ], JustAlertComponent.prototype, "close", void 0);
    __decorate([
        Input()
    ], JustAlertComponent.prototype, "bold", void 0);
    __decorate([
        Input()
    ], JustAlertComponent.prototype, "text", void 0);
    __decorate([
        Input()
    ], JustAlertComponent.prototype, "disabled", void 0);
    JustAlertComponent = __decorate([
        Component({
            selector: 'ngx-just-alert',
            template: "<div\n  class=\"just-container\"\n  [style.border]=\"'1px solid ' + mode\"\n  [style.color]=\"mode\"\n  [style.fontWeight]=\"bold === 'true' ? 'bold' : '100'\"\n  [style.opacity]=\"disabled === 'true' ? '0.5' : '1'\"\n  [style.cursor]=\"disabled === 'true' ? 'not-allowed' : 'pointer'\"\n>\n  <div class=\"just-content\">\n    {{ text }}\n  </div>\n  <div\n    class=\"just-close\"\n    [style.backgroundColor]=\"mode\"\n    [style.color]=\"'white'\"\n  >\n    <span>&times;</span>\n  </div>\n</div>\n",
            styles: [".just-close{width:6%;font-weight:bolder;text-align:center;background-color:#dc143c;color:#fff;border-radius:0 5px 5px 0;padding:0;display:grid;align-items:center}.just-content{width:95%;padding:.6125rem .8125rem}.just-container{display:flex;border-radius:.5125rem;border:1px solid #dc143c;margin:.625rem 0;color:#fff;box-shadow:0 0 5px 5px #f5f5f5}"]
        })
    ], JustAlertComponent);
    return JustAlertComponent;
}());

var NgxAlertMessageModule = /** @class */ (function () {
    function NgxAlertMessageModule() {
    }
    NgxAlertMessageModule = __decorate([
        NgModule({
            declarations: [NgxAlertMessageComponent, AlertComponent, JustAlertComponent],
            imports: [],
            exports: [NgxAlertMessageComponent, AlertComponent, JustAlertComponent],
        })
    ], NgxAlertMessageModule);
    return NgxAlertMessageModule;
}());

/*
 * Public API Surface of ngx-alert-message
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxAlertMessageComponent, NgxAlertMessageModule, NgxAlertMessageService, AlertComponent as ɵa, JustAlertComponent as ɵb };
//# sourceMappingURL=ngx-alert-message.js.map
