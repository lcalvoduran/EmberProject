import {A} from '@ember/array';
import Service from '@ember/service';

export default class BookmarksService extends Service {

    //======> 2 Métodos dentro del servicio 

    // -> SAVE: Que guarde algo e imprima algo
    saveID(argID, booleano){
        console.log("=== SERVICES === [saveID]"); 
        console.log("... ID: [" + argID + "] [State]: "+ booleano);
        /** === Guardado con localStorage ===**/
        
        const browsers = [
            { ID: argID, STATE: booleano }
        ];
         
        localStorage.setItem('browsers', JSON.stringify(browsers));
         
        var localStorageObject = localStorage.getItem('browsers');
        console.log(JSON.parse(localStorageObject));
       
        
        /**
        localStorage.setItem('listID', argID);
        const cat = localStorage.getItem('listID');
        console.log("Lista localStorage: " + cat);
        **/
        
    }

    loadID(argID){        
        console.log("=== SERVICES === [loadID]"); 
        console.log("... You're using loadID service and your ID is: " + argID);

    }
}
