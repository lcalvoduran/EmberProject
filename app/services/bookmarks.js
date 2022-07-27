import {A} from '@ember/array';
import Service from '@ember/service';

export default class BookmarksService extends Service {

    //======> 2 Métodos dentro del servicio 

    // -> SAVE: Que guarde algo e imprima algo
    saveID(argID, booleano){
        console.log("=== SERVICES === [saveID]"); 
        console.log("... ID: [" + argID + "] [State]: "+ booleano);
        /** === Guardado con localStorage ===**/

        localStorage.setItem(argID, booleano);
        localStorage.getItem(argID);
               
    }

    loadID(){        
        console.log("=== SERVICES === [loadID]"); 
        console.log("... You're using loadID service ");
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);           
            console.log("[ID]: " + key + " [STATE]: " + localStorage.getItem(key));
            if(!key){
                console.log("No hay datos en localStorage");
            }else{
                console.log(document.getElementById(key));
            }
        }

/**
 * 
 * 
 * // get favorites from local storage or empty array
        var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
// add class 'fav' to each favorite
favorites.forEach(function(favorite) {
  document.getElementById(favorite).className = 'fav';
});
// register click event listener
document.querySelector('.list').addEventListener('click', function(e) {
  var id = e.target.id,
      item = e.target,
      index = favorites.indexOf(id);
  // return if target doesn't have an id (shouldn't happen)
  if (!id) return;
  // item is not favorite
  if (index == -1) {
    favorites.push(id);
    item.className = 'fav';
  // item is already favorite
  } else {
    favorites.splice(index, 1);
    item.className = '';
  }
  // store array in local storage
  localStorage.setItem('favorites', JSON.stringify(favorites));
});

// local storage stores strings so we use JSON to stringify for storage and parse to get out of storage
 * 
 * 
 */

        
    }
}
