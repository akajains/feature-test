import { Injectable, Directive } from '@angular/core';
import {  Response,Jsonp } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable() 
export class DataService {

    private serviceUri: string = 'http://agl-developer-test.azurewebsites.net/people.json?callback=JSONP_CALLBACK';

    constructor( private jsonp:Jsonp){        
    } 

    getpetOwnerData() : Observable<any> {                               //This Observable is cold
        return this.jsonp.get(this.serviceUri)
             .map((resp: Response) => <any> resp.json())
             .catch(this.errorHandler);
            // .do((resp: Response) => console.log(resp));
    };
    
    private errorHandler(error: any) {
        return Observable.throw(error.json().error || 'Server error');
  }
}