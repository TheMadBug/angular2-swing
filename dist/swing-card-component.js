"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var swing_stack_component_1 = require('./swing-stack-component');
var SwingCardComponent = (function () {
    function SwingCardComponent(elmentRef, swingStack) {
        this.elmentRef = elmentRef;
        this.swingStack = swingStack;
    }
    SwingCardComponent.prototype.ngOnInit = function () {
        this.swingStack.addCard(this);
    };
    SwingCardComponent.prototype.getElementRef = function () {
        return this.elmentRef;
    };
    SwingCardComponent.prototype.getNativeElement = function () {
        return this.elmentRef.nativeElement;
    };
    SwingCardComponent.prototype.getCard = function () {
        return this.swingStack.stack.getCard(this.getNativeElement());
    };
    SwingCardComponent = __decorate([
        core_1.Component({
            selector: '[swing-card]',
            template: "\n    <ng-content></ng-content>\n  "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, swing_stack_component_1.SwingStackComponent])
    ], SwingCardComponent);
    return SwingCardComponent;
}());
exports.SwingCardComponent = SwingCardComponent;
//# sourceMappingURL=swing-card-component.js.map