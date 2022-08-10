import Component from '@glimmer/component';
//Importación del servicio
import {service} from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BookmarksComponent extends Component {
  //Llamamos al servicio que utilizaremos, mi servicio se llama "bookmarks" 
  @service bookmarks;
  @tracked isRed = false;

    constructor(){
      super(...arguments);
      this.filtrameYMarca();     
    }


  //Accedemos a nuestro argumento mediante this.args.id, sin embargo como seguramente lleguemos a trackear esta ID la guardamos aqui
  //El action que me pide el component 
  @action useService() {
    const argID = this.args.id;
    const booleano = true;
    this.isRed = !this.isRed;
    console.log("Button State [isRed]: " + this.isRed);

    //Llamada a la función del servicio "bookmarks" 
    this.bookmarks.saveBookmark(argID, booleano);
  }

  filtrameYMarca(){

    //Deberia coger la ID y con el filtrado cambiarselo 
    // README: Actualizar la variable que hace que cambie el icono de acuerdo al estado que has leído.

      const argID = this.args.id;
      const estado = this.bookmarks.filtrado(argID);
      console.log("Objeto con estado: " + estado);
      if (estado){
        this.isRed = true;       
      }else{
        this.isRed = false;

      }
  }

  
}


