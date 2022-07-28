
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
        //Guardar la lista en el localStorage
        localStorage.setItem("miLista", JSON.stringify(this.myArray)); 

    }

    loadID(){   
        
        console.log("=== SERVICES === [loadID]"); 
        let varLocal = localStorage.getItem("miLista");
    
        if(varLocal == null){            
            this.myArray = [];
            console.log("Contenido inexistente, inicializamos array vacío");
        }else{            
            this.myArray = [];
            const arr = JSON.parse(localStorage.getItem('miLista'));
            console.log(arr);
            console.log(this.myArray);
            this.myArray = [...this.myArray, ...arr];
            console.log("Mis cojones gordos");
            console.log(this.myArray);
            console.log("Contenido existente, cargamos en array lo que hubiese en localStorage");
            
        }
    }
}

 
