import {Component,Injectable} from '@angular/core';
//import{RandomNumber} from '../shared/randomNumber.service';
import{RandomData} from '../shared/randomData.service';

@Component({
    providers: [RandomData],                                      //Could be injected in Module but only available to Banner component
    selector: 'ng-banner',
    template:
    `        <h2>{{title}}</h2>
    `
})

export class Banner{
    private title:any ;
    constructor(private randomData:RandomData){
            this.randomData.getData()
                .subscribe((data: any[])=>  this.title = "Incoming data "+ data.toString()) 
    }; 
    //private title:string = "BannerText " + this.randomNumber.generate(); 

    



}