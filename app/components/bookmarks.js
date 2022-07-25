import Component from '@glimmer/component';
import {service} from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BookmarksComponent extends Component {
  @service bookmarks;
  @tracked isGreen = false;
  @action usaServicio() {
    this.isGreen = !this.isGreen;
    console.log("Se ha pulsado el botón");
    this.bookmarks.usaServicio();
  }
}
function myFunction() {
  console.log('Hola has pulsado el botón');
  
}
