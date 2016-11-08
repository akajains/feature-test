"use strict";
var testing_1 = require('@angular/core/testing');
var banner_component_1 = require('./banner.component');
var randomData_service_1 = require('../shared/randomData.service');
var http_1 = require('@angular/http');
var bannerFixture, app;
describe('Banner compoenent (Test calling of Service)', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [banner_component_1.Banner],
            providers: [randomData_service_1.RandomData],
            imports: [http_1.HttpModule]
        });
        bannerFixture = testing_1.TestBed.createComponent(banner_component_1.Banner);
        app = bannerFixture.componentInstance;
    });
    it('Sanity Check: should return true', function () {
        expect(true).toBeTruthy();
    });
    xit('should generate randomNumber', function () {
        var element = bannerFixture.nativeElement;
        bannerFixture.detectChanges();
        expect(element.textContent).toContain('Banner');
    });
});
//# sourceMappingURL=banner.component.spec.js.map