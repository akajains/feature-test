import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import {DataService} from './shared/data.service';
import {PeoplePet} from    './people/peoplePet.component'
import {Calculator} from    './calculator/calc.component'
import {Banner} from './calculator/banner.component';
import{LuckyNumber} from './simple_service/luckyNumber.component'
import{LuckyNumberService} from './simple_service/luckyNumber.service'

@NgModule({
  imports:      [ BrowserModule,HttpModule,JsonpModule ],                       
  declarations: [ LuckyNumber,AppComponent, PeoplePet,Calculator, Banner ],                  //What is difference between declarations and providers?
  providers:    [ DataService,LuckyNumberService],
  bootstrap:    [ AppComponent ] 
})

export class AppModule { }
