import {A} from '@ember/array';
import Service from '@ember/service';

export default class BookmarksService extends Service {

    //======> 2 Métodos dentro del servicio 

    // -> SAVE: Que guarde algo e imprima algo
    saveID(argID){
         console.log("...You're using saveID service");
         console.log("Hello " + argID);
         return true;
    }

    loadID(){
        console.log("... You're using loadID service");
    }
}
