// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { By }              from '@angular/platform-browser';
// import { Component ,DebugElement }    from '@angular/core';
// import { DataService } from '../shared/data.service';
// import {Observable} from "rxjs/Rx";

// import {PeoplePet} from './peoplePet.component';

// @Component({
//   template: '',
// })

// class TestComponent {
// }
// class MockDataService extends DataService {
//   getpetOwnerData() {
//     return Observable.of(new Object()).map(MOCKACCOUNT =>JSON.stringify(MOCKACCOUNT));
//   }
// }

//  let component:    PeoplePet;
//  let fixture: ComponentFixture<PeoplePet>;
//  let dataService:DataService;

// describe('PeoplePet', () => {
//   fixture = TestBed.createComponent(PeoplePet);
//   component = fixture.componentInstance;
// dataService = fixture.debugElement.injector.get(DataService);

//  var testData = {};
//  var spy = spyOn(dataService, 'getpetOwnerData')
//           .and.returnValue(Promise.resolve(testData));
 

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [TestComponent, PeoplePet ],
//       //providers: [{provide: DataService, useClass: MockDataService }]
//        providers: [DataService] 
//     });
//   });


//   it('true is true', function () { return expect(true).toBe(true); });

//   it('should have a defined component', () => {
//           expect(component).toBeDefined();
//       });

//       //rest of the test
  
// });
