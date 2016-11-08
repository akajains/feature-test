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
var Calculator = (function () {
    function Calculator() {
        this.add = function (i, j) {
            if (i === void 0) { i = 1; }
            if (j === void 0) { j = 1; }
            this.result = i + j;
            //console.log(this.result);
            return this.result;
        };
        this.add(2, 2);
    }
    Calculator.prototype.subtract = function (i, j) {
        this.result = i - j;
        return this.result;
    };
    Calculator = __decorate([
        core_1.Component({
            selector: 'ng-calc',
            template: "\n    <ng-banner></ng-banner>\n    <div>Result: {{result}}</div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Calculator);
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=calc.component.js.map