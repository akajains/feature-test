import {
    TestBed, inject ,async
} from '@angular/core/testing'

import {
    Calculator
} from './calc.component'
import {
    Banner
} from './banner.component'

let fixture, app;
describe ('Calculator Component',() =>{
    
    //Setup TestBed
    beforeEach(()=>
    {
        TestBed.configureTestingModule({
             declarations: [Calculator,Banner]
        });        
        fixture = TestBed.createComponent(Calculator);  //Do not configure the TestBed after calling createComponent. It will throw errors
        app = fixture.componentInstance;
    });

    //function testing
    xit('should add, subtract result',  ()=>
    {   //Function defined test     
        expect(app.add()).toBeDefined();
        //Function return result test
        expect(app.add(5,2)).toBe(7);       
        expect(app.subtract(4,1)).toBe(3);
    });


    //Function have been called test
    xit('function should have been called',()=>
    {   

    
    });




    
    //Element testing
    xit('should set html result',()=>{
        const element = fixture.nativeElement;
        app.add(5,2);
        fixture.detectChanges();                                                //Why is this used? - To detect changes
        expect(element.textContent).toContain('Result: 7');
    });


   


});