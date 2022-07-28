
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
        let varLocal = localStorage.getItem("miLista");
    
        if(varLocal == null){            
            this.myArray = [];
            console.log("Contenido inexistente, inicializamos array vacío" + this.myArray);
        }else{            
            this.myArray = [];
            const arr = JSON.parse(localStorage.getItem('miLista'));
            this.myArray.push(arr);
            console.log("Contenido existente, cargamos en array lo que hubiese en localStorage");
            console.log(this.myArray);
        }
    }
}
        /**
        if (local == null) {
            console.log("Contenido INEXISTENTE en localStorage");
            this.myArray = [];
            
            
        }else{
            console.log("EXISTE contenido en localStorage");
            const arr = JSON.parse(localStorage.getItem('miLista'));
            console.log("Arr: " + arr);
            this.myArray.push(arr);
            return localStorage.getItem("miLista");            
        }
        
         **/
 
