import Component from '@glimmer/component';
//Importación del servicio
import {service} from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BookmarksComponent extends Component {
  //Llamamos al servicio que utilizaremos, mi servicio se llama "bookmarks" 
  @service bookmarks;
  @tracked isGreen = false;
  //El action que me pide el component 
  @action usaServicio() {
    this.isGreen = !this.isGreen;
    console.log("Se ha pulsado el botón");
    
    //Llamada a la función del servicio "bookmarks"
    this.bookmarks.usaServicio();
  }
}
