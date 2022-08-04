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
    this.myFilter = this.bookmarks.filtrado();     
    //¿Por qué me hace el filtrado 3 veces? Porque en el template index.hbs le estoy pasando el forEach y le estoy diciendo que me imprima cada lista por lo tanto si va a pintar los 3 
    //y le digo que también haga un filtrado pues me lo va a pasar el filtrado 3 veces, por lo tanto la opción podría ser crearme un componente rentalListing al que le pase el filtro y 
    //luego dentro del rental le hago el forEach 
    
  }


  //Accedemos a nuestro argumento mediante this.args.id, sin embargo como seguramente lleguemos a trackear esta ID la guardamos aqui
  //El action que me pide el component 
  @action useService() {
    const argID = this.args.id;
    const booleano = true;
    this.isRed = !this.isRed;
    console.log("Button State [isRed]: " + this.isRed);

    //Llamada a la función del servicio "bookmarks" 
    this.bookmarks.saveID(argID, booleano);
  }


  @action checkReload(){
    
    this.bookmarks.loadAll();
    this.isRed = true;

  }


}
