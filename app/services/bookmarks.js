import {A} from '@ember/array';
import Service from '@ember/service';

export default class BookmarksService extends Service {

    //======> 2 Métodos dentro del servicio 

    // -> SAVE: Que guarde algo e imprima algo
    saveID(argID, booleano){
        console.log("=== SERVICES === [saveID]"); 
        console.log("... ID: [" + argID + "] [State]: "+ booleano);
        /** === Guardado con localStorage ===**/

        localStorage.setItem(argID, booleano);
        localStorage.getItem(argID);
               
    }

    loadID(){        
        console.log("=== SERVICES === [loadID]"); 
        console.log("... You're using loadID service ");



        
    }
}
