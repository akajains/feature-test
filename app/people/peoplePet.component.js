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
var data_service_1 = require('../shared/data.service');
var _ = require("lodash");
var PeoplePet = (function () {
    //	gender:string;
    function PeoplePet(_dataService) {
        this._dataService = _dataService;
        this._petOwners = {};
    }
    PeoplePet.prototype.filterCats = function (data) {
        this._petOwners = _(data)
            .groupBy('gender')
            .mapValues(function (val) { return _(val)
            .map(function (op) { return _(op.pets)
            .filter({ type: 'Cat' })
            .flatMap('name')
            .value(); }).flatten().sortBy().value(); })
            .value();
    };
    PeoplePet.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getpetOwnerData()
            .subscribe(function (data) { return _this.filterCats(data); });
    };
    PeoplePet = __decorate([
        core_1.Component({
            selector: 'people-pet',
            //	inputs: ['gender'],
            templateUrl: 'app/people/peoplePet.component.html'
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], PeoplePet);
    return PeoplePet;
}());
exports.PeoplePet = PeoplePet;
//# sourceMappingURL=peoplePet.component.js.map