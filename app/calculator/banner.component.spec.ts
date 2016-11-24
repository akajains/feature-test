import { TestBed, inject, async,fakeAsync } from '@angular/core/testing'
import { Banner } from './banner.component'
//import {RandomNumber} from '../shared/randomNumber.service'
import { RandomDataService } from '../shared/randomData.service'
import { HttpModule } from '@angular/http'
import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/subscribe'


let bannerFixture, app

// Test real Service

// describe('Banner compoenent (Test calling of real Service)',()=>{

//     beforeEach(()=>{
//         TestBed.resetTestingModule();
//         TestBed.configureTestingModule({
//             declarations: [Banner],
//             providers: [RandomData],
//             imports: [HttpModule]
//         });

//         bannerFixture = TestBed.createComponent(Banner);
//         app = bannerFixture.componentInstance;
//     }); //beforeEach end



//     it('Sanity Check: should return true',()=>{
//             expect(true).toBeTruthy();
//     });

//     it('should generate randomNumber',()=>{
//         const element = bannerFixture.nativeElement;
//         bannerFixture.detectChanges();
//         expect(element.textContent).toContain('Status');
//     })  
// }) //describe end



export class RandomDataServiceStub{
    getData(): Observable<any>{

    var testData = [
            {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                userId: 1,
                id: 2,
                title: "qui est esse",
                body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                userId: 1,
                id: 3,
                title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
            }
        ];


        return <Observable<any>>Observable.from([testData]);

    }
}


xdescribe('Banner Component test with stub data', () => {
    let bannerFixture2, app2, randomDataService;
    beforeEach(() => {
  var testData = [
            {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                userId: 1,
                id: 2,
                title: "qui est esse",
                body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                userId: 1,
                id: 3,
                title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
            }
        ];

       
        //   TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            declarations: [Banner],
            //providers: [{provide:RandomDataService, useClass: RandomDataServiceStub}],
            providers: [RandomDataService],
            imports: [HttpModule]
        });

          bannerFixture2 = TestBed.createComponent(Banner);
          app2 = bannerFixture2.componentInstance;
          

        // randomDataService = TestBed.get(RandomDataService);
         randomDataService = bannerFixture2.debugElement.injector.get(RandomDataService);

         var spy = spyOn(randomDataService, 'getData')
             .and.returnValue(Observable.of(testData))


    })

    it('Sanity Check: should return true', () => {
        //TestBed.compileComponents().then(()=>{
            expect(app2).toBeTruthy();
           
     
    });

    xit('should return the correct length of data returned from service', async(() => {
        TestBed.compileComponents().then(()=>{
         app2.ngOnInit(); 
        bannerFixture2.detectChanges();
        expect(app2.totalCount).toEqual(100);
    })
    }));

})