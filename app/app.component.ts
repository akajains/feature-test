import {Component } from '@angular/core';
import {PeoplePet} from './people/peoplePet.component';
import {Calculator} from './calculator/calc.component';
import{LuckyNumber} from './simple_service/luckyNumber.component'

@Component({
  
  selector: 'agl-test',
  
  template: `
    <!--<div><people-pet></people-pet></div>
     <div><ng-calc></ng-calc></div> -->
     <div><ng-lucky-number></ng-lucky-number>
  `
  })
export class AppComponent { 
 
  
}
