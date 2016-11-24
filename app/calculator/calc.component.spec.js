"use strict";
var testing_1 = require('@angular/core/testing');
var calc_component_1 = require('./calc.component');
var banner_component_1 = require('./banner.component');
var fixture, app;
xdescribe('Calculator Component', function () {
    //Setup TestBed
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [calc_component_1.Calculator, banner_component_1.Banner]
        });
        fixture = testing_1.TestBed.createComponent(calc_component_1.Calculator); //Do not configure the TestBed after calling createComponent. It will throw errors
        app = fixture.componentInstance;
    });
    //function testing
    xit('should add, subtract result', function () {
        expect(app.add()).toBeDefined();
        //Function return result test
        expect(app.add(5, 2)).toBe(7);
        expect(app.subtract(4, 1)).toBe(3);
    });
    //Function have been called test
    xit('function should have been called', function () {
    });
    //Element testing
    xit('should set html result', function () {
        var element = fixture.nativeElement;
        app.add(5, 2);
        fixture.detectChanges(); //Why is this used? - To detect changes
        expect(element.textContent).toContain('Result: 7');
    });
});
//# sourceMappingURL=calc.component.spec.js.map