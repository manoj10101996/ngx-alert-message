import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
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
export { AlertComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWFsZXJ0LW1lc3NhZ2UvIiwic291cmNlcyI6WyJsaWIvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RDtJQUVFO0lBQWUsQ0FBQztJQU1oQixpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUNyQjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7U0FDdkI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztTQUN2QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBckJRO1FBQVIsS0FBSyxFQUFFO2dEQUFXO0lBQ1Y7UUFBUixLQUFLLEVBQUU7aURBQVk7SUFDWDtRQUFSLEtBQUssRUFBRTtnREFBVztJQUNWO1FBQVIsS0FBSyxFQUFFO2dEQUFXO0lBQ1Y7UUFBUixLQUFLLEVBQUU7b0RBQWU7SUFQWixjQUFjO1FBTDFCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLDhZQUFxQzs7U0FFdEMsQ0FBQztPQUNXLGNBQWMsQ0F5QjFCO0lBQUQscUJBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXpCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1hbGVydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGV4dENvbG9yOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgQElucHV0KCkgbW9kZTogYW55O1xuICBASW5wdXQoKSBjbG9zZTogYW55O1xuICBASW5wdXQoKSBib2xkOiBhbnk7XG4gIEBJbnB1dCgpIHRleHQ6IGFueTtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGFueTtcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICB0aGlzLm1vZGUgPSAnZ3JlZW4nO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAncHJpbWFyeScpIHtcbiAgICAgIHRoaXMubW9kZSA9ICcjMGQ0N2ExJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ2RhbmdlcicpIHtcbiAgICAgIHRoaXMubW9kZSA9ICdjcmltc29uJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ3dhcm5pbmcnKSB7XG4gICAgICB0aGlzLm1vZGUgPSAnI2ZmOTgwMCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdpbmZvJykge1xuICAgICAgdGhpcy5tb2RlID0gJ2Nvcm5mbG93ZXJibHVlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RlID0gJ3doaXRlJztcbiAgICAgIHRoaXMudGV4dENvbG9yID0gJ2JsYWNrJztcbiAgICAgIHRoaXMuYm9sZCA9ICd0cnVlJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==