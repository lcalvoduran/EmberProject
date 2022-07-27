import {A} from '@ember/array';
import Service from '@ember/service';

const myObj = [

  ];
    
  console.log(myObj);

export default class BookmarksService extends Service {
   
    //======> 2 Métodos dentro del servicio 

    // -> SAVE: Que guarde algo e imprima algo
    saveID(argID, booleano){
        console.log("=== SERVICES === [saveID]"); 
        console.log("... ID: [" + argID + "] [State]: "+ booleano);

        myObj.push({ID: argID, STATE: booleano});
        console.log(myObj);
        //Guardar la lista en el localStorage
        localStorage.setItem("miLista", JSON.stringify(myObj));
               
    }

    loadID(){        
        console.log("=== SERVICES === [loadID]"); 
        console.log("... You're using loadID service ");
        console.log("El JSON tiene las siguientes viviendas" + myObj);
        console.log("Dame la lista " + localStorage.getItem("miLista"));



        
    }
}
