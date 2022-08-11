
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class BookmarksService extends Service {

myArray = [];
contador = 0;
constructor(){
    super();
    this.loadAllBookmarks();
    
}
    saveBookmark(argID, booleano){   
        console.log("=== SERVICES === [saveID]"); 
        console.log("... ID: [" + argID + "] [State]: "+ booleano);
        this.myArray.push({id: argID, state: booleano});
        localStorage.setItem("miLista", JSON.stringify(this.myArray)); 
        console.log(this.myArray);


    }

    loadAllBookmarks(){           
        console.log("=== SERVICES === [loadAllBookmarks]"); 
        console.log(this.myArray);
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
            console.log(this.myArray);
            return this.myArray;
                
        }
    }
 

    filtrado(argID){
        console.log("==== FILTRADO ====");   
        console.log("... ID: [" + argID + "]");
        console.log(this.myArray);
        var arrayFinder = this.myArray.find(estado => estado.id == argID);
        if(arrayFinder == null){
            console.log(this.myArray);
            return false;
        }else{
            console.log(this.myArray);
            return arrayFinder.state;
        }
        
    }
    
}


 
