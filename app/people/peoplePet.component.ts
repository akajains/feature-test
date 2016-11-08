import {Component,  OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';
import * as _ from "lodash";

@Component({
	selector: 'people-pet',
//	inputs: ['gender'],
	templateUrl: 'app/people/peoplePet.component.html'
	
})
export class PeoplePet implements OnInit {
	private _petOwners={};
//	gender:string;
	constructor(private _dataService:DataService)	{}

	filterCats(data) {
		this._petOwners = _(data)
				.groupBy('gender')
				.mapValues(val => _(val)
				.map(op => _(op.pets)
				.filter({type: 'Cat'})
				.flatMap('name')
				.value()
				).flatten().sortBy().value())
				.value()
	}
	
	ngOnInit(){		
		this._dataService.getpetOwnerData()
		.subscribe((data: any[])=>  this.filterCats(data)) 
	}
}