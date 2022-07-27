import {A} from '@ember/array';
import Service from '@ember/service';

export default class BookmarksService extends Service {

    //======> 2 Métodos dentro del servicio 

    // -> SAVE: Que guarde algo e imprima algo
    saveID(argID, booleano){
        console.log("=== SERVICES === [saveID]"); 
        console.log("... ID: [" + argID + "] [State]: "+ booleano);
        /** === Guardado con localStorage ===**/
        
        /**
        const list = [
            { ID: argID, STATE: booleano }
        ];
        **/
        localStorage.setItem(argID, booleano);
         
        /**
         * === Breve repaso del LocalStorage ===
         * 
         * localStorage.setItem('miGato', 'Juan');          ==> Accedemos al objeto local y agrega un item al mismo
         * 
         * var cat = localStorage.getItem('miGato');        ==> Leemos el item almacenado
         * 
         * localStorage.removeItem('miGato');               ==> Eliminamos un item almacenado en localStorage
         * 
         * localStorage.clear();                            ==> Eliminamos todos los items almacenados
         */

        
    }

    loadID(argID){        
        console.log("=== SERVICES === [loadID]"); 
        console.log("... You're using loadID service and your ID is: " + argID);

    }
}
