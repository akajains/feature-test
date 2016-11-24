import {Component,OnInit} from '@angular/core';
//import{RandomNumber} from '../shared/randomNumber.service';
import{RandomDataService} from '../shared/randomData.service';

@Component({
    providers: [RandomDataService],                                      //Could be injected in Module but only available to Banner component
    selector: 'ng-banner',
    template:
    `      
             <h2>Status: {{title}}</h2>
             <h3>Data: {{resultData}}</h3>
             <h4>Count: {{totalCount}}</h4>
            
    `
})

export class Banner implements OnInit{
    private title:string; private resultData:any; private totalCount:number;    
    constructor(private randomData:RandomDataService){           
    };

    loadData(data){
         this.title = data.toString();
         this.resultData = data.json();
         this.totalCount = data.json().length;
    }

    ngOnInit(){
        this.randomData.getData()
                        .subscribe((data: any[])=> this.loadData(data))
    }
}