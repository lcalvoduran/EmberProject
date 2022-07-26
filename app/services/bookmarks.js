import {A} from '@ember/array';
import Service from '@ember/service';

export default class BookmarksService extends Service {

    //======> 2 Métodos dentro del servicio 

    // -> SAVE: Que guarde algo e imprima algo
    saveID(argID){
        console.log("=== SERVICES === [saveID]"); 
        console.log("...You're using saveID service and your ID is: " + argID);
        
    }

    loadID(argID){
        console.log("=== SERVICES === [loadID]"); 
        console.log("... You're using loadID service and your ID is: " + argID);
    }
}
