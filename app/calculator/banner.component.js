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
//import{RandomNumber} from '../shared/randomNumber.service';
var randomData_service_1 = require('../shared/randomData.service');
var Banner = (function () {
    function Banner(randomData) {
        var _this = this;
        this.randomData = randomData;
        this.randomData.getData()
            .subscribe(function (data) { return _this.title = "Incoming data " + data.toString(); });
    }
    ;
    Banner = __decorate([
        core_1.Component({
            providers: [randomData_service_1.RandomData],
            selector: 'ng-banner',
            template: "        <h2>{{title}}</h2>\n    "
        }), 
        __metadata('design:paramtypes', [randomData_service_1.RandomData])
    ], Banner);
    return Banner;
}());
exports.Banner = Banner;
//# sourceMappingURL=banner.component.js.map