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
        myObj.push();
        console.log(myObj);
        //Guardar la lista en el localStorage
        localStorage.setItem("miLista", JSON.stringify(myObj));
        localStorage.getItem("miLista");
               
    }

    loadID(){        
        console.log("=== SERVICES === [loadID]"); 
        console.log("... You're using loadID service ");
        console.log("El JSON tiene las siguientes viviendas" + myObj);
        localStorage.getItem("miLista");



        
    }
}
