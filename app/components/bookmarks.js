import Component from '@glimmer/component';
//Importación del servicio
import {service} from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import RentalImageComponent from './rental/image';

export default class BookmarksComponent extends Component {
  //Llamamos al servicio que utilizaremos, mi servicio se llama "bookmarks" 
  @service bookmarks;
  @tracked isGreen = false;
  //Accedemos a nuestro argumento mediante this.args.id, sin embargo como seguramente lleguemos a trackear esta ID la guardamos aqui
  @tracked argumentoID = this.args.id;
  //El action que me pide el component 
  @action usaServicio(argumentoID) {
    const argID = this.args.id
    this.isGreen = !this.isGreen;
    console.log("Se ha pulsado el botón");
    console.log("Argumento ID con tracked: " + this.argumentoID);
    console.log("Argumento ID sin tracked: " + argID);
    
    //Llamada a la función del servicio "bookmarks"
    this.bookmarks.saveID(argumentoID);
  }
}
