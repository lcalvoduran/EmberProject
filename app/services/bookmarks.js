
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class BookmarksService extends Service {

//En el servicio tener una lista de objetos {id, estado} y rellenarla con lo que haya en el localStorage en el 
//constructor. 
//A la hora de guardar añades el nuevo objeto a esa lista, y esa lista es la que escribes en el localStorage
myArray = [];
contador = 0;
constructor(){
    super();
    this.myArray = this.loadAllBookmarks();
    
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
        }else{            
            this.myArray = [];
            const arr = JSON.parse(localStorage.getItem('miLista')); //Con esto obtendré el array
            this.myArray = [...this.myArray, ...arr]; //El spread operator (esto que he hecho) es un concat pero más guay 
                                                      //(eso si, es más slower que el concat nativo de toda la vida)
            console.log("Contenido existente, cargamos en array lo que hubiese en localStorage"); 
            //onsole.log(arr);
            // Cogemos las IDS
            const idList = this.myArray.map(({id})=> id);
            const popeado = idList.pop();                          
        }
    }

/* 
     filtrado(argID){
        //"El metodo de filtrar tiene que recibir una ID, buscar en el array esa ID y devolver el valor del booleano de esa ID"
        console.log("==== FILTRADO ====");   
        console.log("... ID: [" + argID + "]");               
        let varLocal = localStorage.getItem("miLista");

        if(varLocal == null){            
            this.myArray = [];
            console.log("Filtrado no ha encontrado nada. 💀");            
            return false;
        }else{                             
            this.myArray = [];
            const arr = JSON.parse(localStorage.getItem('miLista')); //Con esto obtendré el array
            this.myArray = [...this.myArray, ...arr];
            console.log(this.contador);
            const resultado = this.myArray[this.contador].id;                
            console.log(resultado);        
            if(resultado === argID){
                console.log("Filtrado ha encontrado. ⭐"); 
                this.contador++;
                return true;
            }else{
                console.log("Filtrado no ha encontrado nada. 💀");                
                return false;
            }                                                      
        }
    }     */    


    filtrado(argID){
        //"El metodo de filtrar tiene que recibir una ID, buscar en el array esa ID y devolver el valor del booleano de esa ID"
        console.log("==== FILTRADO ====");   
        console.log("... ID: [" + argID + "]");               
        let varLocal = localStorage.getItem("miLista");

        if(varLocal == null){            
            this.myArray = [];
            console.log("Filtrado no ha encontrado nada. 💀");            
            return false;
        }else{                 
            try {
                this.myArray = [];
                const arr = JSON.parse(localStorage.getItem('miLista')); //Con esto obtendré el array
                this.myArray = [...this.myArray, ...arr];
                const resultado = this.myArray[this.contador].id;                
                console.log(resultado);        
                if(resultado === argID){
                    console.log("Filtrado ha encontrado. ⭐"); 
                    this.contador++;
                    return true;
                }else{
                    console.log("Filtrado no ha encontrado nada. 💀");                
                    return false;
                }  
              }
              catch(err) {
                console.log("El array no tiene un length más grande que: "+ this.myArray.length);
              }                        
                                                    
        }
    }        
}


 
