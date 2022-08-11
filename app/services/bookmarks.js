
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class BookmarksService extends Service {

myArray = [];
contador = 0;
constructor(){
    super();
    this.loadAllBookmarks();    
}
    saveBookmark(argID, boolean){   
        console.log("=== SERVICES === [saveID]"); 
        var foundPair = this.myArray.find(estado => estado.id == argID);
        if (foundPair) {
            console.log("Ese elemento ya se añadió :(");
            console.log("El estado del botón es: " + boolean)
            console.log(foundPair);
            foundPair.state = boolean;
            console.log(this.myArray);     
            localStorage.setItem("miLista", JSON.stringify(this.myArray));        
        }else{
            console.log("Se ha añadido un elemento :) ");
            this.myArray.push({id: argID, state: boolean});
            localStorage.setItem("miLista", JSON.stringify(this.myArray)); 
        }      
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
            const arr = JSON.parse(localStorage.getItem('miLista'));
            this.myArray = [...this.myArray, ...arr]; 
            console.log("Contenido existente, cargamos en array lo que hubiese en localStorage"); 
            return this.myArray;   
        }
    }
 

    filtrado(argID){
        console.log("==== FILTRADO ====");   
        console.log("... ID: [" + argID + "]");
        var arrayFinder = this.myArray.find(estado => estado.id == argID);
        if(arrayFinder == null){
            return false;
        }else{
            return arrayFinder.state;
        }   
    }
    
}


 
