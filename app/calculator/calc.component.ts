import {Component} from '@angular/core';
import {Banner} from './banner.component';

@Component({
    selector: 'ng-calc',
    template: `
    <ng-banner></ng-banner>
    <div>Result: {{result}}</div>
    `
})
export class Calculator{
    private result;
    constructor()
    {   
        this.add(2,2);
    }

    add = function(i=1,j=1){        
        this.result = i+j;
        //console.log(this.result);
        return this.result;
    }

    subtract(i,j){
        this.result = i-j;
        return this.result;
    }

}