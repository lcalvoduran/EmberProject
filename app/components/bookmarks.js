import Component from '@glimmer/component';
//Importación del servicio
import {service} from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import RentalImageComponent from './rental/image';

var favorites = localStorage.getItem("miLista");
var arrayFavorites = JSON.parse(localStorage.getItem('miLista'));
if (favorites.search("STATE: true")){
  console.log("True");
  console.log(arrayFavorites);
  console.log("Obtencion valores");
  console.log(Object.values(arrayFavorites));
}


export default class BookmarksComponent extends Component {
  //Llamamos al servicio que utilizaremos, mi servicio se llama "bookmarks" 
  @service bookmarks;
  @tracked isRed = false;
  //Accedemos a nuestro argumento mediante this.args.id, sin embargo como seguramente lleguemos a trackear esta ID la guardamos aqui
  //El action que me pide el component 
  @action useService() {
    const argID = this.args.id;
    const booleano = true;
    this.isRed = !this.isRed;
    console.log("Button State [isRed]: " + this.isRed);

    //Llamada a la función del servicio "bookmarks"
    this.bookmarks.loadID();
    this.bookmarks.saveID(argID, booleano);
    
    


    

  }
}
