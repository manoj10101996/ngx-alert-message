import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
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
export { JustAlertComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVzdC1hbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYWxlcnQtbWVzc2FnZS8iLCJzb3VyY2VzIjpbImxpYi9qdXN0LWFsZXJ0L2p1c3QtYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RDtJQUVFO0lBQWUsQ0FBQztJQU1oQixxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUNyQjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7U0FDdkI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztTQUN2QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBckJRO1FBQVIsS0FBSyxFQUFFO29EQUFXO0lBQ1Y7UUFBUixLQUFLLEVBQUU7cURBQVk7SUFDWDtRQUFSLEtBQUssRUFBRTtvREFBVztJQUNWO1FBQVIsS0FBSyxFQUFFO29EQUFXO0lBQ1Y7UUFBUixLQUFLLEVBQUU7d0RBQWU7SUFQWixrQkFBa0I7UUFMOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixpZ0JBQTBDOztTQUUzQyxDQUFDO09BQ1csa0JBQWtCLENBeUI5QjtJQUFELHlCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F6Qlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1qdXN0LWFsZXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2p1c3QtYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9qdXN0LWFsZXJ0LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEp1c3RBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRleHRDb2xvcjogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIEBJbnB1dCgpIG1vZGU6IGFueTtcbiAgQElucHV0KCkgY2xvc2U6IGFueTtcbiAgQElucHV0KCkgYm9sZDogYW55O1xuICBASW5wdXQoKSB0ZXh0OiBhbnk7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBhbnk7XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgdGhpcy5tb2RlID0gJ2dyZWVuJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICB0aGlzLm1vZGUgPSAnIzBkNDdhMSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdkYW5nZXInKSB7XG4gICAgICB0aGlzLm1vZGUgPSAnY3JpbXNvbic7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICd3YXJuaW5nJykge1xuICAgICAgdGhpcy5tb2RlID0gJyNmZjk4MDAnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnaW5mbycpIHtcbiAgICAgIHRoaXMubW9kZSA9ICdjb3JuZmxvd2VyYmx1ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kZSA9ICd3aGl0ZSc7XG4gICAgICB0aGlzLnRleHRDb2xvciA9ICdibGFjayc7XG4gICAgICB0aGlzLmJvbGQgPSAndHJ1ZSc7XG4gICAgfVxuICB9XG59XG4iXX0=