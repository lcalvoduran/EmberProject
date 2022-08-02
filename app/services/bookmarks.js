
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
        this.myArray.push({id: argID, state: booleano});
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
            const arr = JSON.parse(localStorage.getItem('miLista')); //Con esto obtendré el array
            this.myArray = [...this.myArray, ...arr]; //El spread operator (esto que he hecho) es un concat pero más guay 
                                                      //(eso si, es más slower que el concat nativo de toda la vida)
            //console.log(this.myArray);
            console.log("Contenido existente, cargamos en array lo que hubiese en localStorage"); 
            // Cogemos las IDS
            const idList = this.myArray.map(({id})=> id);
            const popeado = idList.pop();
            //document.getElementById(popeado).className = "imagebutton2";                        
        }
    }

    // CREADO COMO AUXILIAR (NO EN USO)
    
    loadAll(){
        
        console.log(" === SERVICES === [watchSTATE]");
            //Filtramos los que estén en true
            this.myArray = [];
            const arr = JSON.parse(localStorage.getItem('miLista'));
            this.myArray = [...this.myArray, ...arr];
            const idList = this.myArray.map(({id})=> id);
            console.log(idList);
            for (let index = 0; index < idList.length+2; index++) {
                const shifteado = idList.shift();
                console.log(shifteado);
                const elem = document.getElementById(shifteado).className = "imagebutton2";
                console.log(idList);                
            }
            
            /**
            var arrayFiltered = this.myArray.filter(filtrado => filtrado.state == true);
            //console.log(arrayFiltered);          
            //Obtenemos el id de los que están en true   
            const idList = arrayFiltered.map(({id})=> id);
            console.log(idList);

            const elem = document.getElementById(idList).className = "imagebutton2";
            console.log(elem);
             */            
        

    }
     
}

 
