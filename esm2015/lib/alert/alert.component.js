import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let AlertComponent = class AlertComponent {
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
export { AlertComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWFsZXJ0LW1lc3NhZ2UvIiwic291cmNlcyI6WyJsaWIvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBRXpCLGdCQUFlLENBQUM7SUFNaEIsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7U0FDckI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztTQUN2QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7U0FDdkI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUF0QlU7SUFBUixLQUFLLEVBQUU7NENBQVc7QUFDVjtJQUFSLEtBQUssRUFBRTs2Q0FBWTtBQUNYO0lBQVIsS0FBSyxFQUFFOzRDQUFXO0FBQ1Y7SUFBUixLQUFLLEVBQUU7NENBQVc7QUFDVjtJQUFSLEtBQUssRUFBRTtnREFBZTtBQVBaLGNBQWM7SUFMMUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsOFlBQXFDOztLQUV0QyxDQUFDO0dBQ1csY0FBYyxDQXlCMUI7U0F6QlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtYWxlcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hbGVydC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRleHRDb2xvcjogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIEBJbnB1dCgpIG1vZGU6IGFueTtcbiAgQElucHV0KCkgY2xvc2U6IGFueTtcbiAgQElucHV0KCkgYm9sZDogYW55O1xuICBASW5wdXQoKSB0ZXh0OiBhbnk7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBhbnk7XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgdGhpcy5tb2RlID0gJ2dyZWVuJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICB0aGlzLm1vZGUgPSAnIzBkNDdhMSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdkYW5nZXInKSB7XG4gICAgICB0aGlzLm1vZGUgPSAnY3JpbXNvbic7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICd3YXJuaW5nJykge1xuICAgICAgdGhpcy5tb2RlID0gJyNmZjk4MDAnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnaW5mbycpIHtcbiAgICAgIHRoaXMubW9kZSA9ICdjb3JuZmxvd2VyYmx1ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kZSA9ICd3aGl0ZSc7XG4gICAgICB0aGlzLnRleHRDb2xvciA9ICdibGFjayc7XG4gICAgICB0aGlzLmJvbGQgPSAndHJ1ZSc7XG4gICAgfVxuICB9XG59XG4iXX0=