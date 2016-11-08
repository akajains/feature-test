import{Injectable} from '@angular/core';

@Injectable()                       //What is the use when I can use/call generate without Injectable?
                                    //an injector will report an error when trying to instantiate a class that is not marked as @Injectable()
export class RandomNumber{

    generate(){
        return Math.random();
    }

}