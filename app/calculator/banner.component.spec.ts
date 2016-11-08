import {TestBed,inject,async} from '@angular/core/testing'

import { Banner } from './banner.component'
import {RandomNumber} from '../shared/randomNumber.service'
import {RandomData} from '../shared/randomData.service'
import{HttpModule} from '@angular/http'


let bannerFixture, app

describe('Banner compoenent (Test calling of Service)',()=>{


    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [Banner],
            providers: [RandomData],
            imports: [HttpModule]
        });

        bannerFixture = TestBed.createComponent(Banner);
        app = bannerFixture.componentInstance;      


    });

    it('Sanity Check: should return true',()=>{
            expect(true).toBeTruthy();
    });

    xit('should generate randomNumber',()=>{
        const element = bannerFixture.nativeElement;
        bannerFixture.detectChanges();
        expect(element.textContent).toContain('Banner');
    })

}) 