import {Component } from '@angular/core';
import {PeoplePet} from './people/peoplePet.component';
import {Calculator} from './calculator/calc.component';

@Component({
  selector: 'agl-test',
  template: `
    <!--<div><people-pet></people-pet></div>-->
    <div><ng-calc></ng-calc></div>
  `
  })
export class AppComponent { 
 
  
}
