import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let JustAlertComponent = class JustAlertComponent {
    constructor() { }
    ngOnInit() {
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
export { JustAlertComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVzdC1hbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYWxlcnQtbWVzc2FnZS8iLCJzb3VyY2VzIjpbImxpYi9qdXN0LWFsZXJ0L2p1c3QtYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQUU3QixnQkFBZSxDQUFDO0lBTWhCLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztTQUN2QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7U0FDdkI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDO1NBQzlCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztTQUNwQjtJQUNILENBQUM7Q0FDRixDQUFBO0FBdEJVO0lBQVIsS0FBSyxFQUFFO2dEQUFXO0FBQ1Y7SUFBUixLQUFLLEVBQUU7aURBQVk7QUFDWDtJQUFSLEtBQUssRUFBRTtnREFBVztBQUNWO0lBQVIsS0FBSyxFQUFFO2dEQUFXO0FBQ1Y7SUFBUixLQUFLLEVBQUU7b0RBQWU7QUFQWixrQkFBa0I7SUFMOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixpZ0JBQTBDOztLQUUzQyxDQUFDO0dBQ1csa0JBQWtCLENBeUI5QjtTQXpCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWp1c3QtYWxlcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vanVzdC1hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2p1c3QtYWxlcnQuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSnVzdEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGV4dENvbG9yOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgQElucHV0KCkgbW9kZTogYW55O1xuICBASW5wdXQoKSBjbG9zZTogYW55O1xuICBASW5wdXQoKSBib2xkOiBhbnk7XG4gIEBJbnB1dCgpIHRleHQ6IGFueTtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGFueTtcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICB0aGlzLm1vZGUgPSAnZ3JlZW4nO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAncHJpbWFyeScpIHtcbiAgICAgIHRoaXMubW9kZSA9ICcjMGQ0N2ExJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ2RhbmdlcicpIHtcbiAgICAgIHRoaXMubW9kZSA9ICdjcmltc29uJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ3dhcm5pbmcnKSB7XG4gICAgICB0aGlzLm1vZGUgPSAnI2ZmOTgwMCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdpbmZvJykge1xuICAgICAgdGhpcy5tb2RlID0gJ2Nvcm5mbG93ZXJibHVlJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RlID0gJ3doaXRlJztcbiAgICAgIHRoaXMudGV4dENvbG9yID0gJ2JsYWNrJztcbiAgICAgIHRoaXMuYm9sZCA9ICd0cnVlJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==