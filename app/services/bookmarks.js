import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';
import Service from '@ember/service';


export default class BookmarksService extends Service {

//En el servicio tener una lista de objetos {id, estado} y rellenarla con lo que haya en el localStorage en el constructor. 
//A la hora de guardar añades el nuevo objeto a esa lista, y esa lista es la que escribes en el localStorage
    BookmarksService(
        id,
        state
    ){
        this.id = id;
        this.state = state;
    }

/**
    myObj;

    BookmarksService() {
        this.myObj = this.loadID();
        
    }    
 */
    
    //======> 2 Métodos dentro del servicio 

    // -> SAVE: Que guarde algo e imprima algo
    saveID(argID, booleano){   
        const nuevoObjeto = new BookmarksService(
            'hola',
            'true'
        );
        console.log(nuevoObjeto);
        console.log("=== SERVICES === [saveID]"); 
        console.log("... ID: [" + argID + "] [State]: "+ booleano);
        //this.myObj.push({ID: argID, STATE: booleano});
        //Guardar la lista en el localStorage
        localStorage.setItem("miLista", myObj);          
    }

    loadID(argID, booleano){   
        
        console.log("=== SERVICES === [loadID]"); 
        console.log("... You're using loadID service ");
        return localStorage.getItem("miLista");
    }
}
