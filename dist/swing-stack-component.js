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
var Swing = require('swing');
var SwingStackComponent = (function () {
    function SwingStackComponent() {
        this.throwout = new core_1.EventEmitter();
        this.throwoutend = new core_1.EventEmitter();
        this.throwoutleft = new core_1.EventEmitter();
        this.throwoutright = new core_1.EventEmitter();
        this.throwin = new core_1.EventEmitter();
        this.throwinend = new core_1.EventEmitter();
        this.dragstart = new core_1.EventEmitter();
        this.dragmove = new core_1.EventEmitter();
        this.dragend = new core_1.EventEmitter();
        this.cards = [];
    }
    SwingStackComponent.prototype.addCard = function (card) {
        this.cards.push(card);
        if (this.stack) {
            this.stack.createCard(card.getNativeElement());
        }
    };
    SwingStackComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.stack = Swing.Stack(this.stackConfig || {});
        this.cards.forEach(function (c) { return _this.stack.createCard(c.getNativeElement()); });
        // Hook various events
        this.stack.on('throwout', function ($event) { return _this.throwout.emit($event); });
        this.stack.on('throwoutend', function ($event) { return _this.throwoutend.emit($event); });
        this.stack.on('throwoutleft', function ($event) { return _this.throwoutleft.emit($event); });
        this.stack.on('throwoutright', function ($event) { return _this.throwoutright.emit($event); });
        this.stack.on('throwin', function ($event) { return _this.throwin.emit($event); });
        this.stack.on('throwinend', function ($event) { return _this.throwinend.emit($event); });
        this.stack.on('dragstart', function ($event) { return _this.dragstart.emit($event); });
        this.stack.on('dragmove', function ($event) { return _this.dragmove.emit($event); });
        this.stack.on('dragend', function ($event) { return _this.dragend.emit($event); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SwingStackComponent.prototype, "stackConfig", void 0);
    SwingStackComponent = __decorate([
        core_1.Component({
            selector: '[swing-stack]',
            template: "\n    <ng-content></ng-content>\n  ",
            outputs: [
                'throwout',
                'throwoutend',
                'throwoutleft',
                'throwoutright',
                'throwin',
                'throwinend',
                'dragstart',
                'dragmove',
                'dragend',
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SwingStackComponent);
    return SwingStackComponent;
}());
exports.SwingStackComponent = SwingStackComponent;
//# sourceMappingURL=swing-stack-component.js.map