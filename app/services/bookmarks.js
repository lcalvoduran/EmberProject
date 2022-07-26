import {A} from '@ember/array';
import Service from '@ember/service';

export default class BookmarksService extends Service {

    //======> 2 Métodos dentro del servicio 

    // -> SAVE: Que guarde algo e imprima algo
    saveID(argumentoID){
         console.log("Hola estás usando el servicio de save");
         return true;
    }

    loadID(){
        console.log("Hola estás usando el cargar ID");
    }
}
