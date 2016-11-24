import {TestBed,inject,async} from '@angular/core/testing'

import { Banner } from './banner.component'
//import {RandomNumber} from '../shared/randomNumber.service'
import {RandomDataService} from '../shared/randomData.service'
import{HttpModule} from '@angular/http'

describe('Banner Component test with stub service',()=>{
    
    beforeEach(()=>{
        let bannerFixture2, app2;
        var randomDataStub =[
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
            providers: [{provide:RandomDataService, useValue:randomDataStub}]
        })

        bannerFixture2 = TestBed.createComponent(Banner);
        app2 = bannerFixture2.componentInstance; 

        it('Sanity Check: should return true',()=>{
                    expect(true).toBeTruthy();
            });

    })
})
