
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class BookmarksService extends Service {

myArray = [];
contador = 0;
constructor(){
    super();
    this.loadAllBookmarks();
    
}

    
    //======> 2 Métodos dentro del servicio 

    // -> SAVE: Que guarde algo e imprima algo
    saveBookmark(argID, booleano){   

        console.log("=== SERVICES === [saveID]"); 
        console.log("... ID: [" + argID + "] [State]: "+ booleano);
        this.myArray.push({id: argID, state: booleano});
        //Guardar la lista en el localStorage
        localStorage.setItem("miLista", JSON.stringify(this.myArray)); 


    }

    loadAllBookmarks(){           
        console.log("=== SERVICES === [loadAllBookmarks]"); 
        let varLocal = localStorage.getItem("miLista");
    
        if(varLocal == null){            
            this.myArray = [];
            console.log("Contenido inexistente, inicializamos array vacío");
            return this.myArray;
        }else{            
            this.myArray = [];
            const arr = JSON.parse(localStorage.getItem('miLista')); //Con esto obtendré el array
            this.myArray = [...this.myArray, ...arr]; //El spread operator (esto que he hecho) es un concat pero más guay 
                                                      //(eso si, es más slower que el concat nativo de toda la vida)
            console.log("Contenido existente, cargamos en array lo que hubiese en localStorage"); 
            return this.myArray;
                
        }
    }
 

    filtrado(argID){
        console.log("==== FILTRADO ====");   
        console.log("... ID: [" + argID + "]");
        
        // Con esto que he puesto aqui abajo me va a devolver "true" y el valor de la propiedad "state" es o "true" o "false"
        //var arrayFiltered = this.myArray.filter(estado => estado.id == argID).some(elem => elem.state == true);
        
        // Con esto vamos a devolver el valor del booleano de esa ID
        //var arrayFiltered = this.myArray.filter(estado => estado.id == argID).find(estado => estado.state == true);
        var arrayFiltered = this.myArray.find(estado => estado.state == true);
        console.log(arrayFiltered);
        //return arrayFiltered.state;

        // (He querido envolverlo en un try/catch por los errores ya que si no encuentra en localStoragesalta)
        /**
        try{
            var arrayFiltered = this.myArray.filter(estado => estado.id == argID).find(estado => estado.state == true);
            //console.log(arrayFiltered.state);
            return arrayFiltered.state;
        }catch(err){
            console.log("No hay mas objetos almacenados con valor a true en el localStorage");
            return false;
        }
         */

        
    }
    
}


 
