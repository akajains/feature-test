import{Injectable,OnInit} from '@angular/core'
import{Http,Response} from '@angular/http'

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RandomDataService implements OnInit{

    private dataUrl: string = "https://jsonplaceholder.typicode.com/posts";
    constructor(private http:Http){}

    ngOnInit(){
        //call remote service
    }
    
    getData(): Observable<any>{
       return  this.http.get(this.dataUrl)
        .map((data: Response) => <any> data)
       // .catch(this.handleError);
    }

    private handleError(error:Response){
        
        return true;
        
        //return Observable.throw(error.json().error || 'Server error');
    }
}  