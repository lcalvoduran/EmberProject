
import Service from '@ember/service';


export default class BookmarksService extends Service {

//En el servicio tener una lista de objetos {id, estado} y rellenarla con lo que haya en el localStorage en el 
//constructor. 
//A la hora de guardar añades el nuevo objeto a esa lista, y esa lista es la que escribes en el localStorage
myArray = [];
constructor(){
    super();
    this.myArray = this.loadID();
    
}

    
    //======> 2 Métodos dentro del servicio 

    // -> SAVE: Que guarde algo e imprima algo
    saveID(argID, booleano){   

        console.log("=== SERVICES === [saveID]"); 
        console.log("... ID: [" + argID + "] [State]: "+ booleano);
        
        
        this.myArray.push({ID: argID, STATE: booleano});
        console.log(this.myArray);
        //Guardar la lista en el localStorage
        localStorage.setItem("miLista", JSON.stringify(this.myArray)); 

        // setid objeto vale nulo lo inicializa a array vacio
        
        // en el load le inicializo variable con array vacio
    }

    loadID(){   
        
        console.log("=== SERVICES === [loadID]"); 
        console.log("... Downloading content ");
        let local = localStorage.getItem("miLista");
        if (local == null) {
            console.log("localStorage vacío");
            this.myArray = [];
            console.log(this.myArray);
            
        }else{
            return localStorage.getItem("miLista");
        }
        
        
    }
}
