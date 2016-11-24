"use strict";
var testing_1 = require('@angular/core/testing');
var banner_component_1 = require('./banner.component');
//import {RandomNumber} from '../shared/randomNumber.service'
var randomData_service_1 = require('../shared/randomData.service');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
//import 'rxjs/add/operator/subscribe'
var bannerFixture, app;
// Test real Service
// describe('Banner compoenent (Test calling of real Service)',()=>{
//     beforeEach(()=>{
//         TestBed.resetTestingModule();
//         TestBed.configureTestingModule({
//             declarations: [Banner],
//             providers: [RandomData],
//             imports: [HttpModule]
//         });
//         bannerFixture = TestBed.createComponent(Banner);
//         app = bannerFixture.componentInstance;
//     }); //beforeEach end
//     it('Sanity Check: should return true',()=>{
//             expect(true).toBeTruthy();
//     });
//     it('should generate randomNumber',()=>{
//         const element = bannerFixture.nativeElement;
//         bannerFixture.detectChanges();
//         expect(element.textContent).toContain('Status');
//     })  
// }) //describe end
var RandomDataServiceStub = (function () {
    function RandomDataServiceStub() {
    }
    RandomDataServiceStub.prototype.getData = function () {
        var testData = [
            {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                userId: 1,
                id: 2,
                title: "qui est esse",
                body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                userId: 1,
                id: 3,
                title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
            }
        ];
        return Rx_1.Observable.from([testData]);
    };
    return RandomDataServiceStub;
}());
exports.RandomDataServiceStub = RandomDataServiceStub;
xdescribe('Banner Component test with stub data', function () {
    var bannerFixture2, app2, randomDataService;
    beforeEach(function () {
        var testData = [
            {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                userId: 1,
                id: 2,
                title: "qui est esse",
                body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                userId: 1,
                id: 3,
                title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
            }
        ];
        //   TestBed.resetTestingModule();
        testing_1.TestBed.configureTestingModule({
            declarations: [banner_component_1.Banner],
            //providers: [{provide:RandomDataService, useClass: RandomDataServiceStub}],
            providers: [randomData_service_1.RandomDataService],
            imports: [http_1.HttpModule]
        });
        bannerFixture2 = testing_1.TestBed.createComponent(banner_component_1.Banner);
        app2 = bannerFixture2.componentInstance;
        // randomDataService = TestBed.get(RandomDataService);
        randomDataService = bannerFixture2.debugElement.injector.get(randomData_service_1.RandomDataService);
        var spy = spyOn(randomDataService, 'getData')
            .and.returnValue(Rx_1.Observable.of(testData));
    });
    it('Sanity Check: should return true', function () {
        //TestBed.compileComponents().then(()=>{
        expect(app2).toBeTruthy();
    });
    xit('should return the correct length of data returned from service', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            app2.ngOnInit();
            bannerFixture2.detectChanges();
            expect(app2.totalCount).toEqual(100);
        });
    }));
});
//# sourceMappingURL=banner.component.spec.js.map