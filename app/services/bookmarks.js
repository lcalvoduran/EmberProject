import { tracked } from '@glimmer/tracking';
import Service from '@ember/service';


export default class BookmarksService extends Service {
    
    myObj;

    BookmarksService() {
        this.myObj = this.loadID();
        
    }    
    
    
    //======> 2 Métodos dentro del servicio 

    // -> SAVE: Que guarde algo e imprima algo
    saveID(argID, booleano){
        this.myObj;
        
        console.log("=== SERVICES === [saveID]"); 
        console.log("... ID: [" + argID + "] [State]: "+ booleano);
        console.log(this.myObj);
        this.myObj.push({ID: argID, STATE: booleano});
        //Guardar la lista en el localStorage
        localStorage.setItem("miLista", myObj);
               
    }

    loadID(){   
        
        console.log("=== SERVICES === [loadID]"); 
        console.log("... You're using loadID service ");
        return localStorage.getItem("miLista");
    }
}
