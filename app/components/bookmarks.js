import Component from '@glimmer/component';
import {service} from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BookmarksComponent extends Component {
  @service('bookmarks') bookmarks;
  get bookmarks(){
    return true; 
  }
  @tracked isGreen = false;
  @action toggleBookmark() {
    myFunction();
    this.isGreen = !this.isGreen;
  }
}
function myFunction() {
  console.log('Hola has pulsado el botón');
}
